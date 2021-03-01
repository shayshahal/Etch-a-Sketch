const container = document.getElementById("container");
function makeGrid(rows, cols)
{
    document.documentElement.style.setProperty('--grid-rows', rows);
    document.documentElement.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows; i++) {   
        for (let j = 0; j < cols; j++) {
            let div = document.createElement('div');  
            div.addEventListener("mouseover", function(e) {e.target.classList.add("trail")});
            div.textContent = "";
            container.appendChild(div); 
        }
    }
}
function clearGrid(e)
{
    const size = document.getElementById("size").value;
    console.log(size);
    container.innerHTML = "";
    makeGrid(size, size);
}
makeGrid(16, 16);
//Code to prevent user from typing a number larger than 100
const input = document.getElementById("size");
size.oninput = function () {
    if (this.value > 100) {
        this.value = 100;
    }
    else if(this.value < 0)
    {
        this.value = 1;
    }
}
const clear = document.getElementById("clrbtn");
clear.addEventListener("click", clearGrid);