let name = 'wolverine';
if (true) {
    var name = 'magneto';
}
console.log(name);

//var - var = magneto
//var - let = wolverine
//let - var = Identifier 'name' has already been declared
//let - let = wolverine
//const - const = wolverine
//const - let = wolverine
//let - const = wolverine