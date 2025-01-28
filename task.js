function removeDuplicates(arr) {
    return [...new Set(arr)];  
  }
  
  const array = [1, 2, 3, 5, 4, 5, 6, 6, 7];
  const return1 = removeDuplicates(array);
  console.log(return1);


  //Count the Occurrences of Each Character in a String
  
      function count(str){
          const char={};
  
          for(const num of str){
             char[num] = (char[num] ||0 ) +1;
          }
          return char;
  
      }
      const res=count("hello everyone");
      console.log(res);
  
//Fizzbizz
  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); 

    } else if (i % 3 === 0) {
      console.log("Buzz"); 

    } else if (i % 5 === 0) {
      console.log("Fizz"); 

    } else {
      console.log(i);
      

    }
  }
//second largest number
  function secondLarge(arr){
    second = arr.sort((a,b) =>a-b);
    return second[second.length-2];
  }

  const secondnumber=secondLarge([1,8,7,6,5,3]);
  console.log(secondnumber);


  
  

  