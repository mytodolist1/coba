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
    <button class="button is-small is-primary" type="button" href="edit.html?nilaiId=#IDEDIT#" data-presensi-id="#IDHAPUS#">
      <span class="icon"><i class="mdi mdi-eye">Edit</i></span>
    </button>
    <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button" id="del_button" onclick="deleteData('#DELETE#')">
      <span class="icon"><i class="mdi mdi-trash-can">Hapus</i></span>
    </button>
  </div>
</td>

<div id="sample-modal" class="modal">
<div class="modal-background jb-modal-close"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title">Confirm action</p>
    <button class="delete jb-modal-close" aria-label="close"></button>
  </header>
  <section class="modal-card-body">
    <p>This will permanently delete <b>Some Object</b></p>
    <p>This is sample modal</p>
  </section>
  <footer class="modal-card-foot">
    <button class="button jb-modal-close">Cancel</button>
    <button class="button is-danger jb-modal-close">Delete</button>
  </footer>
</div>
<button class="modal-close is-large jb-modal-close" aria-label="close"></button>
</div>
</div>
`;