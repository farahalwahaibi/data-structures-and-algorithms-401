### **Quick Sort**

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.



#### **Pseudocode**

    ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

    ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp



#### **Trace**

Sample Array: [10, 80, 30, 90, 40, 50, 70]

**Phase 1**

![phase1](phase1.PNG)

**Phase 2**

![phase2](phase2.PNG)

**Phase 3**

![phase3](phase3.jpeg)

**Phase 4**

![phase4](phase4.jpeg)

**Phase 5**

![phase5](phase5.jpeg)

**Phase 6**

![phase6](phase6.jpeg)

**Phase 7**

![phase7](phase7.jpeg)

**Phase 8**

![phase8](phase8.jpeg)

**Phase 9**

![phase9](phase9.jpeg)

**Phase 10**

![phase10](phase10.jpeg)

**Phase 11**

![phase11](phase11.jpeg)

**Phase 12**

![phase12](phase12.jpeg)

**Phase 13**

![phase13](phase13.jpeg)

**Phase 14**

![phase14](phase14.jpeg)





***
***
***