
1. Line 12 will print out the value of "i" which is 3, because the data type of "i" is var. Var can be used outside the block scope. 

2. Line 13 prints out the value 150. Because it is calculated at line 7. And the variable with var data type can be used outside the block scope.

3. Line 14 prints the value 150. Because the last discountedPrice is 150. (150*100)/100 is still 150. Math.round() gives an integer. And the variable with var data type can be used outside the block scope.

4. The function will return a vector [ 50, 100, 150 ]. Because in the function, every time the for loop is run, a finalPrice will be pushed into discounted vector. And "discounted" is the return value of this function. Thus, the function will return a vector [ 50, 100, 150 ].

5. The code causes an error because "let" data type can not be used outside the block scope. It is undefined. 

6. The code causes an error because "let" data type can not be used outside the block scope. It is undefined. 

7. Line 14 prints the value 150. Because the variable "finalPrice" is declared outside the for loop, so it is declared and being used in the same block scope. 

8. The function will return the vector [ 50, 100, 150 ] because the function return "discounted". The variable "discounted" is being declared in the function as an empty array and the value is pushed into "discounted" every time the for loop run. 

9. The data type of "i" is "let", it is declared inside the for loop. "let" can not be used outside the block scope, so "i" is undefined. 

10. Line 12 will print the value 3. Because length is a constant value which is defined as prices.lenght. "Prices" has length 3, so "length" is 3.

11. This function will return [ 50, 100, 150 ]. Because "discountedPrice" is not reassign every time the for loop run, it is redeclared every time the for loop run, so there is no error and return [ 50, 100, 150 ].

12. A. student.name
    
    B. student['Grad Year']

    C. student.greeting()
    
    D. student['Favorite Teacher'].name

    E. student.courseLoad[0]

13. A. 32. 2 is converted to string type

    B. 1. 3 is converted to number    

    C. 3. null is converted to 0

    D. 3null. null is converted to string

    E. 4. true is converted to 1

    F. 0. both false and null are converted to 0

    G. 3undefined. undefined is converted to string

    H. NaN. '3'-undifined is still undefined. Undefined is converted to NaN

14. A. true. String 2 becomes a number 2

    B. false. String 2 does not equal to string 12

    C. true. String 2 becomes a number 2

    D. false. === checks the equality without type conversion, so number 2 does not equal to string 2

    E. false. true becomes to 1, and 1 does not equal to 2

    F. true. Boolean(2) is a boolean type and return true. === checks the equality without type conversion.

15. === checks the equality without type conversion, == checks the equality with type conversion. 

16. [answer](part2-question16.js)

17. The result is [ 2, 4, 6 ].

    The function modifyArray() takes two parameter, one is [1,2,3], the other is doSomething. Then in the function modifyArray(), a constant variable newArr is created. Then the for loop push the elements in array into doSomething() function. doSomething() function multiply the value of element by two and return it. Then modifyArray() returns the newArr which is [ 2, 4, 6 ].

18. [answer](part2-question18.js)

19. 1

    4

    3

    2