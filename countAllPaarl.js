//const regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
//var regNumbersForPaarl = allPaarl(regNumbers);
function allPaarl(regNumbers) {
    const regNumbersForPaarl = [];
     const products = regNumbers.split(',');
     
     for(var i = 0;i<products.length;i++){
       
     const overProduct = products[i].trim();
       if(overProduct.startsWith("CJ")){
       //console.log(overProduct);  
       regNumbersForPaarl.push(overProduct);
       console.log('There are 2 Paarl reg numbers.');
      }             
     } 
     return regNumbersForPaarl;
    };

    export default allPaarl;