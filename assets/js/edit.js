export const isiData = (results) => {
  const dataTodo = [
    {id: "title", path: "title"},
    {id: "description", path: "description"},
    {id: "deadline", path: "deadline"},
  ];

  console.log("isiData - Input:", results);

  dataTodo.forEach(({ id, path }) => {
    const inputElement = document.getElementById(id);
    console.log(`Updating element with ID ${id} with data from path ${path}`);
    const value = getNestedValue(results, path);
    console.log(`Setting value for ${id}:`, value);
    inputElement.value = value;
  });
}

const getNestedValue = (obj, path) => {
  console.log("getNestedValue - Input:", obj, path);
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);

      console.log("getNestedValue - Intermediate Value:", value);
  
    return value;
};
  