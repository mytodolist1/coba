import { getValue } from "https://jscroot.github.io/element/croot.js";

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}

const deadlineInputValue = getValue("deadline");

const deadlineDate = new Date(deadlineInputValue);

if (isNaN(deadlineDate.getTime())) {
    Swal.fire({
        icon: "error",
        title: "Invalid Deadline",
        text: "Please enter a valid date for the deadline.",
    });
} else {
    const today = new Date();
    if (deadlineDate < today) {
        Swal.fire({
            icon: "error",
            title: "Invalid Deadline",
            text: "Deadline must be greater than today.",
        });
    }
}

export const formattedDeadline = formatDate(deadlineDate);