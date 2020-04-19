function validate()
 {
     console.log("hai");
     console.log(document);
     email.focus();
     let eMail=document.getElementById("email").value;
      
     let pwd=document.getElementById('pwd').value;
     console.log(eMail);
     console.log(pwd);
 // Email validation
 let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    let regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3}?)$/;
//    let regexp= (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) 
  if((eMail=="")||!(regexp.test(eMail)))
  {
    alert("Please Enter valid email");
    
    return false;
  }
return false;
}
function validate1()
{
    console.log("hai");
     console.log(document);
    //  email.focus();
     let eMail=document.getElementById("email").value;
      
     let pwd=document.getElementById('pwd').value;
     console.log(eMail);
     console.log(pwd);
 // Email validation
 let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Email Validation

//***********************************************************  */
//* Password contains digits\upper and lowercase letter and ** */
//* special character (!@#$%^&*_) ***************************  */
//*//  let regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;  */
// *   let regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3}?)$/;
// *   let regexp= (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)*/
//* let regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,20}$/;


let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$/;


  if((eMail=="")||!(regexp.test(eMail)))
  {
    alert("Please Enter valid email");
    document.myform.email.focus();
    // return false;
  }
  else if((pwd=="")||(pwd.length<=7))
  {
    alert("Password Should be of 8 Character ");
    document.myform.pwd.focus();
    // return false;
  }
  else if ((pwd=="")||!(regexp1.test(pwd))){
    alert("Password should contain atleast a Number Upper and lowercase letter and special characters");
  
     document.myform.pwd.focus();
    // return false;

    
  }
  else {
    
    let mtrElem = document.getElementById("myMeter");
    mtrElem.style.visibility='visible';
    console.log(mtrElem);
    if(pwd.length>15){
      mtrElem.value=90;
      
    }
    else if(pwd.length<10){
      mtrElem.value=20;
    }
    else{
      mtrElem.value=50;
    }
   
    // return false;

  }
// return false;
// event.preventDefault();
}
function password1(){
  let pwd=document.getElementById('pwd').value;
  let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$/;
  if((pwd=="")||(pwd.length<=7))
  {
    alert("Password Should be of 8 Character ");
    document.myform.pwd.focus();
    // return false;
  }
  else if ((pwd=="")||!(regexp1.test(pwd))){
    alert("Password should contain atleast a Number Upper and lowercase letter and special characters");
  
     document.myform.pwd.focus();
    // return false;

    
  }
  else {
    
    let mtrElem = document.getElementById("myMeter");
    mtrElem.style.visibility='visible';
    console.log(mtrElem);
    if(pwd.length>15){
      mtrElem.value=90;
      
    }
    else if(pwd.length<10){
      mtrElem.value=20;
    }
    else{
      mtrElem.value=50;
    }
   
    // return false;

  }

}