// const firstNameElem = document.querySelector('#firstName');
// const lastNameElem = document.querySelector('#lastName');
// const phoneElem = document.querySelector('#phone');
// const mailElem = document.querySelector('#mail');
//
// const btnElem = document.querySelector('.button');
//
// btnElem.addEventListener('click', () => {
//     const firstName = firstNameElem.value;
//     const lastName = lastNameElem.value;
//     const phone = phoneElem.value;
//     const mail = mailElem.value;
//     const data = {
//         nickName : firstName,
//         lastName,
//         phone,
//         mail,
//     };
//     console.log(data);
// });

class Form {
    constructor(){
        this.firstNameElem = document.querySelector('#firstName');
        this.lastNameElem = document.querySelector('#lastName');
        this.phoneElem = document.querySelector('#phone');
        this.mailElem = document.querySelector('#mail');
        this.btnElem = document.querySelector('.button');
        this.addEvent();
    }
    addEvent(){
        this.btnElem.addEventListener('click', this.sendForm);
    }
    sendForm = () => {
        const firstName = this.firstNameElem.value;
        const lastName = this.lastNameElem.value;
        const phone = this.phoneElem.value;
        const mail = this.mailElem.value;
        const data = {
            nickName: firstName,
            lastName,
            phone,
            mail,
        };
        console.log(data);
    }
}

new Form();
