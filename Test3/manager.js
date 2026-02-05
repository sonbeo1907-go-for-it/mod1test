import {Book} from './book.js';

export class Manager{
    constructor(){
        this.books = [];
    }

    addNewBook(){
        const code = prompt("Nhap ma sach ((5 ki tu, bat dau 1-5))");
        if (this.findBook(code)){
            alert("Sach da ton tai");
            return;
        }

        const name = prompt("Nhap ten sach");
        const year = parseInt(prompt("Nhap nam xuat ban:"));
        const number = parseInt(prompt("Nhap so luong"));
        const newBook = new Book(code, name, year, number);
        if (newBook.code) {
            this.books.push(newBook);
            alert("Them sach thanh cong");
            return true;
        }
        return false;
    }

    addExistingBook(){
        const code =  prompt("Nhap ma sach ((5 ki tu, bat dau 1-5))");
        const book = this.findBook(code);

        if (book){
            const amount = parseInt(prompt("So luong them vao:"));
            if (amount > 0) {
                book.addBook(amount);
                alert("Đã cập nhật số lượng!");
                return true;
            }
        } else {
            alert("Khong ton tai");
        }
        return false;
    }

    borrowBook(){
        const code = prompt("Nhap ma sach:");
        const book = this.findBook(code);
        if (book){
            const amount = parseInt(prompt("So luong muon:"));
            book.borrow(amount);
            return true;
        } else {
            alert("Khong ton tai");

        }
        return false;
    }

    findBook(code){
        return this.books.find(b => b.code === code);
    }
}

export const myLibrary = new Manager();