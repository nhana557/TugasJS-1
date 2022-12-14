let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


/* 
    a.	Ubahlah data  tersebut menggunakan spread operator menjadi: 
        name: nama anda
        email: email anda
        hobby: hobi anda

*/
let data1 = {...data, name: "Nana", email: "yamisukehiro@gmail.com", hobi: "main game"}

console.log(data1)

// b. Ambilah data “street dan city” tersebut menggunakan destructuring
const {street, city} = data.address

// tidak menggunakan destructuring
// const street = data.address.street;
// const city = data.address.city

console.log(street);
console.log(city)