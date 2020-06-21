const input = document.getElementById('input-text');
const add = document.getElementById('btn');
add.addEventListener('click', addList);
input.addEventListener('keypress',function(e){ 
    if(e.keyCode==13){
        e.preventDefault();
        addList();
    }
});

function addList(e) {
    const todos = document.getElementById('todos');
    const newLi = document.createElement('li');
    const inp = document.createElement('input');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        inp.value = input.value;
        input.value = '';
        todos.appendChild(newLi);
        newLi.appendChild(inp);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }
    checkBtn.addEventListener('click', function () {
        inp.style.textDecoration = 'line-through';
        inp.style.borderBottom = '1px solid crimson';
        inp.style.color='crimson';
    });
    delBtn.addEventListener('click', function () {
        newLi.remove();
    });

}
