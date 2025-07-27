let input=prompt("Enter your value to get the type");
function typedetector(input){
    if (input=="true"||input=="false")
    {
        return "Boolean";
    }
    else if(Number(input))
    {
        return "Number";
    }
    else{
        return "String";
    }
}
document.getElementById("output").innerHTML=typedetector(input);