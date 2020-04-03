//CONSTANTS
const newBookButton = document.querySelector("#newBook");
const readButton = document.querySelectorAll("#readButton");
const deleteButtons = document.querySelectorAll("#deleteButton");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkedInput = document.getElementById('read');
const bookDisplay = document.getElementById("bookDisplay");


let myLibrary = [];


function eventListeners() {
    deleteButtons.forEach(button => {
      button.addEventListener("click", event => {
        event.target.parentElement.parentElement.remove();
      });
    });
  
    newBookButton.addEventListener("click", addBookToLibrary);
  
    readButton.forEach(button => {
      button.addEventListener("click", event => {
        switch (event.target.innerText) {
          case "Unfinished":
            event.target.setAttribute("class", "btn btn-success");
            event.target.innerText = "Finished";
            break;
          case "Finished":
            event.target.setAttribute("class", "btn btn-warning");
            event.target.innerText = "Unfinished";
            break;
        }
      });
    });
  }


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;


  this.info = function() {
    // return `${title}${author}${pages}${read}`;
  };
}


function addBookToLibrary() {
  let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, checkedInput.checked);
  myLibrary.push(newBook);
  render(newBook);
}


function render(newBook) {
  let newDiv = document.createElement("div");

  let addBook = `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.pages}</td>
    <td><button type="button" class="btn btn-warning" id='readButton'>Unfinished</button></td>
    <td><button type="button" class="btn btn-danger" id='deleteButton'>Delete</button></td>
  </tr>`;

  newDiv.innerHTML = addBook;
  bookDisplay.append(newDiv);
}


eventListeners();

