let n=5;
let asterisco="";
if (n>=1){
    console.log("n = "+n)
    for(index=0; index<n; index+=1){
        asterisco+="*"
    }
    for(index=0; index<n; index+=1){
        console.log(asterisco)
    }
    //console.log("Blz!")
}else{
    console.log("Coloque um numero maior que 0")
}