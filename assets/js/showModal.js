const btnModal = `
<button class="button is-small is-primary jb-modal-edit" type="button">
    <span class="icon"><i class="mdi mdi-eye"></i></span>
</button>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Handle click event on the Edit button
    document.querySelectorAll('.jb-modal-edit').forEach((button) => {
      button.addEventListener('click', () => {
        // Show the modal
        const editModal = document.getElementById('edit-modal');
        editModal.classList.add('is-active');
  
        // Close the modal when the user clicks outside of it
        editModal.addEventListener('click', (event) => {
          if (event.target.classList.contains('jb-modal-close') || event.target === editModal) {
            editModal.classList.remove('is-active');
          }
        });
      });
    });
  });
  