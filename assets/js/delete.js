function showDeleteModal(deleteId) {
  // Ubah konten modal sesuai dengan kebutuhan Anda
  document.getElementById('sample-modal-title').innerText = 'Confirm action';
  document.getElementById('sample-modal-body').innerHTML = `
    <p>This will permanently delete <b>Some Object with ID ${deleteId}</b></p>
    <p>This is a sample modal</p>
  `;
  // Tampilkan modal
  document.getElementById('sample-modal').classList.add('is-active');
}

