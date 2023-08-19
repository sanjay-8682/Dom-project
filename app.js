async function fetchData () {
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);

     
      var det = data.map(function(o){
      return  `
       Name: ${o.name+ "<br>" } 
       Email:${o.email+ "<br>"}
       Street: ${o.address["street"]+"<br>"}

        City:${o.address["city"]+ "<br>"}
      
        `});

      
    
    let text ="";
    
    for (let i =-1; i<det.length; i++){
      text += det[i] + "<div>";
    }

    document.getElementById("root").innerHTML =text;

  
      
    
  }
    
    
    
  window.onload = fetchData