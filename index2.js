/*defino mis variables iniciales*/
var nombre_inicial = [];
var gasto_inicial = [];

/*defino funciones*/ 
function addEntry(){
    if((document.getElementById("nombre").value) !== "" && (document.getElementById("plata")).value !== ""){     
        nombre_inicial.push(document.getElementById("nombre").value);
        gasto_inicial.push(Number(document.getElementById("plata").value));
        console.log(nombre_inicial,gasto_inicial); /*imprimo*/
    }
   
    strToList(); /*llamo función*/ 
    total(); /*llamo función*/
    
};

/*quiero agregar progresivamente los datos a la lista*/
function strToList(){
    var string=""          
    for(let i = 0; i < nombre_inicial.length; i++){
        string = string + "<li>" + nombre_inicial[i] +": $"+ gasto_inicial[i] + "</li>" ;
        document.getElementById("lista").innerHTML = string; 
    };
}

function total(){
    var totalCuenta = 0
    for (let i = 0; i < gasto_inicial.length; i++) {
        totalCuenta += gasto_inicial[i];
    };
    var promedio = totalCuenta/gasto_inicial.length;

    document.getElementById("total").innerText = "Total $" + totalCuenta;
    document.getElementById("promedio").innerText = "Cada uno paga $" + promedio;
}