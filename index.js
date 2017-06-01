module.exports = (array, target) => {
  let left  = 0;
  let right = array.length;
  
  while(left < right){
    mid = (left + right) / 2;
    mid = Math.floor(mid);
    if (target === array[mid]){
      return { 
	index: mid, 
	item: array[mid]
      }
    }else if(array[mid] > target){     
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return "not find"
}
