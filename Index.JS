

let operator = true;
let screen = document.getElementById(`screen`);
console.log(screen)

function displayvalue() {
    try {
        return eval(document.getElementById(`screen`).innerHTML)
    } catch (error) {
        return `Error`
    }

}

function getAwnser() {
    screen.innerHTML = displayvalue();
};


function Display(val) {

    if (operator && Number(val) === isNaN && val !== `=` && val !== `C`) {

        if (operator === true) {

        } else {
            operator = true;
            screen.innerHTML = screen.innerHTML + val;
        }

    } else if (val === `C`) {
        screen.innerHTML = ``;
        operator = true;
    } else if (val === `=`) {
        getAwnser()
        operator = true;
    } else {
        operator = false;
        screen.innerHTML = screen.innerHTML + val;
    };
}
