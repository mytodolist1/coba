export let formTodolist = `
<td class="is-checkbox-cell">
  <label class="b-checkbox checkbox">
    <input type="checkbox" value="false">
    <span class="check"></span>
  </label>
</td>
<td class="is-image-cell">
  <div class="image">
    <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" class="is-rounded">
  </div>
</td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
<td class="is-actions-cell">
  <div class="buttons is-right">
    <button class="button is-small is-primary" type="button">
      <span class="icon"><i class="mdi mdi-eye"></i></span>
    </button>
    <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
      <span class="icon"><i class="mdi mdi-trash-can"></i></span>
    </button>
  </div>
</td>
`;