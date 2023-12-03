import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
// import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "./table.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByID";

// Fungsi untuk menambahkan elemen HTML berdasarkan data ToDoList
const renderToDoList = (data) => {
  const container = document.getElementById('tableTodolist');
  container.innerHTML = ''; // Bersihkan kontainer sebelum menambahkan elemen baru

  data.forEach((item) => {
    const html = formTodolist
      .replace("#ID#", item._id)
      .replace("#TITLE#", item.title)
      .replace("#DESCRIPTION#", item.description)
      .replace("#DEADLINE#", item.deadline);

    const element = document.createElement('tr');
    element.innerHTML = html;
    container.appendChild(element);

    // Menambahkan event listener untuk tombol-tombol pada item
    const editButton = element.querySelector(`[data-id="${item._id}"][data-target="edit-modal"]`);
    const deleteButton = element.querySelector(`[data-id="${item._id}"].is-danger`);

    // Event handler untuk tombol edit
    editButton.addEventListener('click', () => {
      showEditModal(item._id);
    });

    // Event handler untuk tombol delete
    deleteButton.addEventListener('click', () => {
      deleteTodo(item._id);
    });
  });
};

// Fungsi untuk menampilkan modal edit
const showEditModal = (itemId) => {
  // Lakukan logika untuk menampilkan modal edit berdasarkan itemId
  // ...
  console.log('Edit item with ID:', itemId);
};

// Fungsi untuk menghapus item
const deleteTodo = async (itemId) => {
  // Lakukan logika penghapusan berdasarkan itemId
  // ...
  console.log('Delete item with ID:', itemId);
};

// Fungsi untuk mendapatkan data dengan token
const getWithToken = (targetUrl, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(targetUrl, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
};

// Mengambil data dengan token dan merender ke dalam dokumen
getWithToken(target_url, renderToDoList);
