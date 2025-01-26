const header = document.getElementById("header");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");



//changing the content style 
header.textContent = "Hello , we are Dom Manupulation"
header.style.color = "blue";


//Add a new item to the List 


addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  newItem.classList.add("item");
  list.appendChild(newItem);
});

//remove the item 

removeButton.addEventListener("click", () => {
    if (list.children.length > 0) {
        list.removeChild(list.lastChild)
    } else {
        alert("No More Items to be Removed !")
    }
})






// console.log(header);