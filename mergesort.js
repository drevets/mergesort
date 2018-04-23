function mergeSort(wholeArray) {
  if (!wholeArray.length) {
    return wholeArray;
  }
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let splitArray = split(wholeArray)
  let array1 = splitArray[0]
  let array2 = splitArray[1]

  return merge(mergeSort(array1), mergeSort(array2));
}


function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let length = wholeArray.length;
  let mid = Math.floor(length/2);
  let firstHalf = wholeArray.slice(0, mid);
  let secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];

}

//what do we do for odd-length arrays??

function merge(arr1, arr2){
  let sorted = [];
  let in1 = 0, in2 =0;

  while (in1 < arr1.length || in2 < arr2.length) {

    if(in1 >= arr1.length){
      sorted = sorted.concat(arr2.slice(in2));
      break;
    } else if (in2 >= arr2.length){
      sorted = sorted.concat(arr1.slice(in1));
      break;
    } else {
      if (arr1[in1] <= arr2[in2]) {
        sorted.push(arr1[in1]);
        in1++;
      } else {
        sorted.push(arr2[in2]);
        in2++;
      }
    }
  }

  return sorted;
}
