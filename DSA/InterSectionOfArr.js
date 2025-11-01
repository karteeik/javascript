const arr = [32,54,42,12,64,21];
const arr1 = [23,43,42,54,61,32];

arr.forEach((element, index) => {
    arr1.forEach((element, index1) => {
        if(arr[index] == arr1[index1]){
            console.log(element);
        }
    })
});