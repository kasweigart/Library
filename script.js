let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title}${author}${pages}${read}`
    }
}

function addBookToLibrary() {
    //execute code here
}

function render() {

}
//CONSTANTS
const newBookButton = document.querySelector('#newBook');
const deleteButtons = document.querySelectorAll('#deleteButton');

//EVENT LISTENERS
function eventListeners() {
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Great!');
        })
    })

    newBookButton.addEventListener('click', () => {
        console.log('Nice!');
    })
}

eventListeners();