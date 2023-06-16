var ans = 0;
var s = "";
add = () =>{
    
    var value = parseInt(document.getElementById("input1").value);
    ans = ans+value;
    if(s.length == 0){
        s=s+value
        document.getElementById("output").innerHTML = ans
    }
    else{
        s = s+("+"+value);
        document.getElementById("output").innerHTML = ans
    }
    document.getElementById("input1").value="";
}

sub = () =>{
    var value = parseInt(document.getElementById("input1").value);
    ans = ans-value;
    if(s.length == 0){
        s=s+value
        document.getElementById("output").innerHTML = ans
    }
    else{
        s = s+("-"+value);
        document.getElementById("output").innerHTML = ans
    }
    document.getElementById("input1").value="";
}
    

mul = () =>{
    var value = parseInt(document.getElementById("input1").value);
    ans = ans*value;
    if(s.length == 0){
        s=s+value
        document.getElementById("output").innerHTML = ans
    }
    else{
        s = s+("*"+value);
        document.getElementById("output").innerHTML = ans
    }
    document.getElementById("input1").value="";
}


div = () =>{
var value = parseInt(document.getElementById("input1").value);
ans = ans/value;
if(s.length == 0){
    s=s+value
    document.getElementById("output").innerHTML = ans
}
else{
    s = s+("/"+value);
    document.getElementById("output").innerHTML = ans
    }
    document.getElementById("input1").value="";
}
    

equal = () =>{
    if(s.length==0){
        document.getElementById("ex").innerHTML = "No value Entered!"
    }
    else{
    document.getElementById("ex").innerHTML = s
    }
}