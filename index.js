// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
// 6. Write a JavaScript program to find leap years from 2000 to 2022

for(let i = 0;i <= 100;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzBuzz")
    }
    else if(i%3==0){
        console.log("fizz")
    }
  
    else if(i%5==0){
        console.log("buzz")
        
    }
 }
 for(let i=0;i<1000;i++){
    sum=0
    sum+=i
    if(i%3==0 && i%5==0){
        console.log(sum)
    }

 }
 for(let y=0; y<21; y++){
    if (y%2==0){
        console.log(`${y}even`)
        
    }
    else if(y%2!=0){
        console.log(`${y}odd`)
    }
 }
 let num=[-2, 4,-5, 6,0];
 let big=num[0];
 for ( var z= 0; z < num.length; z++) {
    if (big<num[z]){
        big=num[z];
         
     
    }
    
    
    }
    console.log(big); 
let a=10;
let b=40;
if (a>b){
    console.log(`${a} is the largest`)
}    else{
    console.log(`${b} is the largest`)
}
let year=2023
for(let mwaka=2000;mwaka<year;mwaka++){
    if(mwaka%4==0 || mwaka%400==0){
        console.log(`${mwaka} is leap year`)

    }
    else{
        console.log(`${mwaka} is not leap year`)
    }

}


   