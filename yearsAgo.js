function yearsAgo(name){
    // console.log(name)
  const date = new Date();
  return date.getFullYear()-name
  };
  
  export default yearsAgo;