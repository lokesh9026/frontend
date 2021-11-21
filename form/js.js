


function validation(){


var s=document.getElementById("s").value;
var apn=document.getElementById("apn").value;
var email=document.getElementById("email").value;
var cnum=document.getElementById("cnum").value;
var dob=document.getElementById("dob").value;
var adhar=document.getElementById("adhar").value;
var fname=document.getElementById("fname").value;
var mname=document.getElementById("mname").value;




if (apn==""){
document.getElementById("sapn").innerHTML="** application number is required";
return false;
}

if(isNaN(apn)){
  document.getElementById('sapn').innerHTML="** Character Not Allowed";
  return false;

}
// function stringlength(apn, mnl, mxl)
// { 

// var field = apn.value; 
// var mnlen = mnl;
// var mxlen = mxl;

// if(field.length<mxl || field.length> mnl)
// { 
// alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
// return false;
// }
// else
// { 
// alert('Your userid have accepted.');
// return true;
// }
// }
if (s==""){
  document.getElementById("ss").innerHTML="** name is required";
  return false;
  }
  
  if(!isNaN(s)){
    document.getElementById('ss').innerHTML="** Invalid input";
    return false;
  
  }
  
  if (email==""){
    document.getElementById("semail").innerHTML="**Email is required";
    return false;
}

var emailmatch=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!emailmatch.test(email)){
    alert ("invalid email");
    return true;
}
else {
document.getElementById("semail").innerHTML="**email is valid"
return false;
}

if (cnum==""){
  document.getElementById("scnum").innerHTML="** number is required";
  return false;
  }

  var phoneno = /^\d{10}$/;
  if(!phoneno.test(cnum)){
    document.getElementById('scnum').innerHTML="** 10 digits required";
    return false;
  
  }

  if (dob==""){
    document.getElementById("sdob").innerHTML="** dob is required";
    return false;
    }



if (adhar==""){
  document.getElementById("sadhar").innerHTML="** number is required";
  return false;
  }

  var aahar = /^\d{12}$/;
  if(!aahar.test(adhar)){
    document.getElementById('sadhar').innerHTML="** 12 digits required";
    return false;
  
  }



if (fname==""){
  document.getElementById("sfname").innerHTML="** name is required";
  return false;
  }
  
  if(!isNaN(fname)){
    document.getElementById('sfname').innerHTML="** Invalid input";
    return false;
  
  }

if (mname==""){
  document.getElementById("smname").innerHTML="** name is required";
  return false;
  }
  
  if(!isNaN(mname)){
    document.getElementById('smname').innerHTML="** Invalid input";
    return false;
  
  }


 }

