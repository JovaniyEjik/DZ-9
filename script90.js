let num = (numin) =>{
    let c = 0;
    String(numin).split('').forEach((el, i, arr) =>{
        c += el**arr.length;
    })
    if(c == numin){
        return true;
    }
    else{
        return false;
    }
}
console.log(num(7));
console.log(num(153));
console.log(num(371));
console.log(num(1652));