import { names, provinces, products } from "./data.js";
// DECLARING VARIABLES
// const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
// const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'] 

// LOGGING ALL NAMES TO CONSOLE
names.forEach(names => {
    console.log(names)
});

console.log('')

// MATCHING NAMES & PROVINCES IN CONSOLE
names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

console.log('')

// PROVINCES IN UPPERCASE
const uppercaseProvinces = provinces.map(province => province.toUpperCase());

console.log(uppercaseProvinces);

console.log('')

// AMOUNT OF CHARACTERS AS NEW ARRAY
const characterCounts = names.map(name => name.length);

console.log(characterCounts);

console.log('')

// ALL PROVINCES ALPHABETICALLY SORTED
const sortedProvinces = provinces.sort((a, b) => a.localeCompare(b));

console.log(sortedProvinces);

console.log('')

// FILTERED PROVINCES
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));

const count = filteredProvinces.length;

console.log(count);

console.log('')

// "S" CHARACTER

const hasSCharacter = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));

console.log(hasSCharacter);

console.log('')

//REDUCE METHOD
const nameProvinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameProvinceObject);

console.log('')

// ADDITIONAL EXERCISES

console.log(
    products.forEach((item) => {
        return item.product
        })

)