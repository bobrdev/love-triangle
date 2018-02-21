/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  if( preferences.length <= 2 ) return 0;

  function getLoveSpichoneeByPosition(position){
    return preferences[position-1];
  }

  function isArrayValueDifferent (array){
    isAny = true;
    for (let i = 0; i < array.length; i++) {
      let tmp  = array[i]; 
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]){
          isAny = !isAny;
        }
      }
    }
    return isAny;
  }

  function isTrianglesExist(array, subArray){
    TrianglesExist = false;
 
    for (let index = 0; index < array.length; index++) {
      if( array[index].sort().join('') == subArray.sort().join('') ) {
        TrianglesExist = !TrianglesExist;
      }
    }
    return TrianglesExist;
  }

  var arraySpichonees = [];
  var countTriangles = 0;

  for (let index = 0; index < preferences.length; index++) {
    
    firstSpichoneePosition = index + 1;
    secondSpichoneePosition = preferences[index];
    thirdSpichoneePosition = preferences[secondSpichoneePosition-1];

     

    if( firstSpichoneePosition == getLoveSpichoneeByPosition(thirdSpichoneePosition) ){
      let tmpSubArraySpichonees = [ firstSpichoneePosition, 
                                    secondSpichoneePosition,
                                    thirdSpichoneePosition ];

      let tmpSubArraySpichoneesVal = [ preferences[firstSpichoneePosition], 
                                       preferences[secondSpichoneePosition],
                                       preferences[thirdSpichoneePosition] ];
            

      if( !isTrianglesExist(arraySpichonees, tmpSubArraySpichonees) && isArrayValueDifferent(tmpSubArraySpichoneesVal) && isArrayValueDifferent(tmpSubArraySpichonees)  ){
        arraySpichonees.push( [firstSpichoneePosition, 
                              secondSpichoneePosition,
                              thirdSpichoneePosition ] );
        countTriangles++;
      }
    }
  }
  return countTriangles;
};
