"use strict"

let addCoffeeTextSearch = document.querySelector('#Name1');
let addCoffeeSubmit = document.querySelector('#submit-name1');

addCoffeeTextSearch.addEventListener('click', customerAdd);
addCoffeeSubmit.addEventListener('input', updateCoffees);

function customerAdd(input) {
    input.preventDefault()
    let customerInput = addCoffeeSubmit.value
    let filteredCoffees = [];
    if (customerInput == "") {


        filteredCoffees.push(customerInput)
        console.log(filteredCoffees)

    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
}





//dont have to call the function since the function is called when the button is click on onclick

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<h5>' + coffee.roast + '</h5>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// BY ROAST
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        } else if ('All Roasts' === selectedRoast) {
            tbody.innerHTML =renderCoffees(coffees)
        }
    });
    // tbody.innerHTML = renderCoffees(filteredCoffees);
}
// my js
// function updateSearched (e) {
//     e.preventDefault();
//
//     var selectedName = submitSearch.value;
//     var filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.name === selectedName) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

function updateSearched(e) {
    e.preventDefault();
    var selectedName = submitSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name === selectedName || coffee.name.startsWith(selectedName) || submitSearch.value.toLowerCase() === coffee.name.toLowerCase() || coffee.name.toLowerCase().startsWith(selectedName.toLowerCase()) || coffee.name.includes(selectedName) || coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
            filteredCoffees.push(coffee);
            if (selectedName === coffee.name) {
              let randomJoke= ["You mocha me very happy.","How does an IT guy drink coffee? He installs Java.","What did the coffee say to their date? Hey there, hot stuff!", "How is divorce like an Espresso? – It’s expensive and bitter.","She drank so much coffee at work, she considered it part of her daily grind."];
                let joke = randomJoke[Math.floor(Math.random()*randomJoke.length)];
                alert("Here's a random joke. " + joke);
            }

        }
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

coffees.sort((a, b) => {
    return (b.id - a.id);
})


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// my js
var submitSearch = document.querySelector('#searchName');
var submitName = document.querySelector('#submit-name');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
// my js
submitName.addEventListener('click', updateSearched);
submitSearch.addEventListener('input', updateSearched);


