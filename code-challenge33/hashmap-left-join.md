## **CODE CHALLENGE 33 : Hash Map Left Join**

**Write a function that LEFT JOINs two hashmaps into a single data structure**

* Write a function called left join
* Arguments: two hash maps
  * The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  * The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

**NOTES:**

* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
* If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.


[Hash Map Left Join Code](https://github.com/farahalwahaibi/data-structures-and-algorithms-401/blob/main/code-challenge33/hashmap-left-join.js)

[Hash Map Left Join Test](https://github.com/farahalwahaibi/data-structures-and-algorithms-401/blob/main/code-challenge33/__test__/hashmap-left-join.test.js)



### **White Board for Hash Map Left Join**

![white-board](1.PNG)



### **Test**

![test](2.PNG)

[Hash Map Left Join Test](https://github.com/farahalwahaibi/data-structures-and-algorithms-401/blob/main/code-challenge33/__test__/hashmap-left-join.test.js)