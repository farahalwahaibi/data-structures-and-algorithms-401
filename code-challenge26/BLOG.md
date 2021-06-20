### **Selection Sort**

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.


#### **Pseudocode**

    SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;



#### **Trace**

Sample Array: [8,4,23,42,16,15]

**Phase 1**
![phase1](phase1.JPG)

**Phase 2**
![phase2](phase2.JPG)

**Phase 3**
![phase3](phase3.JPG)

**Phase 4**
![phase4](phase4.JPG)

**Phase 5**
![phase5](phase5.JPG)

**Phase 6**
![phase6](phase6.JPG)


***
***
***