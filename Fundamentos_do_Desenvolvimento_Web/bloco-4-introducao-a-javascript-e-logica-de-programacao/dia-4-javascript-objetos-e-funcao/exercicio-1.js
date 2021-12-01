let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//Primeira parte do exercicio
console.log("Priemeira Parte\n")
console.log("Bem-vinda, "+info.personagem)
console.log("_________________________________-")

//Segunda parte do exercicio
console.log("Segunda Parte\n")
info['recorrente']='Sim';
console.log(info)
console.log("_________________________________-")

//Terceira parte do exercicio
console.log("Terceira Parte\n")
for(let key in info){
  console.log(key)
}
console.log("_________________________________-")

//Quarta parte do exercicio
console.log("Quarta Parte\n")
for(let key in info){
  console.log(info[key])
}
console.log("_________________________________-")

//Quinta parte do exercicio
console.log("Quinta Parte\n")
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Comics #178",
  nota: 'O último MacPatinhas',
};
info2['recorrente']='Sim'

for(let key in info){
  console.log(info[key]+" e "+info2[key])
}
console.log("_________________________________-")