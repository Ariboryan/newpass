// To calculate age:
var year_born = prompt("1997:", "yet");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(1997);
alert("Hello, " + "you are " + calculatedAge + " years old!");

this.Text="22/11/2009";

// const addArray = arry.map((rat)=> 
// {return rat + rat })
// console.log(addArray)
  

//  eg3 this example will give you d result of the original array
// const addArray1 = arry.map((rat)=> {
// let sum3 = 0
// return sum3 += rat })
// console.log(addArray1)

 //object




let bucky = {name: "Bucky Robert", age: 30};
let taylor = {name: "Taylor swift", age: 20};

console.log(bucky.name)
console.log(bucky.age)

// document.getElementById("object").innerHTML = `${bucky.name}love ${taylor.name}because ${taylor.age}year old`

const personData =[
{name: "Bucky Robert", age: 30},
{name: "Taylor swift", age: 18},
{name: "Ezekiel e", age: 50},
{name: "abdudlahi A", age: 20},
{name: "Don pablor Richie", age: 45},
{name: "okon lemuella", age: 20},


]


//  .filter


const chkPersonAge =personData.filter((age)=> age.age
<18)

console.log(chkPersonAge)


console.log(personData[5].name)
console.log(personData[5].age)


const  numArr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9,]

console.log (numArr [0])
console.log (numArr [5]);

const [num1, num2, num3, num4, num5, num6, num7, num8, num9] = numArr

console.log(num5)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Nigeria', 'Togo', "Island"]

let land = [];
for (let i = 0; i < land.length; i++) {
    if (cities[i].population > land) {
        land.push(cities[i]);
    }
}
console.log(land);

const characters = [
    { name: 'Finland', team: 'Finland'},
    { name: 'Sweden', team: 'Sweden'},
    { name: 'Denmark', team: 'Denmark'},
    { name: 'Norway', team: 'Norway' },
    { name: 'Iceland', team: 'Iceland'},
    { name: 'Nigeria', team: 'Nigeria'},
    { name: 'Togo', team: 'Togo'},
    { name: 'Island', team: 'land'},
];
  

  const name = characters.filter(character => {
    return character.team.includes('Finland:land');
  });