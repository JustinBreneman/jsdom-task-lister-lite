document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  let input = document.querySelector('input#new-task-description');
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value);
    addTaskToList(input.value);
    form.reset();
  });
});

function addTaskToList(description) {
  const list = document.querySelector("ul#tasks");
  let li = document.createElement('li');
  li.innerHTML = `${description}`;
  list.appendChild(li);
}