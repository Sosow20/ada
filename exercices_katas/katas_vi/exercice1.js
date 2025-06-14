// On souhaite creer une app qui permet de dire qui a les clefs de l'ecole
// L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
// On donne en parametre, le prenom
// function hasKey(firstname)
// On va avoir un tableau avec les noms
// des personnes qui ont les clefs :
// ['Pierre', 'Laure', 'Mathilde', 'Vi']
// console.log(hasKey('Jerem')) // affiche 'non'
// console.log(hasKey('Laure')) // affiche 'oui'

// à faire avec une boucle
// const firstnames = ['Pierre', 'Laure', 'Mathilde', 'Vi']
// function haskey(firstname) {
//     for (i = 0; i < keyHolders.length; i++) {
//     }
//     if (keyHolders[i] === firstname){
//         return 'oui'
//     } 
//     return 'non'
// }



//1st example
// function hasKey(name) {
//     const firstnames = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
//     if (firstnames.includes(name)) {
//         return "oui";
//     } else {
//         return "non";
//     }
// }

// console.log(hasKey('Jerem'))


//1st example
// function hasKey(name) {
//     const firstnames = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
//     if (firstnames.includes(name)) {
//         return "oui";
//     } else {
//         return "non";
//     }
// }

// console.log(hasKey('Jerem'))

//2nd Example: correction

// const list = ['Pierre', 'Laure', 'Mathilde', 'Vi']

// function hasKey(firstname){
//     if (list[0] === firstname || 
//         list[1] === firstname || 
//         list[2] === firstname || 
//         list[3] === firstname) 
//         {
//             return 'oui';
//         }
//         else {
//             return 'non';
//         }
// }

// console.log(hasKey('Pierre'))


// Enoncé: l'objectif est de remplacer le tableau par un tableau d'object

// Exemple:
// [
//   {
//     firstname: Pierre,
//     hasKey: true
//   },
//   {
//     firstname: Jerem,
//     hasKey: false
//   }
// ]
// Et la fonction ne prend plus de paramètre mais renvoie la liste (sous forme de tableau) des personnes qui ont les clefs


// const firstname = [
//         {firstname: "Pierre", hasKey: true},
//         {firstname: "Jerem", hasKey: false},
//         {firstname: "Laure", hasKey: true},
//         {firstname: "Mathilde", hasKey: true},
//         {firstname: "Vi", hasKey: true},
// ]

// const haskey = firstname.filter(firstname => firstname.hasKey)
// console.log(haskey)


// Tableaux dans un tableau 
// const pierre = ["Pierre", true, "Paris", false];
// const samir = ["Samir", true, "Paris", false];
// const users = [pierre, samir];

// console.log(users[0][1]);


// for (const)