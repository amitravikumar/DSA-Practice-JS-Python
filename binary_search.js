function binary_search(arr, item) {
    let low = 0;
    let high = arr.length - 1;
    let guess, mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];

        if (guess === item) {
            return mid;
        } else if (guess < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

let my_list = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(binary_search(my_list, 7));
