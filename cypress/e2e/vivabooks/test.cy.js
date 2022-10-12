const address = {
    "companyName": "Viva Books Private Limited",
    "addressLine1": "4737/23, Ansari Road, Daryaganj",
    "addressLine2": "New Delhi 110002",
    "Tel": "011 422 422 00",
    "Fax": "0091 11 422 422 40",
    "Email": "viva@vivagroupindia.in"
}




Object.entries(address).forEach(([key, value]) => {
    console.log(`${key} ***** ${value}`);
});