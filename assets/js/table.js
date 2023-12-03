export const formTodolist = `
<td></td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
<td class="is-actions-cell">
<div class="buttons is-right">
  <button class="button is-small is-primary jb-modal" data-target="edit-modal" data-id="#ID#" type="button">
    <span class="icon"><i class="mdi mdi-eye"></i></span>
  </button>
  <button class="button is-small is-danger" data-id="#ID#" type="button">
    <span class="icon"><i class="mdi mdi-trash-can"></i></span>
  </button>
</div>
</td>
`;

document.addEventListener('click', async (event) => {
  const target = event.target;
  if (target.classList.contains('is-primary')) {
    const itemId = target.getAttribute('data-id');
    // Panggil fungsi untuk menampilkan modal edit berdasarkan itemId
    await showEditModal(itemId);
  } else if (target.classList.contains('is-danger')) {
    const itemId = target.getAttribute('data-id');
    // Panggil fungsi untuk menghapus item berdasarkan itemId
    await deleteItem(itemId);
  }
});

// Fungsi untuk menampilkan modal edit
const showEditModal = async (itemId) => {
  // Ambil data berdasarkan itemId dan tampilkan modal edit
  // ...
  console.log('Edit item with ID:', itemId);
};

// Fungsi untuk menghapus item
const deleteItem = async (itemId) => {
  // Hapus item berdasarkan itemId
  // ...
  console.log('Delete item with ID:', itemId);
};