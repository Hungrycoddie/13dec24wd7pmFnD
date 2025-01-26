const button = document.getElementById("mouseButton");

const hoverBox = document.getElementById("hoverBox")




button.addEventListener("click", () => {
    alert("button is clicked")
});


//movuse event

hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "blue"
})


//mousout event


hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "green"
})

