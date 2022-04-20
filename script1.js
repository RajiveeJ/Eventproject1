// document.querySelector("seats").addEventListener("click", function(){
//     var a = parseInt(document.getElementById("seats").value);
//     var ch = document.getElementById("ch");

//     for (i = 0; i < a; i++) {
//         var input = document.createElement("input");
//         ch.appendChild(input);
//     }
// });


let element=document.querySelector("select");
element.addEventListener("click", function(){
    console.log("inseide event handler");
    var a = parseInt(document.getElementById("seats").value);
        var ch = document.getElementById("ch");
    
        for (i = 1; i < a; i++) {
            var input = document.createElement("input");
            ch.appendChild(input);
   
        }
});

function ValidationEvent(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var result="";
if(name!='' && phone!='' && email!=''){
   if(phone.length != 10){
       alert("Please enter a valid phone number");
   }
   else{
       result="true";
   }
    
    
    if(result=="true"){
        window.location.href="thanks1.html";

        }
}

else{
    alert("Please kindly fill required fields!!");
}
}

    
