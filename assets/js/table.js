export const formTodolist = `
<td class="is-checkbox-cell">
  <label id="checkbox" class="b-checkbox checkbox">
    <input type="checkbox" value="false" class="checkbox">
    <span class="check"></span>
  </label>
</td>
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

export const formUser = `
<div class="field">
  <label class="label">Username</label>
  <div class="control is-clearfix">
    <input type="text" value="#USERNAME#" class="input is-static">
  </div>
</div>
<hr>
<div class="field">
  <label class="label">E-mail</label>
  <div class="control is-clearfix">
    <input type="text" value="#EMAIL#" class="input is-static">
  </div>
</div>
`;