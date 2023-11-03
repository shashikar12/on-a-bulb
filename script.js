var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag=0
btn.addEventListener("click", function () {
    if(flag==0){
        bulb.style.backgroundColor = "yellow";
        flag=1
        btn.innerText="OFF"
    }
    else{
        bulb.style.backgroundColor = "transparent";

        flag=0
        btn.innerText="ON"
    }
  
});
