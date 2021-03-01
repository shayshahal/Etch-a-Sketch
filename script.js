const container = document.getElementById("container");
function random255()
{
    return Math.floor(Math.random() * (256 - 0) + 0);
}

function makeGrid(rows, cols)
{
    document.documentElement.style.setProperty('--grid-rows', rows);
    document.documentElement.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows; i++) {   
        for (let j = 0; j < cols; j++) {
            let div = document.createElement('div');  

            div.addEventListener("mouseover", function addTrail(e)
            {                
                if(!e.target.style.backgroundColor)
                    e.target.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
                else
                {
                    const regex = /[0-9]{1,3}/g;
                    let rgb = e.target.style.backgroundColor.match(regex);
                    e.target.style.backgroundColor = `rgb(${rgb[0] - rgb[0]/10}, ${rgb[1] - rgb[1]/10}, ${rgb[2] - rgb[2]/10})`;
                }
            });
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