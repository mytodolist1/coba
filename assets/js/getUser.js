import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formUser } from "./table.js";

function get(target_url,responseFunction){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-GetUserByUsername?username=" + username;

const dataUser  = (value) => {
    const data = formUser
    .replace("#USERNAME#", value.username)
    .replace("#EMAIL#", value.email);

    addInner("formUser", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUser);
    }
}

get(target_url, responseData);