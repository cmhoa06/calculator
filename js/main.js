function clickbutton(target){

    let result = document.getElementById("result")
    let target_value = target.innerHTML;
    
    if (target_value == "AC"){
       
        result.innerHTML = "0"
    
    }else if(target_value == "="){

        result.innerHTML = eval(result.innerHTML)
        
    }else if(target_value == "."){
        if(result.innerHTML.slice(-1) == "."){
            result.innerHTML == ""
        }else{
            result.innerHTML == "="
        }
    
    }else {
        if(result.innerHTML == "0"){
            result.innerHTML = target_value
        }else if(target_value == "+" && result.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "+" && result.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "+" && result.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "+" && result.innerHTML.slice(-1) === "/"){
            return;

        }else if(target_value == "-" && result.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "-" && result.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "-" && result.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "-" && result.innerHTML.slice(-1) === "/"){
            return;

        }else if(target_value == "*" && result.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "*" && result.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "*" && result.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "*" && result.innerHTML.slice(-1) === "/"){
            return;

        }else if(target_value == "/" && result.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "/" && result.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "/" && result.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "/" && result.innerHTML.slice(-1) === "/"){
            return;

        }else{
            result.innerHTML = result.innerHTML + target_value
        }
    }}


   // function calc_period() { 
       //if(target_value == "." && result.innerHTML.slice(-2) === "."){
       /// return;
       //}
        //}
