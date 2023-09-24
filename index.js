
const input = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

const arr = Array.from(buttons);

let string = "";

arr.forEach(button => {
    

    button.addEventListener('click', function(e){


        if (e.target.innerHTML == '=') {
            
            string = eval(string);

            input.value = string;
        }
        else if (e.target.innerHTML == 'RESET') {
            
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {

            string = string.substring(0, string.length - 1);
            
            input.value = string;
            
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })


})