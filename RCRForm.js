const RCRForm = (props) => {
  const context = useContext(ApplicationContext);

  const {
    rCR01FormFields,
    state,
    data,
    onChangeHandler,
    handleCancel,
    handleSubmit,
  } = context;

  // Fill Dropdown values
  // if (state.variables)
  //   rCR01FormFields.project.properties = prepareDropdownProperties(
  //     state.variables,
  //     "Locations",
  //     "Locations"
  //   );

  // if (state.RFTType)
  //   rCR01FormFields.category.properties = prepareDropdownProperties(
  //     state.RFTType,
  //     "Description",
  //     "Description"
  //   );


  // if (state.vendorsMaster) {
  //   console.log("=====", state.vendorsMaster)
  //   rCR01FormFieldsDefaults.supplier.properties = prepareDropdownProperties(
  //     state.vendorsMaster,
  //     "Vendor Name",
  //     "Vendor Name"
  //   );
  // }



  return (
    <ModalComponent buttonName={props.buttonName} title={props.title}>
      <Restricted accessCode={[
        APPROVER_QS,
        APPROVER_ACTG,
        TREASURY,
        PROCUREMENT,
        APPROVER_SHE,
        HR_ADMIN,
        REQUESTOR]}>
        <FormComponent
          fields={rCR01FormFields}
          data={data}
          onChangeHandler={onChangeHandler}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      </Restricted>

    </ModalComponent>
  );
};
