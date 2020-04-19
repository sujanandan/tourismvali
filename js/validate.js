window.onload = function() {
  var input = document.getElementById("phno").focus();
//   document.getElementById("buttonstat").disabled();
}


function validatephone()
{
  let phno=document.getElementById('phno').value;
  console.log(phno);

  let regph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // let regph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if(regph.test(phno)){
    document.myform.email.focus();
    return true;
  }
  else{
    alert("Please provide in correct format");
    document.getElementById('phno').value="";
     document.myform.phno.focus();
  return false;
    
  }

  
}

function validate()
 {
     
     let pwd=document.getElementById('pwd').value;
     let resetpwd=document.getElementById('resetpwd').value;
     console.log(pwd);
     console.log(resetpwd);
     if(pwd!=resetpwd)
     {    
      alert("Please confirm the password");
      document.getElementById('resetpwd').value="";
      document.myform.resetpwd.focus();

      // document.getElementById("buttonstat").disabled = true;
      return false;
      
    }
    else{
      console.log("confirm password");
      document.getElementById("buttonstat").disabled = false;
      document.getElementById("buttonstat").focus();
      
      return true;
    }
      
 }
function validate1()
{
     console.log("hai");
     console.log(document);
     
    //  email.focus();
     let eMail=document.getElementById("email").value;
     
    //  let pwd=document.getElementById('pwd').value;
     console.log(eMail);
    //  console.log(pwd);
 // Email validation
 let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Email Validation

//***********************************************************  */
//* Password contains digits\upper and lowercase letter and ** */
//* special character (!@#$%^&*_) ***************************  */
//*//  let regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;  */
// *   let regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3}?)$/;
// *   let regexp= (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)*/
//* let regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,20}$/;


// let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$/;


  if((eMail.trim()=="")||!(regexp.test(eMail)))
  {
    alert("Please Enter valid email");
    document.myform.email.focus();
    document.getElementById('email').value="";
    // eMail.focus();
    // document.getElementById("buttonstat").disabled = true;
    return false;
  }
 else{
     document.myform.pwd.focus();
   
    let mtrElem = document.getElementById("myMeter");
    let p1=document.getElementById("p1");
    mtrElem.style.visibility='visible';
    p1.style.visibility='visible';
    // document.getElementById("buttonstat").disabled = false;
    console.log(mtrElem);
    return true;
 }
// event.preventDefault();
}
function password1(val)
{ let p1=document.getElementById("p1"); 
  let mtrElem = document.getElementById("myMeter"); 
  let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$/;
  let pwd=document.getElementById('pwd').value;
  
  if(regexp1.test(pwd)){
    if(pwd.length>15){
          mtrElem.value=90;  
          
          document.getElementById("p1").innerHTML = "Strong";
          document.getElementById("p1").style.color = "green";    
        }
        else if(pwd.length<10){
          mtrElem.value=20;
          document.getElementById("p1").innerHTML = "Weak";
          document.getElementById("p1").style.color = "red";
        }
        else{
          mtrElem.value=50;
          document.getElementById("p1").innerHTML = "Normal";
          document.getElementById("p1").style.color = "yellow";
        } 
        // document.getElementById("buttonstat").disabled = false; 
        document.myform.resetpwd.focus();
      return true;  
  }
  else{
      alert("Password should contain atleast a Number Upper and lowercase letter and special characters");
      console.log(pwd);
      document.getElementById('pwd').value="";
      document.myform.pwd.focus();
      document.getElementById("buttonstat").disabled = true;
      return false;    

  }
//  document.myform.resetpwd.focus();
//  document.getElementById("buttonstat").disabled = false;
//  return true; 
}
function formsubmit(){
  if (document.getElementById("buttonstat").disabled===true){
    // console.log("formsubmit");
    alert("Please input all values");
    return false;
  }
  else{
  alert("you are logged in");
  return true;
  }
}

