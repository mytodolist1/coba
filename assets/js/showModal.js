// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.jb-modal-edit').forEach((button) => {
//       button.addEventListener('click', () => {
//         // Show the modal
//         const editModal = document.getElementById('edit-modal');
//         editModal.classList.add('is-active');
  
//         // Close the modal when the user clicks outside of it
//         editModal.addEventListener('click', (event) => {
//           if (event.target.classList.contains('jb-modal-close') || event.target === editModal) {
//             editModal.classList.remove('is-active');
//           }
//         });
//       });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
  const editModal = document.getElementById('edit-modal');
  const iconEdit = document.querySelector('.card-header-icon .icon');

  iconEdit.addEventListener('click', function () {
    editModal.style.display = 'block';
  });
});

function cancelEdit() {
  // Mengambil elemen card
  const editModal = document.getElementById('edit-modal');

  // Menyembunyikan card
  editModal.style.display = 'none';
}

function saveChanges() {
  cancelEdit();
}