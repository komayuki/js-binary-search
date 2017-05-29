module.exports = (array, target) => {
  var pos = Math.floor(array.length / 2);
  for(var i=0; i < array.length; i++){
    if (target === array[pos]){
      return {
	index: pos,
	itme : array[pos]
      }
    }else if(array[pos] < target){     
      pos = Math.floor(pos * 2);
    }else if(array[pos] > target){
      pos = Math.floor(pos / 2);
    }
  }
  return "not find"
}
