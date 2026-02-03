let addBtn = document.getElementById('btn-add');
let item = document.getElementById('add-item');
let ul = document.getElementById('item-list');


addBtn.addEventListener('click', function (e) {
  let li = createButtonsEditAndDelete('li', 'item', '', '');
  let checkBtn = createButtonsEditAndDelete('input', 'check-btn', 'check-btn', item.value, 'checkbox', item.value);
  let btnContainer = createButtonsEditAndDelete('div', 'btn-wrapper', 'btn-wrapper', '');
  let delBtn = createButtonsEditAndDelete('button', 'btn-del', 'delete-btn', 'X');
  let editBtn = createButtonsEditAndDelete('button', 'btn-edit', 'edit-btn', 'Edit');
  btnContainer.append(editBtn, delBtn);
  li.append(checkBtn, btnContainer);
  ul.append(li);
});

function createButtonsEditAndDelete(type, id, cssClass, btnLabel, inputType, inputValue) {
  let element = document.createElement(type);
  element.id = id;
  element.className = cssClass;
  element.textContent = btnLabel;
  if (type === 'input') {
    element.type = inputType || 'text';
    if (inputValue !== undefined) {
      element.value = inputValue;
    }
  }

  return element;
}

ul.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.parentElement.remove();
  }
})
