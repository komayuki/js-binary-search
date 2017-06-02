module.exports = (list, target) => {
  if (typeof list !== "object") {
    return "type error"
  }

  let left  = 0;
  let right = list.length;
  
  while(left < right){
    mid = (left + right) / 2;
    mid = Math.floor(mid);
    if (target === list[mid]){
      return { 
	index: mid, 
	item: list[mid]
      }
    }else if(list[mid] > target){     
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return "not found"
}
