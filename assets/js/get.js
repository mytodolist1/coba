import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "./table.js";
// import { get } from "./process.js";

async function getTodolist() {
    const tokens = getCookie("token");

    if (!tokens) {
        alert("Token not found, redirecting to login.");
        return;
    }

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-get";

    const myHeaders = new Headers();
    myHeaders.append("token", tokens);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(target_url, requestOptions);
        const result = await response.json();

        if (result === true) {
            displayTodolist(result.data);
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.log('error', error);
    }
}

function displayTodolist(data) {
    const table = document.getElementById("tableTodolist");
    addInner(table, formTodolist(data));
}

window.onload = getTodolist;