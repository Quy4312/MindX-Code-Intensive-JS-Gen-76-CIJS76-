let searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('timkiem')
    let filter = searchInput.value.toUpperCase();

    let li = document.querySelectorAll('.list__item');

    for (let i = 0; i < li.length; i++) {
        const name = li[i].textContent;
        const phonenumber = li[i].querySelector('.list__phonenumber').textContent;

        // ||phonenumber.indexOf(filter)>-1
        // name.toUpperCase().indexOf(filter)>-1
        if (name.toUpperCase().indexOf(filter) > -1 || phonenumber.indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = 'none';
        }
    }

})
// load books
const ul = document.querySelector('.list')
function loadBooks() {
    let phoneBooks = data;
    ul.innerHTML = '';

    for (let i = 0; i < phoneBooks.length; i++) {
        let phoneBook = phoneBooks[i];
        readBooks(phoneBook.name, phoneBook.phonenumber)
    }
}

// Read Books
function readBooks(inputname, inputphonenumber) {
    const li = document.createElement('li');
    const phoneNumber = document.createElement('span');
    //add text content
    li.textContent = inputname;
    phoneNumber.textContent = inputphonenumber;
    //add class
    li.classList.add('list__item');
    phoneNumber.classList.add('list__phonenumber');
    li.appendChild(phoneNumber);
    ul.appendChild(li);
    // reset input
    document.querySelector('.add__name').value = '';
    document.querySelector('.add__phonenumber').value = '';
}
// add books
const addButton = document.querySelector('.add__button');
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('.add__name').value;
    const inputPhoneNumber = document.querySelector('.add__phonenumber').value;
    if (inputName == '' || inputPhoneNumber == '') {
        alert('Please enter information');
        return;
    } else {
        readBooks(inputName, inputPhoneNumber);

    }
})

loadBooks();
const deleteButton=document.querySelector('.search__button--delete');
deleteButton.addEventListener('click',(e)=>{
    e.preventDefault();

    let li = document.querySelectorAll('.list__item');

    for (let i = 0; i < li.length-1; i++) {
        // const name = li[i].textContent;
        const phonenumber = li[i].querySelector('.list__phonenumber').textContent;
        // console.log(phonenumber+'vong1');
        for(let j=i+1;j<li.length;j++){
            const phonenumber1 = li[j].querySelector('.list__phonenumber').textContent;
        // console.log(phonenumber1+'---'+'vong2');
            if (phonenumber==phonenumber1) {
                console.log(`${phonenumber} giong ${phonenumber1}`);
                li[j].parentNode.removeChild(li[j]);
    
            } 

        }

    }

})