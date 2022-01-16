function Age(age,gender){
if(age<16&&gender==`m`){
console.log(`Master`)
}
else if (age>16&&gender==`m`){
console.log(`Mr`)
}
else if (age<16&&gender==`f`){
    console.log(`Miss`)
}
else if (age>16&&gender==`f`){
    console.log(`Ms`)
}
}





//•	"Mr." – мъж (пол 'm') на 16 или повече години
//•	"Master" – момче (пол 'm') под 16 години
//•	"Ms." – жена (пол 'f') на 16 или повече години
//•	"Miss" – момиче (пол 'f') под 16 години
