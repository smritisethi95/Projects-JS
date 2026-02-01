let addBtn = document.getElementById('btn-add');
let item = document.getElementById('add-item');
let ul = document.getElementById('item-list');


addBtn.addEventListener('click', function(e){
  let li = document.createElement('li');
  li.id = 'item';
  li.textContent=item.value;
  let delBtn = document.createElement('button');
  delBtn.id = 'btn-del';
  delBtn.className = 'delete-btn';
  delBtn.textContent = 'X';
  li.append(delBtn);
  ul.append(li);
});

ul.addEventListener('click', function(event){
  if(event.target.classList.contains('delete-btn')){
    event.target.parentElement.remove();
  }
})
