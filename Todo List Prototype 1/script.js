const todoList=[];
function addtodo(){
    const inputElement=document.querySelector("input");
    const name=inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value="";
}
