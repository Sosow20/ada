// function ifWitoutIf(condition, trueValue, falseValue) {
//      return  (condition) * (trueValue - falseValue) + falseValue { ;
//     }
//  }
// console.log("Result = ", ifWitoutIf(1, 10, 5));



// Tableaux dans un tableau 
// Exemple 1
// const pierre = ["Pierre", true, "Paris", false];
// const samir = ["Samir", true, "Paris", false];
// const users = [pierre, samir];

// console.log(users[0][1]);

// Exemple 2
const pierreArray = ["Pierre", true, "Paris", false, ["js", "html"]];
const pierre = {
    firstname: "Pierre",
    haskey: true,
    city: "Paris",
    delegate: false,
    langs: ["js", "html"],
}

console.log(`Le langage de ${pierre.firstname} est ${ pierre.langs[1]}`);
const samirArray = ["Samir", false, "Paris", true, ["js", "html"]];
const users = [pierreArray, samirArray];
console.log(
    `Name = ${users[1][0]}, haskey = ${users[0][1]} ${users[0][4][0]}`
)

