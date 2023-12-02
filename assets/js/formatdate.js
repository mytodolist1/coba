// import { getValue } from "https://jscroot.github.io/element/croot.js";

// function formatDate(date) {
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear();
  
//     return `${day}/${month}/${year}`;
// }

// const deadlineInputValue = getValue("deadline");

// const deadlineDate = new Date(deadlineInputValue);

// export const formattedDeadline = formatDate(deadlineDate);

import { getValue } from "https://jscroot.github.io/element/croot.js";

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Mendapatkan nilai dari elemen dengan ID "deadline"
const deadlineInputValue = getValue("deadline");

console.log("Deadline Input Value:", deadlineInputValue);

// Memastikan variabel formattedDeadline terdefinisi dengan benar
let formattedDeadline;

// Jika nilai deadlineInputValue bukan tanggal yang valid
if (!isNaN(Date.parse(deadlineInputValue))) {
  // Mengonversi nilai deadline menjadi objek Date
  const deadlineDate = new Date(deadlineInputValue);

  console.log("Deadline Date:", deadlineDate);

  formattedDeadline = formatDate(deadlineDate);
} else {
  console.error("Invalid Deadline Input Value");
}

console.log("Formatted Deadline:", formattedDeadline);

export { formattedDeadline };
