const address = {
    "companyName": "Viva Books Private Limited",
    "addressLine1": "4737/23, Ansari Road, Daryaganj",
    "addressLine2": "New Delhi 110002",
    "Tel": "011 422 422 00",
    "Fax": "0091 11 422 422 40",
    "Email": "viva@vivagroupindia.in"
}


// for (let key in address) {
//     console.log(key, '*******', address[key]);
// }



// Object.keys(address).forEach(function (key) {
//     console.log(key, "====", address[key])
// });



Object.entries(address).forEach(([asdfasdfds, pppppp]) => {
    console.log(`${asdfasdfds} ***** ${pppppp}`);
});