/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports =  function getLoveTrianglesCount(preferences = []) {
  if( preferences.length <= 2 ) return 0;

  function isArrayNumberDifferent (array){
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
    
    let posA = index + 1;
    let posB = preferences[index];
    let posC = preferences[posB-1];

    let valA = preferences[index];
    let valB = preferences[posB -1];
    let valC = preferences[posC -1]; 

    tmpSubArraySpichonees = [posA, posB, posC];
     

    if( posA == preferences[posC-1] && 
        isArrayNumberDifferent( [posA, posB, posC] ) && 
        isArrayNumberDifferent( [valA, valB, valC] ) ){

      if( !isTrianglesExist(arraySpichonees, tmpSubArraySpichonees) ){
        arraySpichonees.push( tmpSubArraySpichonees );
        countTriangles++;
      }

    }
  }
  return countTriangles;
};
