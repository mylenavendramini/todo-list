const deleteTodoButton = document.querySelectorAll(".fa-trash");
const itemTodo = document.querySelectorAll(".item span");
const checkedButton = document.querySelectorAll(".fa-check");
const completedButton = document.querySelectorAll(".item span.completed");

Array.from(deleteTodoButton).forEach((el) => {
  el.addEventListener("click", deleteTodoItem);
});

Array.from(itemTodo).forEach((element) => {
  element.addEventListener("click", markComplete);
});

Array.from(completedButton).forEach((el) => {
  el.addEventListener("click", markUnComplete);
});

async function deleteTodoItem() {
  const item = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: item,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markUnComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
