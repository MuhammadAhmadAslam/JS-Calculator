function appendToDisplay(value) {
    document.getElementById('input').value += value;
}
function clearDisplay() {
    document.getElementById('input').value = '';
}

function calculate() {
    let a1 = document.getElementById('input').value
    let opreationsArray = ['+','-','/','%','*']
    for (let i = 0; i < a1.length; i++) {
       for (let j = 0; j < opreationsArray.length; j++) {
        if (a1[i] == opreationsArray[j]) {
            var copy1 = a1.slice(0,i)
            console.log(copy1);
            var copy2 = a1.slice(i+1) 
            console.log(copy2);
            console.log(opreationsArray[j]);
            var result = eval(copy1+opreationsArray[j]+copy2)
            document.getElementById('input').value = result
        }else{
            console.log('No Opreation Found')
            
        }
        
       }
        
    }
}


function backspace() {
    var currentValue = document.getElementById('input').value;
    document.getElementById('input').value = currentValue.slice(0, -1);
}

