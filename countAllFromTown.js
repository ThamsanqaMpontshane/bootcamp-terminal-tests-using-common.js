function countAllFromTown(regNo, town) {
    var regNoArray = regNo.split(',');
    var count = 0;
    for (var i = 0; i < regNoArray.length; i++) {
      if (regNoArray[i].startsWith(town)) {
        count++;
      }
    }
    return count;
   }
   
export default countAllFromTown;