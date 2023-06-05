const ApplicationContext = createContext();
const App = () => {
  const [state, dispatch] = useStore();

  const [modalState, setModalState] = useState({
    formModal: false,
    detailModal: false,
    title: "Form",
  });

  const [rCR01FormFields, setRcr01FormFields] = useState(_rCR01FormFields);

  const [data, setData] = useState({
    ...rCR01FormFields,
  });

  useEffect(() => {
    setData((prev) => {
      return { ...prev, ...rCR01FormFields };
    });
  }, [rCR01FormFields]);

  const callback = (data, type) => {
    const parsedData = JSON.parse(data);
    dispatch({ type: type, payload: parsedData });
    dispatch({ type: LOADING });
  };

  useEffect(() => {
    getUserAccess();
    getVariables();
    getRFPTypes();
    getAllData();
    getVendorsMaster();
    getDisbursementAccounts();
  }, []);

  useEffect(() => {
    if (state.vendorsMaster) {
      rCR01FormFields.supplier.properties = prepareDropdownProperties(
        state.vendorsMaster,
        "Vendor Name",
        "Vendor Name"
      );
    }
  }, [state.vendorsMaster]);

  const getAllData = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_STORE))
      .getAllData();
    dispatch({ type: LOADING });
  };

  const getUserAccess = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_USER))
      .getUserAccess();
    dispatch({ type: LOADING });
  };

  const getVariables = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_VARIABLES))
      .getVariables();
    dispatch({ type: LOADING });
  };

  const getRFPTypes = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_RFT_TYPE))
      .getRFPTypes();
    dispatch({ type: LOADING });
  };

  const getVendorsMaster = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_VENDORS_MASTER))
      .getVendorsMaster();
    dispatch({ type: LOADING });
  };
  const getDisbursementAccounts = async () => {
    await google.script.run
      .withSuccessHandler((data) => callback(data, SET_DISBURSEMENT_ACCOUNTS))
      .getDisbursementAccounts();
    dispatch({ type: LOADING });
  };

  const updateData = (schema, id, value) => {
    const isNotValid = validateEntry(schema, id, value);

    setData((pre) => {
      const properties = {
        ...pre[id],
        value: value,
        error: isNotValid,
      };
      const objectData = {
        ...pre,
        [id]: properties,
      };

      return objectData;
    });
  };

  const onChangeHandler = (e, c) => {
    const id = e.target.id;
    const name = e.target.name;

    const inSelect = ["category", "supplier", "project", "rCR02Status"];

    if (inSelect.includes(name)) {
      const value = e.target.value;

      updateData(RCRSchema, name, value);
    } else if (e.target.type === "checkbox") {
      const value = e.target.value == 0 ? 1 : 0;
      updateData(RCRSchema, id, value);
    } else {
      const value = e.target.value;
      updateData(RCRSchema, id, value);
    }
  };

  const clearForm = () => {
    rCR01FormFieldsDefaults.project.properties = prepareDropdownProperties(
      state.variables,
      "Locations",
      "Locations"
    );

    rCR01FormFieldsDefaults.category.properties = prepareDropdownProperties(
      state.RFTType,
      "Description",
      "Description"
    );

    // rCR01FormFieldsDefaults.supplier.properties = prepareDropdownProperties(
    //   state.vendorsMaster,
    //   "Vendor Name",
    //   "Vendor Name"
    // );

    setData(() => {
      return { ...rCR01FormFields }
    });
  };

  const handleCancel = (e) => {
    clearForm();
    setModalState({ formModal: false });
  };

  const successResponse = (data) => {
    getAllData();
  };

  const handleSubmit = (e, stage) => {

    const { user } = state;



    if (validateAllFields(RCRSchema, data, setData)) return;

    let finalObj = {};

    Object.keys(data).map((i) => {
      let val = data[i].value;
      Object.assign(finalObj, { [i]: val });
    });

    if (stage === 1) {
      finalObj["rCR02Status"] = "Approved";
      finalObj["rCR02Approver"] = user["Employee Company Email"];
      finalObj["rCR02DateApproved"] = new Date().toLocaleDateString();
    } else if (stage === 2) {
      finalObj["rCR03Status"] = "Approved";
      finalObj["rCR03Approver"] = user["Employee Company Email"];
      finalObj["rCR03DateApproved"] = new Date().toLocaleDateString();
    } else if (stage === 3) {
      finalObj["rCR04Status"] = "Approved";
      finalObj["rCR04Approver"] = user["Employee Company Email"];
      finalObj["rCR04DateApproved"] = new Date().toLocaleDateString();
    }
    console.log({ finalObj });

    google.script.run.withSuccessHandler(successResponse).saveData(finalObj);

    clearForm();
    setModalState({ formModal: false });
  };

  const contextValue = {
    rCR01FormFields,
    setRcr01FormFields,
    state,
    modalState,
    setModalState,
    data,
    setData,
    onChangeHandler,
    handleCancel,
    handleSubmit,
  };

  const RenderForm = () => {
    return <RCRForm buttonName="New Req" title="RCR Form" />;
  };

  if (
    state.user === undefined ||
    state.request === undefined ||
    state.variables === undefined ||
    state.RFTType === undefined ||
    state.vendorsMaster === undefined ||
    state.disbursementAccounts === undefined
  ) {
    return <SkeletonLoaders />;
  }

  if (state.user.accessCode.length <= 0)
    return (
      <Grid
        container
        backgroundColor="#f5f5f5"
        spacing={2}
        marginTop={5}
        padding={2}
      >
        <Grid key={"fg"} item xs={12} textAlign="center" fontSize={30}>
          User not allowed!
        </Grid>
      </Grid>
    );

  return (
    <ApplicationContext.Provider value={contextValue}>
      <LayoutComponent>
        {RenderForm()}
        <RequestListComponent />
      </LayoutComponent>
    </ApplicationContext.Provider>
  );
};

// TODO: remove all unused
