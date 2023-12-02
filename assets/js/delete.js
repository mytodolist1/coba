export function showDeleteModal(deleteId) {
  // Ubah konten modal sesuai dengan kebutuhan Anda
  document.getElementById('sample-modal-title').innerText = 'Confirm action';
  document.getElementById('sample-modal-body').innerHTML = `
    <p>This will permanently delete <b>Some Object with ID ${deleteId}</b></p>
    <p>This is a sample modal</p>
  `;
  // Tampilkan modal
  document.getElementById('sample-modal').classList.add('is-active');
}

export const formTodolist = `
<td class="is-actions-cell">
  <div class="buttons is-right">
    <button class="button is-small is-primary" type="button" href="edit.html?nilaiId=#IDEDIT#" data-presensi-id="#IDHAPUS#">
      <span class="icon"><i class="mdi mdi-eye"></i></span>
    </button>
    <button class="button is-small is-danger jb-modal" data-target="#sample-modal" type="button" id="del_button" onclick="showDeleteModal('#DELETE#')">
      <span class="icon"><i class="mdi mdi-trash-can"></i></span>
    </button>
  </div>
</td>
`;


document.getElementById('del_button').addEventListener('click', function() {
    // Ambil nilai yang dibutuhkan untuk deleteId
    const deleteId = '#DELETE#';
    // Panggil fungsi showDeleteModal dari modul todolist.js
    showDeleteModal(deleteId);
  });