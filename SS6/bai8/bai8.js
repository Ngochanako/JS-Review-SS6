"use strict";
class Book {
    constructor(tittle, author, price) {
        this.tittle = tittle;
        this.author = author;
        this.price = price;
    }
}
let book1 = new Book("Ăn", "Hạnh", 10000);
function printBook(book) {
    console.log(book);
}
printBook(book1);
function updateBook(book) {
    let newTittle = prompt("Nhập tiêu để sách");
    if (newTittle != null) {
        book.tittle = newTittle;
        printBook(book);
    }
}
updateBook(book1);
