//Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".

for (i=0; i <=100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
