let a = document.querySelectorAll(".item");
let selectedItemIndex = -1; 

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("dblclick", function() {
        // Clear ticks for previously selected item
        if (selectedItemIndex !== -1) {
            let ticks = document.getElementById(`tic${selectedItemIndex + 1}`);
            ticks.style.display = "none";
            
        }
        
        // Display ticks for the double-clicked item
        let ticks = document.getElementById(`tic${i+1}`);
        ticks.style.display = "block";
        
        // Fill order for the double-clicked item
        
        fillorder(i);
        
        // Update selected item index
        selectedItemIndex = i;
    });
}

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        if (selectedItemIndex !== i) {
            
            return; // Ignore click if it's not on the double-clicked item
        }
        
        let tic = document.getElementById(`tic${i+1}`);
        tic.style.display = "none";
        delorder();
    });
}



function delorder() {
    let push=document.getElementById("insert");
    let pop1=document.getElementById("ptpic")
    let pop2=document.getElementById("it")
    let pop3=document.getElementById("pase")
    let pop4=document.getElementById("selo")
    let pop5=document.getElementById("sel")
    let pop6=document.getElementById("quan")
    let pop7=document.getElementById("ber")
    let pop8=document.getElementById("lin")
    let pop9=document.getElementById("line")
    
    
    push.removeChild(pop1)
    push.removeChild(pop2)
    push.removeChild(pop3)
    push.removeChild(pop4)
    push.removeChild(pop5)
    push.removeChild(pop6)
    push.removeChild(pop7)
    push.removeChild(pop8)
    push.removeChild(pop9)

    let pla =document.getElementById("dis");
    pla.innerHTML=" "



}





function fillorder(i){
   
    let cre=document.createElement("img");
    let cre1=document.createElement("p");
    let cre2=document.createElement("p");
    let cre3=document.createElement("hr");
    let cre4=document.createElement("label");
    let cre5=document.createElement("select");
    let cre16=document.createElement("option");
    let cre26=document.createElement("option");
    let cre36=document.createElement("option");
    let cre7=document.createElement("label");
    let cre8=document.createElement("input");
    let cre9=document.createElement("hr");
    

    
    let push=document.getElementById("insert");
    push.appendChild(cre);
    push.appendChild(cre1);
    push.appendChild(cre2);
    push.appendChild(cre3);
    push.appendChild(cre4);
    push.appendChild(cre5);
    push.appendChild(cre7);
    push.appendChild(cre8);
    push.appendChild(cre9);
    cre5.appendChild(cre16);
    cre5.appendChild(cre26);
    cre5.appendChild(cre36);


    cre.setAttribute("id","ptpic");
    cre.setAttribute("src"," ");
    cre.setAttribute("alt","foodpic");

    cre1.setAttribute("id","it");
    cre2.setAttribute("id","pase");
    cre4.setAttribute("for","sel");
    cre4.setAttribute("id","selo");
    cre4.innerHTML="size";
    cre5.setAttribute("name","sel");
    cre5.setAttribute("id","sel");
    cre16.setAttribute("value","big");
    cre16.setAttribute("id","op1");
    cre16.innerHTML="big";
    cre26.setAttribute("value","Medium");
    cre16.setAttribute("id","op2");
    cre26.innerHTML="Medium";
    cre36.setAttribute("value","Small");
    cre16.setAttribute("id","op3");
    cre36.innerHTML="Small";

    cre7.innerHTML="Quantity";
    cre7.setAttribute("id","quan");
    cre8.setAttribute("type","number");
    cre8.setAttribute("id","ber");
    cre9.setAttribute("id","lin")
    cre3.setAttribute("id","line")



    let ig=document.getElementById(`nood${i+1}`);
    let val=ig.getAttribute("src");
     let put=document.getElementById("ptpic");
     put.style.display="block";
     put.setAttribute("src",val);
     let d=document.getElementById(`one${i+1}`).innerHTML;
     let f=document.getElementById("it")
     f.innerHTML=d;
     let g=document.getElementById(`rup${i+1}`).innerHTML;
     let j=document.getElementById("pase");
     j.innerHTML=g;

     let pla =document.getElementById("dis");
     pla.innerHTML=g;
    
}




let currentIndex = 1;

function myFunction() {
    let ch = document.getElementById("ban");
    ch.setAttribute("src", `ban${currentIndex}.png`);
    currentIndex = (currentIndex % 3)+ 1; // Loop through 1, 2, 3
    setTimeout(myFunction, 3000); // Display each image for 1 second
}

myFunction(); // Start the rotation



let amu = document.getElementById("sub"); // Get the first element with class "sub"
amu.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    let pht = document.getElementById("ptpic").src;
    let p1 = document.getElementById("it").innerHTML; // Use innerHTML to get text content
    let p2 = document.getElementById("pase").innerHTML; // Use innerHTML to get text content
    let op = document.getElementById("sel").value; // Use value for select elements
    let per4 = document.getElementById("ber").value;
    


    let op1 = document.getElementById("in1").selected;
    let op2 = document.getElementById("in2").selected;
    let op3 = document.getElementById("in3").selected;
    let op4 = document.getElementById("in4").selected;
    let op5 = document.getElementById("in5").selected;
    let op6 = document.getElementById("in6").selected;
    let op7 = document.getElementById("in7").selected;

    
    if (pht !== " " && p1 !== "" && p2 !== "" && per4 !== "" && op !== ""&& op1 !== " "&& op2 !== " "&& op3 !== " "&& op4 !== " "&& op5 !== " "&& op6 !== " "&& op7 !== " " ) {
        window.alert("Order successful");
    } else {
        window.alert("Enter the details");
    }
});
