const arr = [0, 4, 3, 6, 0, 2, 0, 1];

let idx = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]!==0){
        arr[idx] = arr[i];
        idx++;
    }
}

while(idx < arr.length){
    arr[idx] = 0;
    idx++;
}
console.log(arr);