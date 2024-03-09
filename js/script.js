//alert("ciao");
const nameCompany = "Iron";
const address = "via Roma";
const telephoneNumber = "3486254738";
const companyProfile = nameCompany + " " + address + " " + telephoneNumber;
console.log(companyProfile)
let numberContract = 5;
const numberContractYear = 24;
const numberContractMonth = numberContractYear / 12;
console.log(numberContractMonth)
let newNumberContract = numberContract + 2;
numberContract = newNumberContract;
console.log(numberContract)
let remainContract = numberContractYear - numberContract;
console.log(remainContract)
document.getElementById("name").innerHTML = nameCompany;
document.getElementById("address").innerHTML = address;
document.getElementById("telephone").innerHTML = telephoneNumber;
