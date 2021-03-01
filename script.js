
function makeGrid(rows, cols)
{
    const container = document.getElementById("container");
    for (let i = 0; i < rows; i++) {   
        for (let j = 0; j < cols; j++) {
            let div = document.createElement('div');  
            div.addEventListener("mouseover", function(e) {e.target.classList.add("trail")});
            div.textContent = ` `;
            container.appendChild(div); 
        }
    }
}
makeGrid(16, 16);