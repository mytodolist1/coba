export const formTodolist = `
<td class="is-checkbox-cell">
<label class="b-checkbox checkbox">
  <input type="checkbox" value="false">
  <span class="check"></span>
</label>
</td>
<td></td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
<td class="is-actions-cell">
  <div class="buttons is-right">
    <button class="button is-small is-primary" type="button">
      <span class="icon"><i class="mdi mdi-eye"></i></span>
    </button>
    <button class="button is-small is-danger jb-modal" type="button">
      <span class="icon"><i class="mdi mdi-trash-can"></i></span>
    </button>
  </div>
</td>
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
