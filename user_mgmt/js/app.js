//Receiving data from inputs to create new users

var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var form = document.querySelector('.user-form');
var userStore = ObjectStore();
var userArray = userStore.query()
var userString = "";
var userList = document.querySelector('.user__list');
var removeUser = document.querySelector('.remove-user');
var sortAsc = document.querySelector('.sort-asc');
var sortDesc = document.querySelector('.sort-desc');
var userSort = document.querySelector('.user__sort');

//set's focus and caret in first name input on load
firstName.focus();
firstName.select();

//creates a new instance of the user object and adds it to the array of the object store via the add property
function addUser() {
    var newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    };
    userStore.add(User(newUser));
}

function sortListAsc() {
    var userStringLower = userString.toLowerCase();
    var userSortArray = userStringLower.split('</li>');
    var userArrayAsc = userSortArray.sort();
    var userStringAsc = userArrayAsc.join('');
    userList.innerHTML = userStringAsc;
}

function sortListDesc() {
    sortListAsc();
    var userStringDesc = userStringAsc.reverse();
}

//clears the previous string and creates a new string for each object in the object store array then appends those to each other to form one long string and enters them into the ul of the DOM
function updateListDisplay() {
    userString = '';
    for (var i = 0; i <userArray.length; ++i) {
        userString += '<li class=\"user-info\"><span class=\"user-full-name\">' + userArray[i].firstName + ' ' + userArray[i].lastName + '</span><span class=\"user-email\">' + userArray[i].email + '</span><span class=\"user-remove' + userArray[i].email + '\">X</span></li>';
    }
    // userString = userString.replace(/,/'');
}

//my attemp to use a for.Each instead, but it kept failing stating that i was unidentified and makeUserString was an anonymous function...
// function makeUserString() {d
//     userString += '<li><span class=\"full-name\">' + userArray[i].firstName + ' ' + userArray[i].lastName + '</span><span class=\"email\">' + userArray[i].email + '</span></li>';
//     userList.innerHTML = userString;
// }

//clears the input values on submission and refocuses on first name field for another entry
function clearInputs() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    firstName.focus();
    firstName.select();
    //resets value of sort select box to default of A-Z
    document.querySelector('.user__sort').value = '1';
}

//listens for submission of form to call each of the function defined above
form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    addUser();
    updateListDisplay();
    // userArray.forEach(makeUserString);
    sortListAsc();
    clearInputs();
});

function removeUser() {
    var removeUser = {

    };
    userStore.remove(User(removeUser));
    updateListDisplay();
}

userArray.indexOf()


// userSort.addEventListener('change', function(e) {
//     alert('A-Z');
//     var
// });
//
// sortAsc.addEventListener('change', function() {
//     alert('A-Z');
//     sortListAsc();
//     userList.innerHTML = userStringAsc;
// });
//
// sortDesc.addEventListener('change', function() {
//     alert('Z-A');
//     sortListDesc();
//     userList.innerHTML = userStringDesc;
// });
