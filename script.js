const input = document.createElement("input");
input.placeholder = "enter an item";
const button = document.createElement("button");
button.textContent = "Add Items";
const ul = document.createElement("ul");
document.body.append(input, button, ul);
button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("input must be filled");
    return;
  }
  const list = document.createElement("li");
  list.textContent = input.value;
  ul.appendChild(list);
  updateCount();
});
// remove click item
ul.addEventListener("click", (event) => {
  const clickitem = event.target.closest("li");
  if (clickitem && ul.contains(clickitem)) {
    clickitem.remove();
  }
  updateCount();
});

// CLICK ITEM STRIKE THORUGH
ul.addEventListener("dblclick", (event) => {
  const clickitem = event.target.closest("li");
  if (clickitem && ul.contains(clickitem)) {
    clickitem.classList.toggle("completed");
  }
});

// remove ALL
const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";
document.body.append(removeBtn);
removeBtn.addEventListener("click", () => {
  ul.replaceChildren();
});

// counter

const para = document.createElement("p");
para.textContent = "0";
document.body.appendChild(para);

function updateCount() {
  para.textContent = ul.children.length;
}
