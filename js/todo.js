const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위와 아래 같은 내용
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  //   const newToDo는 input의 value를 비우기 전의 값을 나타내는 string
  toDoInput.value = "";
  paintToDo(newToDo);
  //   그런 다음 그 입력값을 paintToDo에 넣어서 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);
