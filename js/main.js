//constants for form data
const form = document.querySelector('#form');
const orderConfirm = document.querySelector('#orderConfirm');
const orderDetails = document.querySelector('#orderDetails');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const firstCheckbox = checkboxes.length > 0 ? checkboxes[0] : null;

//create pizza class
class Pizza {
    constructor(size, crust, toppings, sauce, instructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
        this.instructions = instructions;
    }

    displayOrder() {
        return `You ordered a ${this.size} pizza with ${this.crust} crust, ${this.toppings} and ${this.sauce} sauce. Special instructions: ${this.instructions}`;
    }
}

function getFormData(){
    //get values from form
    size = form.elements['size'].value;
    crust = form.elements['crust'].value;

    //get values of checkboxes as an array
    formToppings = form.elements['toppings'];
    toppings = [];
    for (let i = 0; i < formToppings.length; i++) {
        if (formToppings[i].checked) {
            toppings.push(formToppings[i].value);
        }
    }
    sauce = form.elements['sauce'].value;
    if (sauce === '') {
        sauce = 'None';
    }
    instructions = form.elements['instructions'].value;
    if (instructions === '') {
        instructions = 'None';
    }
    //log pizza object to console
    pizza = new Pizza(size, crust, toppings, sauce, instructions);
}
 
//add event listener to form
form.addEventListener('submit', (event) => {
    event.preventDefault();

        // //check if checkboxes are checked
        // let checkedBoxes = form.querySelectorAll('input[type=checkbox]:checked');
        // if (checkedBoxes.length === 0) {
        //     firstCheckbox.setCustomValidity('Please select at least one topping.');
        //     form.reset();
        //     return;
        // }
    getFormData();
    console.log(pizza.displayOrder());
    orderConfirm.innerHTML = 'Order confirmed! <br> Order details:';
    orderDetails.innerHTML = '<li> Name: Merik de Vree </li>' + '<li> Oder Number: 200462061</li>' + '<li> Size: ' + pizza.size + '</li>' + '<li> Crust: ' + pizza.crust + '</li>' + '<li> Toppings: ' + pizza.toppings + '</li>' + '<li> Sauce: ' + pizza.sauce + '</li>' + '<li> Special instructions: ' + pizza.instructions + '</li>';
    orderDetails.innerHTML += '<br> <p>Don\'t worry, we know where you live >:) </p>';
    form.reset();
}
);
