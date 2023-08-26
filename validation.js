function validateEntry(schema, id, value) {
  const response = schema[id] && schema[id].validate(value);

  if (response && response.error) {
    return response.error.message;
  }
}

function validateAllFields(schema, data, setData) {

  const validate = Object.keys(data)
    .map((field) => {
      const response = validateEntry(schema, data[field].id, data[field].value);
      return response && { [field]: response };
    })
    .filter(Boolean);



  let errors = {};

  for (let i = 0; i < validate.length; i++) {
    Object.assign(errors, validate[i]);
  }

  Object.keys(errors).forEach((id) => {
    setData((pre) => {
      const properties = {
        ...pre[id],
        error: errors[id],
      };
      const objectData = {
        ...pre,
        [id]: properties,
      };

      return objectData;
    });
  });

  return validate.length > 0;
}

// Path: index.js
