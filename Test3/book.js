export class Book{
    constructor(code, name, year, number){

        if (!this.validateCode(code)) {
            alert("Ma sach sai dinh dang (5 ki tu, bat dau 1-5)");
            return;
        }
        if (!this.validateYear(year)) {
            alert("Nam suat ban la 4 chu so");
            return;
        }

        this.code = code;
        this.name = name;
        this.year = year;
        this.number = number;
        this.status = number > 0;
    }

    validateCode(code){
        const regex = /^[1-5][0-9]{4}$/;
        return regex.test(code);
    }

    validateYear(year){
        return Number.isInteger(year) && year >=1000 && year <= 9999;
    }

    addBook(number){
        this.number += number;
        this.status = this.number > 0;
    }

    borrow(number){
        if (number > this.number) {
            alert("Khong du de cho muon");
            return;
        }
        this.number -= number;
        this.status = this.number > 0;
    }
}