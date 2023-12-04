export const isiData = (results) => {
  const dataTodo = [
    {id: "title", path: "todo.title"},
    {id: "description", path: "todo.description"},
    {id: "deadline", path: "todo.deadline"},
  ];

  dataTodo.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    console.log(`Updating element with ID ${id} with data from path ${path}`);
    const value = getNestedValue(results, path, index, property);
    console.log(`Setting value for ${id}:`, value);
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
  