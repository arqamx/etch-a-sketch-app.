//generate the no. of divs in row n columns
function onChangeNo() {
    let newNo = document.getElementById('input-number').value;

    if(newNo > 9 && newNo < 101){
        let size = calculateDivsSize(newNo);
        let gernerateNoOfDivs = newNo ** 2;
        //remove the old divs
        document.getElementById('container').innerHTML = '';
        generateDivs(gernerateNoOfDivs, size);
    }
    
}

function generateDivs(noOf, size) {

    for(let i = 1; i <= noOf; i++){
        let div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.boxSizing = 'border-box';
        div.addEventListener("mouseenter", function() {
            var colors = ['rgb(17, 138, 178)', 'rgb(239, 71, 111)', 'rgb(255, 209, 102)', 'rgb(7, 59, 76)', 'rgb(17, 138, 178)', 'rgb(6, 214, 160)'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            div.style.backgroundColor = randomColor;
          });
        
        let containerDiv = document.getElementById('container');
        containerDiv.appendChild(div);
    }
}

//calculate the number of divs based on the space.
function calculateDivsSize(quantity) {
    let space = 560 - quantity + 1;
    return space / quantity;
}