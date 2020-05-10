/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
  
 var n1= document.getElementById("shippingName");
 var z1= document.getElementById("shippingZip");
 var n2= document.getElementById("billingName");
 var z2= document.getElementById("billingZip");
 
if(document.getElementById("same").checked)
{
  n2.value=n1.value;
  z2.value=z1.value;//set values
}
else
 {
   n2.value="";//reset values
   z2.value="";
 }
 
 
 
}