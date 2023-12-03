export const formTodolist = `
<td class="is-checkbox-cell">
  <label id="checkbox" class="b-checkbox checkbox" onchange="toggleUpdateSection()">
    <input type="checkbox" value="false">
    <span class="check"></span>
  </label>
</td>
<td></td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
`;

const toggleUpdateSection = () => {
  const checkbox = document.getElementById('checkbox');
  const updateSection = document.querySelector('.modal');

  if (checkbox.checked) {
    updateSection.style.display = 'block';
  } else {
    updateSection.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.toggleUpdateSection = toggleUpdateSection;
});