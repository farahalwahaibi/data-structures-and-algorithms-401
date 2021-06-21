### **Merge Sort**

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr`[l..m]` and arr`[m+1..r]` are sorted and merges the two sorted sub-arrays into one. 


#### **Pseudocode**

    ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left



#### **Trace**

Sample Array: [38, 27, 43, 3, 9, 82, 10]

**Phase 1**

![phase1](phase1.jpg)

**Phase 2**

![phase2](phase2.jpg)

**Phase 3**

![phase3](phase3.jpg)

**Phase 4**

![phase4](phase4.jpg)

**Phase 5**

![phase5](phase5.jpg)

**Phase 6**

![phase6](phase6.JPG)

**Phase 7**

![phase7](phase7.JPG)

**Phase 8**

![phase8](phase8.JPG)

**Phase 9**

![phase9](phase9.JPG)

**Phase 10**

![phase10](phase10.JPG)

**Phase 11**

![phase11](phase11.JPG)

**Phase 12**

![phase12](phase12.JPG)

**Phase 13**

![phase13](phase13.JPG)

**Phase 14**

![phase14](phase14.JPG)

**Phase 15**

![phase15](phase15.JPG)

**Phase 16**

![phase16](phase16.JPG)

**Phase 17**

![phase17](phase17.JPG)

**Phase 18**

![phase18](phase18.jpg)



***
***
***