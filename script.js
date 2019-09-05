//skapar en unordnad list i HTML filen
var myList=document.createElement("ul");

// tildelar min nya listan med id myUl
myList.setAttribute("id","myUl");
document.body.appendChild(myList);

//skappar en array med fem element
var kula_saker=["musik","böker","resor","sommar","familj"];
for(i=0; i<5; i++)
{
    //i varje varv skappar en list element och tildelar 
    //dess värde till list_element variabeln 
    var list_element=document.createElement("li"); 
     //text till varje li  
    var text=document.createTextNode(kula_saker[i]);
    list_element.appendChild(text);
    // skriver ut min lista
    document.getElementById("myUl").appendChild(list_element);
}

