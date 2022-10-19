// ***Palindrome Problem***

str="naman";
let bag="";

for(i=str.length-1;i>=0;i--){
   bag+=str[i];
}

(bag==str) ? console.log("Yes! It is a palindrome string") : console.log("No! It is not a palindrome string")