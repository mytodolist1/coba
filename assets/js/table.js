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

function showModal() {
  const modal = document.getElementById("edit-modal");

  modal.style.display = 'block';
}

const jbModal = document.querySelector(".jb-modal");

jbModal.addEventListener("click", showModal);