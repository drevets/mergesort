describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2])).toEqual([[1],[2]]);
  });

  //splits a larger array
  it('is able to split a larger array into two halves', function(){
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });

  //splits an odd array
  it('splits an odd array into two halves', function(){
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  })
});

describe('Merge function', function(){
  it('is able to merge two empty arrays', function(){
    // test the merging algorithm
    expect(merge([], [])).toEqual([]);
  });

  it('is able to merge one empty array with a filled array', function(){
    // test the merging algorithm
    expect(merge([], [2])).toEqual([2]);
  });

  it('is able to merge two filled arrays', function(){
    // test the merging algorithm
    expect(merge([1, 2, 6], [3, 4])).toEqual([1, 2, 3, 4, 6]);
  });


});

describe('MergeSort', function(){
  it('it can sort an empty array', function(){
    expect(mergeSort([])).toEqual([]);
  });

  it('it can sort an array with an odd number of values', function(){
    expect(mergeSort([2,1,4])).toEqual([1,2,4]);
  });

  it('it can sort arrays with repeating values', function(){
    expect(mergeSort([1,1,1,1,1])).toEqual([1,1,1,1,1]);
  });

  it('it can sort a big array', function(){
    expect(mergeSort([10,9,8,7,6,5,4,3,2,1,1])).toEqual([1,1,2,3,4,5,6,7,8,9,10]);
  });

  it('it can sort a random array', function(){
    let randomArray = [];
    for (var i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random()*100))
    };

    let sorted = randomArray.sort();
    console.log('sorted', sorted)

    expect(mergeSort(randomArray)).toEqual(sorted);
  });


});
