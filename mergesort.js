function mergeSort(wholeArray) {

  return sortedArray
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

  while (in1 < arr1.length && in2 < arr2.length) {



    if(in1 >= arr1.length){
      //do something

    } else if (in2 >= arr2.length){
      //do something else
    }
  }

  return sorted;
}
