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
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});
