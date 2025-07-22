const todoList=[];

renderTodoList()

function renderTodoList(){
    
let todoListHTML=``;

    for (i=0; i<=todoList.length-1; i++){
        const todo = todoList[i];
        const html=`<p>${todo}</p>`;
        todoListHTML+=html;
    }
    document.querySelector(".list").innerHTML=todoListHTML;
    inputElement.value="";
}
function addtodo(){
    const inputElement=document.querySelector("input"); 
    const name=inputElement.value;
    todoList.push(name);
    inputElement.value = "";
    renderTodoList();
}
