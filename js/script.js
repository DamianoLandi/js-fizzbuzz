console.log("ok");


//Settaggio Variabili

var print = "";

var numbList = document.getElementById("numbList");

//Logica

for (var i = 1; i < 101; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        print += "<li>FizzBuzz</li>";
    }else if ((i % 3 == 0) && (i % 5 != 0)){
        print += "<li>Fizz</li>"
    }else if ((i % 3 != 0) && (i % 5 == 0)){
        print += "<li>Buzz</li>"
    }else{
        print += ("<li>" + i + "</li>");
    }
}


//Print in HTML

numbList.innerHTML = print;