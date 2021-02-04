let numbers = [3,4,5,6,7,8,9];


/* map with fuction*/
 const result1 = numbers.map(function(element){
     return element * element;
 })
 console.log(result1);



/*with basic way*/


const results = [];
for( let i=0; i < numbers.length; i++)
{
    const newNumber = numbers[i];
    const result2 = newNumber * newNumber;
    results.push(result2);
}
 console.log(results);

 
 const result3 = numbers.map(x => x*x); 
 console.log(result3);