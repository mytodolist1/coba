import { addInner } from "https://jscroot.github.io/element/croot.js";

async function get(target_url, responseFunction) {
  try {
    const response = await fetch(target_url);
    const result = await response.json();
    responseFunction(result);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const usernames = urlParams.get("username");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-GetUserByUsername?username=" + usernames;

const dataUser = (value) => {
  const data = `
      <label class="label">Username</label>
      <div class="control is-clearfix">
        <input type="text" value="${value.username}" class="input is-dynamic">
      </div>
    <hr>
      <label class="label">E-mail</label>
      <div class="control is-clearfix">
        <input type="text" value="${value.email}" class="input is-dynamic">
      </div>
  `;

  addInner("profileUser", data);
};

const responseData = async (result) => {
  if (result.status === true) {
    for (const value of result.data) {
      dataUser(value);
    }
  }
};

await get(target_url, responseData);
