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
  if (state.variables)
    rCR01FormFields.project.properties = prepareDropdownProperties(
      state.variables,
      "Locations",
      "Locations"
    );

  if (state.RFTType)
    rCR01FormFields.category.properties = prepareDropdownProperties(
      state.RFTType,
      "Description",
      "Description"
    );
console.log("FORM FIELDS", rCR01FormFields)
  return (
    <ModalComponent buttonName={props.buttonName} title={props.title}>
      <FormComponent
        fields={rCR01FormFields}
        data={data}
        onChangeHandler={onChangeHandler}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </ModalComponent>
  );
};
