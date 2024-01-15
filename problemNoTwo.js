const mergeSort = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let temp = nums1.length - 1;
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[temp] = nums1[i];
            temp--;
            i--;
        } else {
            nums1[temp] = nums2[j];
            temp--;
            j--;
        }
    }
    return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;
console.log('result:', mergeSort(nums1, m, nums2, n));

/* 
Time complexity: O(m+n)

Space complexity: O(1)
*/
