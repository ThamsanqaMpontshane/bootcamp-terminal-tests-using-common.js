
module.exports = function(itemList3, threshold){
    var results3 = [];
    for (var i = 0; i < itemList3.length; i++) {
        if (itemList3[i].qty > threshold) {
        results3.push(itemList3[i]);
        }
    }
    return results3;
};

// export default findItemsOver;