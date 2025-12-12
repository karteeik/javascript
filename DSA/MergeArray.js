const arr = [2, 7, 5, 3, 6, 85, 3, 57, 2];
const arr1 = [78, 45, 23, 85, 9, 8, 2, 7];

const mergeArray = [...arr, ...arr1];

const removeDuplicate = mergeArray.filter(
  (currElem, index) => mergeArray.indexOf(currElem) === index
);

console.log(removeDuplicate);

// const uniqArray = [];

// for(let i=0; i< mergeArray.length; i++){
//     let isDuplicate = false;
//     for(let j=0; j<mergeArray.length; j++){
//         if(mergeArray[i]==uniqArray[j]){
//             isDuplicate = true;
//             break;
//         }
//     }
//     if(!isDuplicate){
//         uniqArray.push(mergeArray[i]);
//     }
// }

// console.log(uniqArray);
