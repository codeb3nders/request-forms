const style = {
  position: "absolute",
  top: "25%",
  left: "30%",
  transform: "translate(-20%, -20%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  maxHeight: "90%",
};

const routeTo = (page = "main") => {
  console.log(`CHANGE ROUTE TO ${page}`);
};

const FormComponent = ({
  data,
  onChangeHandler,
  handleCancel,
  handleSubmit,
}) => {
  const context = useContext(ApplicationContext);

  const { modalState } = context;
  const fields = data;

  const populateDropdown = (properties) => {
    return properties.map((item, i) => {
      return (
        <MenuItem key={i} value={item.value}>
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {Object.keys(fields).map((field) => {
        if (!fields[field].name) return;
        if (!fields[field].id.startsWith("rCR"))
          if (fields[field].type === "select") {
            return (
              <Grid key={field} item xs={4}>
                <Autocomplete
                  value={fields[field].value}
                  onChange={(event, newValue) => {
                    const evnt = {
                      target: {
                        id: fields[field].id,
                        name: fields[field].name,
                        value: newValue.value
                      }
                    }
                    onChangeHandler(evnt);
                  }}
                  id={fields[field].id}
                  name={fields[field].id}
                  options={fields[field].properties}
                  sx={{ width: 300 }}
                  error={!!fields[field].error}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={fields[field].placeholder}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      label={fields[field].label}
                      required={fields[field].required}
                      error={!!fields[field].error}
                    />
                  )}
                />
              </Grid>
            );
          } else if (fields[field].type === "select-old") {
            return (
              <Grid key={field} item xs={4}>
                <FormControl
                  style={{ margin: "5px 0 0 2px", m: 1, width: 230 }}
                >
                  <InputLabel id={fields[field].id}>
                    {fields[field].label}
                  </InputLabel>
                  {/* <Select
                  value={fields[field].value}
                  onChange={onChangeHandler}
                  options={fields[field].properties}
                /> */}

                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={fields[field].label}
                    name={fields[field].name}
                    value={fields[field].value}
                    onChange={onChangeHandler}
                    error={!!fields[field].error}
                    disabled={fields[field].disabled}
                  >
                    <MenuItem value={10}>None</MenuItem>
                    {fields[field].properties.map((item, i) => {
                      return (
                        <MenuItem key={field + i} value={item.value}>
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            );
          } else if (fields[field].type === "checkbox") {
            return (
              <Grid key={field} item xs={4}>
                <FormControlLabel
                  style={{
                    margin: "10px 0 0 5px",
                    padding: 5,
                    width: 230,
                    border: "1px solid #DCDCDC",
                    borderRadius: 5,
                  }}
                  control={
                    <Checkbox
                      id={fields[field].id}
                      name={fields[field].id}
                      checked={!!fields[field].value}
                      onChange={onChangeHandler}
                      defaultValue={fields[field].defaultValue}
                    />
                  }
                  label={fields[field].label}
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={`tf${field}`} item xs={4}>
                <TextField
                  multiline={fields[field].multiline}
                  key={fields[field].id}
                  name={fields[field].name}
                  required={fields[field].required}
                  id={fields[field].id}
                  label={fields[field].label}
                  value={fields[field].value}
                  type={fields[field].type}
                  defaultValue={fields[field].defaultValue}
                  placeholder={fields[field].placeholder}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // helperText={fields[field].error}
                  variant={fields[field].variant}
                  disabled={fields[field].disabled}
                  onChange={onChangeHandler}
                  error={!!fields[field].error}
                />
              </Grid>
            );
          }
      })}
      {modalState.withDivider && (
        <Grid key={"fg"} item xs={12}>
          <hr />
        </Grid>
      )}
      {Object.keys(fields).map((field) => {
        if (!fields[field].name) return;
        if (fields[field].id.startsWith("rCR"))
          if (fields[field].type === "select") {
            return (
              <Grid key={field} item xs={4}>
                <FormControl
                  style={{ margin: "5px 0 0 2px", m: 1, width: 230 }}
                >
                  <InputLabel id={fields[field].id}>
                    {fields[field].label}
                  </InputLabel>
                  {/* <Select
                  value={fields[field].value}
                  onChange={onChangeHandler}
                  options={fields[field].properties}
                /> */}

                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={fields[field].label}
                    name={fields[field].name}
                    value={fields[field].value}
                    onChange={onChangeHandler}
                    error={!!fields[field].error}
                    disabled={fields[field].disabled}
                  >
                    <MenuItem value={10}>None</MenuItem>
                    {fields[field].properties.map((item, i) => {
                      return (
                        <MenuItem key={field + i} value={item.value}>
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            );
          } else if (fields[field].type === "checkbox") {
            return (
              <Grid key={field} item xs={4}>
                <FormControlLabel
                  style={{
                    margin: "10px 0 0 5px",
                    padding: 5,
                    width: 230,
                    border: "1px solid #DCDCDC",
                    borderRadius: 5,
                  }}
                  control={
                    <Checkbox
                      id={fields[field].id}
                      name={fields[field].id}
                      checked={!!fields[field].value}
                      onChange={onChangeHandler}
                      defaultValue={fields[field].defaultValue}
                    />
                  }
                  label={fields[field].label}
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={`tf${field}`} item xs={4}>
                <TextField
                  key={fields[field].id}
                  name={fields[field].name}
                  required={fields[field].required}
                  id={fields[field].id}
                  label={fields[field].label}
                  value={fields[field].value}
                  type={fields[field].type}
                  defaultValue={fields[field].defaultValue}
                  placeholder={fields[field].placeholder}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={fields[field].error}
                  variant={fields[field].variant}
                  disabled={fields[field].disabled}
                  onChange={onChangeHandler}
                  error={!!fields[field].error}
                />
              </Grid>
            );
          }
      })}
      <Grid
        style={{
          display: "flex",
          margin: 10,
          justifyContent: "center",
          border: "1px solid #DCDCDC",
          borderRadius: 5,
        }}
        item
        xs={11}
      >
        <Button
          style={{ margin: 10 }}
          onClick={handleCancel}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          style={{ margin: 10 }}
          onClick={(e) => handleSubmit(e, modalState.stage)}
          variant="contained"
        >
          {modalState.buttonProps
            ? modalState.buttonProps.submitLabel
            : "Submit"}
        </Button>
      </Grid>
    </Grid>
  );
};

const ModalComponent = ({ buttonName, title, children }) => {
  const context = useContext(ApplicationContext);

  return (
    <div>
      <Modal
        open={!!context.modalState.formModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={style}>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <IconButton color="primary" aria-label="upload picture" component="span"
                onClick={context.handleCancel}              >
                <Icon>close</Icon>
              </IconButton>
            </div>

            <Typography
              style={{ marginBottom: 30 }}
              id="modal-modal-title"
              variant="h6"
            // component="h2"
            >
              {context.modalState.title ? context.modalState.title : title}
            </Typography>

            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const DetailModalComponent = ({ title, children }) => {
  const context = useContext(ApplicationContext);
  return (
    <div>
      <Modal
        open={!!context.modalState.detailModal}
        onClose={() => context.setModalState({ detailModal: false })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box sx={style}>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <IconButton color="primary" aria-label="upload picture" component="span"
                onClick={context.handleCancel}              >
                <Icon>close</Icon>
              </IconButton>
            </div>

            <Typography id="modal-modal-title" variant="h6">
              {title}
            </Typography>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const Amount = (number, currency = "PHP") => {
  let PhilPeso = new Intl.NumberFormat("en-ph", {
    style: "currency",
    currency,
  });

  return number ? PhilPeso.format(number) : PhilPeso.format(0);
};

const Denied = ({ children, title }) => {
  return (

    <Grid
      container
      marginTop={5}
      padding={2}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      justify="center"
      style={{ height: "70vh" }}
    >
      <Grid key={"fg"} item xs={7}
        textAlign={'start'} borderRadius={2} fontSize={30} backgroundColor="#f5f5f5">
        <Grid padding={1} paddingLeft={2.5} item fontSize={20} textTransform="uppercase" backgroundColor='#dddddd'>
          {title ? title : "Access Denied"}
        </Grid>
        <Grid margin={2} item fontSize={18}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}

const Restricted = ({ children, accessCode }) => {
  const context = useContext(ApplicationContext);
  const user = context.state.user;

  if (setAllowedAccess(user, accessCode)) {
    return children;
  } else {
    return (
      <Denied>
        <p> The page you are trying to access has restricted access or it is temporarily down for maintenace. Please refer to your it support for more information.</p>
      </Denied>
    )
  }
}


