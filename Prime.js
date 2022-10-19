//***Prime Number***

let num=13;
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
	count = count + 1;
    }
}

(count==2) ? console.log(num,"is a Prime Number.") : console.log(num,"is a Not Prime Number.");