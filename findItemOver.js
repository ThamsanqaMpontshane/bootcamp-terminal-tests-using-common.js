// //the unit test for this function is are in the test.finditemmover.js file.//

// function findItemsOver(itemList, threshold){
//     var results = [];
//     for (var i = 0; i < itemList.length; i++) {
//         if (itemList[i].qty > threshold) {
//         results.push(itemList[i]);
//         }
//     }
//     return results;
// }

// function findItemsOver(itemList2, threshold){
//     var results2 = [];
//     for (var i = 0; i < itemList2.length; i++) {
//         if (itemList2[i].qty > threshold) {
//         results2.push(itemList2[i]);
//         }
//     }
//     return results2;
// }

function findItemsOver(itemList3, threshold){
    var results3 = [];
    for (var i = 0; i < itemList3.length; i++) {
        if (itemList3[i].qty > threshold) {
        results3.push(itemList3[i]);
        }
    }
    return results3;
};

export default findItemsOver;