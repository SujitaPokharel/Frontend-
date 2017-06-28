/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW4_Spring_2016
 * Author: Suju
 * Filename: acknowledge.js
 * Date and Time: Mar 2, 2016 12:27:55 PM 
 * Project Name: CS557_Hw04_Spring2016_images 
 */
function display(){
               
               document.getElementById('orderId').innerHTML=localStorage.getItem("Orderid");
               document.getElementById('lastnameid').innerHTML=localStorage.getItem("Last Name");
               document.getElementById('name').innerHTML=localStorage.getItem("Name");
               document.getElementById('address').innerHTML=localStorage.getItem("Address");
               document.getElementById('phonenum').innerHTML=localStorage.getItem("Phone number");
               document.getElementById('total').innerHTML=localStorage.getItem("Total");
    }
    var price=[8.99,10.99,9.99,11.99,10.99,12.99,9.99,11.99,10.99,12.99,11.99,13.99
                         ,10.99,12.99,11.99,13.99,12.99,14.99,11.99,13.99,12.99,14.99,13.99,15.99];
            var totalCost=0;
          function display_data(){
                 var cost=0.00;
                       
               var display=[
                "Hard Copy (Good)",
                "Hard Copy (Good Glossy)",
                "Hard Copy (veryGood)",
                "Hard Copy (veryGood Glossy)",
                "Hard Copy (Excellent)",
                "Hard Copy (Excellent Glossy)",
                "Poster (Good)",
                "Poster (Good Glossy)",
                "Poster (veryGood)",
                "Poster (veryGood Glossy)",
                "Poster (Excellent)",
                "Poster (Excellent Glossy)",
                "Coffee-mug (Good)",
                "Coffee-mug (Good Glossy)",
                "Coffee-mug (veryGood)",
                "Coffee-mug (veryGood Glossy)",
                "Coffee-mug (Excellent)",
                "Coffee-mug (Excellent Glossy)",
                "T-shirt (Good)",
                "T-shirt (Good Glossy)",
                "T-shirt (veryGood)",
                "T-shirt (veryGood Glossy)",
                "T-shirt (Excellent)",
                "T-shirt (Excellent Glossy)"];
               var quantity = 0;
               for(var i = 1;i<=24;i++){
                   cost = 0.00;
                   
                   if(localStorage.getItem(i)){
                    quantity = localStorage.getItem(i);
                    console.log("localStorage has ################  "+i);
                    document.writeln("Item: "+ display[i-1] +"<br>");
                    document.writeln("Quantity: "+ quantity +"<br>");
                    cost = (price[i-1] * quantity);
                    document.writeln("Total Cost: "+cost+"<br>");
                    document.writeln("------------------------------------------<br>");
                    totalCost=totalCost+cost;
                    
                   }else{
                       console.log("localStorage doesn't have "+i);
                   }
                   localStorage.getItem("Total");
                   
               }
           }


