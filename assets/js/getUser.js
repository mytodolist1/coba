import { get } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formUser } from "./table.js";

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-GetUserByUsername?username=" + username;

const dataUser  = (value) => {
    const data = formUser
    .replace("#USERNAME#", value.username)
    .replace("#EMAIL#", value.email);

    addInner("profileUser", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUser);
    }
}

get(target_url, responseData);