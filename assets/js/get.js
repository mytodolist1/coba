import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "./table.js";
import { get } from "./process.js";

function showTodolist(results) {
    results.forEach(showData);
    console.log(results);
}

// const urlParams = new URLSearchParams(window.location.search);
// const user = urlParams.get("user");

let targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodo";

function showData(data) {
    let form = formTodolist
        .replace("#TITLE#", data.title)
        .replace("#DESCRIPTION#", data.description)
        .replace("#DEADLINE#", data.deadline);

    addInner("tableTodolist", form);
}

get(targer_url, showTodolist);