let a = document.querySelector(".butty");
a.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  
  let nam = document.getElementById("name").value;
  
  
  
  let naal = document.getElementById("date").value;
 
  
  let phn = document.getElementById("phone").value;
  
  
  let gmail = document.getElementById("email").value;
  
 
  let per = document.getElementById("persons").value;
  
  

  if (nam !== "" && naal !== "" && phn !== "" && gmail !== "" && per !== "") {
    
    booked(nam, naal,phn, gmail, per);
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("persons").disabled = true;
    document.getElementById("date").disabled = true;
    document.querySelector(".butty").disabled = true;
    
  }
  else{
    window.alert("enter the details")
  }
});


function booked(nam1, naal1) {
  let tableNo = Math.floor(Math.random() * 1000); 
  document.getElementById("cusnam").value = nam1;
  document.getElementById("tabno").value = tableNo;
  document.getElementById("dat").value = naal1;
  document.getElementById("tabledetails").style.display = "block";
}

let b = document.querySelector("#close");
b.addEventListener("click", function(event) {
  document.getElementById("tabledetails").style.display = "none";
});

let out=getElementById("abt")
out.addEventListener("click",)