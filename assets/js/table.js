export const formTodolist = `
<td class="is-checkbox-cell">
  <label id="checkbox" class="b-checkbox checkbox">
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
  <a href="edit.html?todoID=#IDEDIT#" id="#IDHAPUS#" class="button is-small is-primary jb-modal" type="button">
    <span class="icon"><i class="mdi mdi-eye"></i></span>
  </button>
  <button class="button is-small is-danger" type="button" onclick="deleteTodo("DELETE")">
    <span class="icon"><i class="mdi mdi-trash-can"></i></span>
  </button>
</div>
</td>
`;
