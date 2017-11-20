export default {
  search (list, target) {
    if (!list instanceof Array) {
      throw new Error()
    }

    var left  = 0;
    var right = list.length;

    while(left < right){
      var mid = (left + right) / 2;
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
    return -1
  },
  search_in_associative (list, key, target) {
    if (!list instanceof Array) {
      throw new Error()
    }

    let left  = 0;
    let right = list.length;

    while(left < right){
      var mid = (left + right) / 2;
      mid = Math.floor(mid);
      if (target === list[mid][key]){
        return {
          index: mid,
          item: list[mid]
        }
      }else if(list[mid][key] > target){
        right = mid;
      }else{
        left = mid + 1;
      }
    }
    return "not found"
  }
}
