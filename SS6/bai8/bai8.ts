class Book{
    tittle: string;
    author: string;
    price: number;
    constructor(tittle:string,author:string,price:number){
        this.tittle=tittle;
        this.author=author;
        this.price=price;
    }
}
let book1=new Book("Ăn","Hạnh",10000);
function printBook(book:Book):void{
    console.log(book);
}
printBook(book1);
function updateBook(book:Book):void{
    let newTittle=prompt("Nhập tiêu để sách");
    if(newTittle!=null){
        book.tittle=newTittle;
        printBook(book);
    }
}
updateBook(book1);
