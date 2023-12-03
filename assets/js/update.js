import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const putData = (target_url, data, responseFunction) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(result))
        .catch(error => console.log('error', error));
}

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list_kegiatan.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: result.message,
        });
    }
}

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const todoID = urlParams.get("id");

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateTodo?id=" + todoID;

    const data = {
        "title": getValue("edit-title-input"),
        "description": getValue("edit-description-input"),
        "deadline": getValue("edit-deadline-input"),
    };
    
    putData(target_url, data, responseData);
};

window.updateTodo = updateTodo;

// const btnUpdate = document.getElementById("btnUpdate");

// btnUpdate.addEventListener("click", updateTodo);
