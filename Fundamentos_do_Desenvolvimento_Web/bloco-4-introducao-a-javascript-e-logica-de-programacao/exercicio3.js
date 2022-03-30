let n=5;
let n2=n-1;
let espaco="";
let asterisco="";
if (n>=1){
    console.log("n = "+n)
    for(index=0; index<n; index+=1){
        espaco=""
        for (index2=n2;index2>0; index2-=1){
            espaco+=" "
        }
        asterisco+="*"
        console.log(espaco,asterisco)
        n2-=1
    }
}else{
    console.log("Coloque um numero maior que 0")
}