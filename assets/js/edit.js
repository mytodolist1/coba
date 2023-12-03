export const isiData = (results) => {
  const dataTodo = [
    {id: "edit-title-input", path: "todo.title"},
    {id: "edit-description-input", path: "todo.description"},
    {id: "edit-deadline-input", path: "todo.deadline"},
  ];

  dataTodo.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

const getNestedValue = (obj, path, index, property) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
};

  