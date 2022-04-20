function ValidationEvent(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var result="";
if(fname!='' && lname!='' && email!=''){
    if(document.getElementById("star-5").checked || document.getElementById("star-4").checked || document.getElementById("star-3").checked || document.getElementById("star-2").checked || document.getElementById("star-1").checked){
        if(document.getElementById("vu").checked || document.getElementById("u").checked || document.getElementById("n").checked || document.getElementById("s").checked || document.getElementById("vs").checked){
            
            if(document.getElementById("like1").checked || document.getElementById("like2").checked || document.getElementById("like3").checked || document.getElementById("like4").checked || document.getElementById("like5").checked){
                result="true";
            }else{alert("Please select it")}
        }else{alert("Please select it")}
    
    }else{alert("Please rate it")}
    
    
    if(result=="true"){
        window.location.href="thanks.html";

        }
}

else{
    alert("Please kindly fill required fields!!");
}
}

