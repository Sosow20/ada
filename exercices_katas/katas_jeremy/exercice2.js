// function calculPrice(articles){
//     let total = 0
//     for (let i = 0; i < articles.length; i++){
//         total += articles[i]
//         if (articles[i] === 4){
//         return total
//         }
//     }
//     return total;
// }

// console.log("Test 1:", calculPrice([1, 2, 4]));
// console.log("Test 2:", calculPrice([10, 4, 7]));
// console.log("Test 3:", calculPrice([7, 7, 7]));

// une fonction qui prend en paramètre un nombre d'articles et qui retourne un  tableau de prix aléatoire entre 1 et 10
// 
// const createPrices = (articlesCount)=>{
//     // tableau vide
//     let number = []
//     for (i = 0; i < articlesCount; i++){
//         // console.log("number in boucle", number)
//         number.push(0)
//         // push
//     }
//     return number
//     // retourne
// }

// // consolelog
// console.log("final result", createPrices(4)) // [0, 0, 0]
// // createPrices(2) // [0, 0]



function convertDigitToLetters(digit) {
    let numberLetters = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]
    for (i = 0; i < numberLetters.length ; i++){
        console.log(`le chiffre à l'indice ${i}`, "correspond à ")
    }
    

    
}
console.log(convertDigitToLetters([2]))