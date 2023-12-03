export const formTodolist = `
<td></td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
<td class="is-actions-cell">
<div class="buttons is-right">
  <button class="button is-small is-primary jb-modal" data-target="edit-modal" type="button">
    <span class="icon"><i class="mdi mdi-eye"></i></span>
  </button>
  <button class="button is-small is-danger" type="button">
    <span class="icon"><i class="mdi mdi-trash-can"></i></span>
  </button>
</div>
</td>
`;


Array.from(document.getElementsByClassName('jb-modal')).forEach(function (el) {
  el.addEventListener('click', function (e) {
    var modalTarget = e.currentTarget.getAttribute('data-target');
    document.getElementById(modalTarget).classList.add('is-active');
    document.documentElement.classList.add('is-clipped');
  });
});
/* Modal: close */

Array.from(document.getElementsByClassName('jb-modal-close')).forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.currentTarget.closest('.modal').classList.remove('is-active');
    document.documentElement.classList.remove('is-clipped');
  });
});