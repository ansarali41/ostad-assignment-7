function findKthLargest(nums, k) {
    const quickSort = (arr, low, high, k) => {
        if (low <= high) {
            const partitionIndex = partition(arr, low, high);

            if (partitionIndex === k - 1) {
                return arr[partitionIndex];
            } else if (partitionIndex < k - 1) {
                return quickSort(arr, partitionIndex + 1, high, k);
            } else {
                return quickSort(arr, low, partitionIndex - 1, k);
            }
        }
    };

    const partition = (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] >= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    };

    return quickSort(nums, 0, nums.length - 1, k);
}

// Example usage:
const nums1 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
console.log(findKthLargest(nums1, k1)); // Output: 5

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;
console.log(findKthLargest(nums2, k2)); // Output: 4

/*
 QuickSort algorithm, and the worst-case time complexity is O(n log n). However, keep in mind that QuickSort's worst case occurs when the pivot selection is poor, which is less likely with a good pivot selection strategy. In practice, this algorithm often performs well.
*/
