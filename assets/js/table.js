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
    <button class="button is-small is-primary jb-modal" data-target="#edit-modal" type="button">
      <span class="icon"><i class="mdi mdi-eye"></i></span>
    </button>
  </div>
</td>
`;

document.addEventListener('DOMContentLoaded', function () {
  const editButton = document.querySelector('.jb-modal');
  const editModal = document.getElementById('edit-modal');
  const closeModalButtons = document.querySelectorAll('.jb-modal-close');

  const showModal = () => {
    editModal.classList.add('is-active');
  };

  const hideModal = () => {
    editModal.classList.remove('is-active');
  };

  editButton.addEventListener('click', showModal);

  closeModalButtons.forEach(button => {
    button.addEventListener('click', hideModal);
  });
});
