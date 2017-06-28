/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW4_Spring_2016
 * Author: Suju
 * Filename: checkout.js
 * Date and Time: Mar 2, 2016 12:34:42 PM 
 * Project Name: CS557_Hw04_Spring2016_images 
 */

var radioselected="AX";
            var flength;var llength;
            var ladd;var phone;
            var orderNumber;
            function validate(){
       
                flength=document.getElementById('fname').value;
                if(flength==''){
                    document.getElementById('vFname').innerHTML='Name cannot be blank';
                    
                }
                else if(!(flength.length>=1 && flength.length<=20))
                { 
                    document.getElementById('vFname').innerHTML='Provide correct firstname';
                    
                    document.getElementById('fname').focus();
                 }
                else
                {
                    document.getElementById('vFname').innerHTML='';
                }

                llength=document.getElementById('lname').value;
                
                 if(llength.length<1 || llength.length>25)
                { 
                    document.getElementById('vLname').innerHTML='Provide correct Lastname';
                    document.getElementById('lname').focus();
                }
                else
                    document.getElementById('vLname').innerHTML='';
                
                ladd=document.getElementById('dAddress').value;
                if(ladd.length<1){
                    
                    document.getElementById('vAdd').innerHTML='Provide correct Address';
                    document.getElementById('dAddress').focus();
                }
                else{
                    document.getElementById('vAdd').innerHTML='';
                }
                checkPhoneNumber();
                
//                var phonenopatern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//                phone=document.getElementById('telphone').value;
//                if(phone=="")
//                {
//                    document.getElementById('vTel').innerHTML='Telephone number cannot blank';
//                    document.getElementById('telphone').focus();
//                }
//                else if(!phone.match(phonenopatern)){
//                    document.getElementById('vTel').innerHTML='Enter proper Telephone number';
//                    document.getElementById('telphone').focus();
//                }
//                else{
//                    document.getElementById('vTel').innerHTML='';
//                }         
                
                
               checkMonth();
                checkYear();    
                
                
                myCCNCheck();
               // document.getElementById('fname').focus();
               orderNumber=Math.floor(Math.random()*100);
               localStorage.setItem("Orderid",orderNumber);
               
                localStorage.setItem("Name",flength);
                
                localStorage.setItem("Last Name",llength);
               localStorage.setItem("Address",ladd);
               
                localStorage.setItem("Phone number",phone);
                //console.log(orderNumber);
      
            }
            function checkPhoneNumber(){
                 var phonenopatern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                phone=document.getElementById('telphone').value;
                if(phone=="")
                {
                    document.getElementById('vTel').innerHTML='Telephone number cannot blank';
                    document.getElementById('telphone').focus();
                }
                else if(!phone.match(phonenopatern)){
                    document.getElementById('vTel').innerHTML='Enter proper Telephone number';
                    document.getElementById('telphone').focus();
                }
                else{
                    document.getElementById('vTel').innerHTML='';
                }   
            }
            
            function hide(){
                if(document.getElementsByName('sales').value=="cash")
                localStorage.setItem("PaymentMode","Cash");
                document.getElementById('cctrow').style.display='none'; 
                document.getElementById('CCNid').style.display='none';
                document.getElementById('CCEDid').style.display='none';
                
             }
             
             function show(){
                 if(document.getElementsByName('sales').value=="credit")
                 
                 myCCNCheck();
                 document.getElementById('cctrow').style.display=''; 
                 document.getElementById('CCNid').style.display='';
                document.getElementById('CCEDid').style.display='';
                
             }
             
             
             function radioSelected(){
                 var radios=document.getElementsByName('credittype');
                 for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                       radioselected=radios[i].value;
                       
                    }
                }
                
             }
                 
               
       function checkMonth(){
          
                var month=document.getElementById('month').value;
                if(month==''){
                    document.getElementById('vCCED').innerHTML='Enter month';
                   document.getElementById('month').focus();
                   console.log("month empty called"+month);
                   
                    
                }
                else if(month.length!=2){
                    document.getElementById('vCCED').innerHTML='Enter 2 digit month';
                    console.log("month length called"+month);
                    document.getElementById('month').focus();
                }
                else if(month>12 || month<1){
                    document.getElementById('vCCED').innerHTML='Enter proper digit month';
                    console.log("month digit checking  called"+month);
                    //return;
                   document.getElementById('month').focus();
                }
                else if(isNaN(month)){
                    document.getElementById('vCCED').innerHTML='Enter month in number';
                    document.getElementById('month').focus();
                    console.log("month digit checking  called"+month);
                    //return;
                }
                else
                    document.getElementById('vCCED').innerHTML='';
                
    }
                function checkYear(){
                var year=document.getElementById('year').value;
                
                    if(year==''){
                        document.getElementById('vCCEDy').innerHTML='Enter two digit year';
                        document.getElementById('year').focus();
                        }
                    else if(year.length!=2){
                        document.getElementById('vCCEDy').innerHTML='Enter 2 digit year';
                        document.getElementById('year').focus();
                        }
                
                    else
                        document.getElementById('vCCEDy').innerHTML='';
            }
             
             function myCCNCheck(){
                 var cardAX=/^\(?([0-9]{4})\)?[-]?([0-9]{6})[-]?([0-9]{5})$/; 
                 var cardVisa=/^\(?([0-9]{4})\)?[-]?([0-9]{4})?[-]?([0-9]{4})?[-]?([0-9]{4})$/;
                 var num=document.getElementById('CCN').value;
                 if(num==''){
                    
                     document.getElementById('vCCN').innerHTML='Number cannot be blank';
                     document.getElementById('CCN').focus();
                     //return;
                     
                 }
                
                 if(radioselected=="AX"){
                      if((!(num.match(cardAX)))) //&& (document.getElementByName('credittype').selected.value=='V'))
                        {
                      
                            document.getElementById('vCCN').innerHTML='Provide correct AX Card Number as XXXX-XXXXXX-XXXXX'; 
                            document.getElementById('CCN').focus();
                            //return;
                        }
                      else{
                        document.getElementById('vCCN').innerHTML='';
                       localStorage.setItem("Type","American Express");
                        }
                    }
                 else if(radioselected=="V"){
                      if(!(num.match(cardVisa))){
                        document.getElementById('vCCN').innerHTML='Provide correct VISA Card Number as  XXXX-XXXX-XXXX-XXXX'; 
                        document.getElementById('CCN').focus();
                        //return;
                    }
                    else{
                     document.getElementById('vCCN').innerHTML='';
                     localStorage.setItem("Type","Visa");
                    }
                  }
              }
             function fill(){
             
              document.getElementById("salesAmt").innerHTML=localStorage.getItem("Total");
          }
          

