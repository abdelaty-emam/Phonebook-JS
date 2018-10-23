/**/
var contacts=[];
var username = document.getElementById("username");
var userphone = document.getElementById("userphone");
var usermail = document.getElementById("usermail");
var userage = document.getElementById("userage");


var ad =document.getElementById("add");
var qAdd =document.getElementById("qAdd");
var f =document.getElementById("formContainer");

ad.addEventListener("click", addCOntacts)
ad.addEventListener("click", clearForm)

function addCOntacts(){
    var n = username.value;
    var p = userphone.value;
    var m = usermail.value;
    var ag = userage.value;
    var newContact={ name:n,phone:p,mail:m,age:ag}
   
    contacts.push(newContact);
      displayContacts();
     clearForm();
    console.log(contacts);

   
}
var qdd=document.getElementById("qAdd");
var f=document.getElementById("formContainer");
qAdd.addEventListener("click",function(){
                      
           if(f.style.display==="none")
{
    f.style.display="block";
    
    qAdd.innerHTML="cancel";                 
                      
                      }         
                      else{
                          f.style.display="none";
    
    qAdd.innerHTML="add";
                          
                          
                      }
                      
                      
                      
                      
                      })


/********************/
function clearForm(){
 username.value="";
 userphone.value="";
 usermail.value="";
 userage.value="";
    
    
}

/************************/
function displayContacts ()
{
    var tap = "<table class='table'><thead><td>Name:</td> <td>phone:</td> <td>mail:</td> <td>Age:</td></thead>";
    for(var i=0; i<contacts.length; i++)
        {
            tap += "<tr><td>"+contacts[i].name+"</td><td>"+contacts[i].phone+"</td><td>"+contacts[i].mail+"</td><td>"+contacts[i].age+"</td></tr>";
        }
    tap +="</table>";
    document.getElementById("Output").innerHTML = tap;
console.log(tap)
    //clearForm();
    
}
    displayContacts();
//f.reset();
        

