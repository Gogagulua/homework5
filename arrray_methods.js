// Slice and Splice
// 1. Using the `splice` method, insert the numbers 6, 7, and 8 after the number 5 in the following array.
let spArray1 = [1, 2, 3, 4, 5, 9, 10];
spArray1.splice(5,0, 6,7,8)

// 2. Using the `splice` method, replace the numbers 3 and 4 with 8 and 9 in the following array.
let spArray2 = [1, 2, 3, 4, 5];
spArray2.splice(2,2,8,9);

// 3. Using the `slice` method, extract the numbers 4, 5, and 6 from the following array.
let spArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let extracted = spArray3.slice(3,6)

// 4. Using the `splice` method, remove the first two elements and add the number 0 at the beginning of the following array.
let spArray4 = [1, 2, 3, 4, 5];
spArray4.splice(0, 2, 0);

// 5. Using the `splice` method, remove the last three elements from the following array.
let spArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
spArray5.splice(6,3);


// 6. Using the `slice` method, create a new array that contains the last three elements of the following array.
let spArray6 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let minispArray6 = spArray6.slice(6,9)

// 7. Using the `splice` method, insert the word "apple" after "banana" in the following array.
let spArray7 = ["orange", "banana", "grape"];
spArray7.splice(2,0, "apple")

// 8. Using the `slice` method, create a new array that contains the first four fruits of the following array.
let spArray8 = ["apple", "banana", "cherry", "date", "fig", "grape"];
let minispArray8 = spArray8.slice(0,4)

// 9. Using the `splice` method, swap the positions of "cat" and "dog" in the following array.
let spArray9 = ["cat", "dog", "elephant"];
spArray9.splice(0,2,"dog","cat")

// 10. Using the `splice` method, remove the elements "four" and "five" and replace them with "six" and "seven" in the following array.
let spArray10 = ["one", "two", "three", "four", "five"];
spArray10.splice(3,2, "six", "seven")






// 1. Using the `push` method, add the number 7 to the end of the following array.
let arr1 = [1, 2, 3, 4, 5, 6];
arr1.push(7)

// 2. Using the `pop` method, remove the last element from the following array.
let arr2 = [1, 2, 3, 4, 5, 6];
arr2.pop()

// 3. Using the `shift` method, remove the first element from the following array.
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.shift()

// 4. Using the `unshift` method, add the number 0 to the beginning of the following array.
let arr4 = [1, 2, 3, 4, 5, 6];
arr4.unshift(0)

// 5. Using the `splice` method, remove the third element from the following array.
let arr5 = [1, 2, 3, 4, 5, 6];
arr5.splice(2,1)

// 6. Using the `slice` method, create a new array that contains the second and third elements of the following array.
let arr6 = [1, 2, 3, 4, 5, 6];
let miniarr6 = arr6.slice(1,3)

// 7. Using the `concat` method, merge the following two arrays into one.
let arr7a = [1, 2, 3];
let arr7b = [4, 5, 6];
let arr7ab = arr7a.concat(arr7b)

// 8. Using the `join` method, convert the following array into a string separated by hyphens.
let arr8 = ["a", "b", "c", "d"];
let ARR8 = arr8.join(" - ")

// 17. Using the `indexOf` method, find the index of the number 4 in the following array.
let arr17 = [1, 2, 3, 4, 5];
let index = arr17.indexOf(4)

// 18. Using the `lastIndexOf` method, find the last occurrence of the number 2 in the following array.
let arr18 = [1, 2, 3, 2, 4, 2, 5];
let LastIndex = arr18.lastIndexOf(2)

// 19. Using the `isArray` method, check if the following variable is an array.
let var19 = [1, 2, 3, 4, 5];
let result = Array.isArray(var19)

// 20. Using the `fill` method, change all elements in the following array to the number 0.
let arr20 = [1, 2, 3, 4, 5];
arr20.fill(0)