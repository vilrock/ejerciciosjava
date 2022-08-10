//aqui declaro una clase

function callMenu() {
    let nro_ejercicio = parseInt(
        prompt(
            "Ingrese el número de ejercicio que quiere ejecutar: \r\n 1. Suma. \r\n 2. Promedio. \r\n 3. Calcular el área de un rectángulo. \r\n 4. Calcular el área de un triángulo. \r\n 5. Calcular el área de un círculo. \r\n 6. Calcular salario semanal. \r\n 7. Convertir metros a pulgadas. \r\n 8. Convertir soles a dólares. \r\n 9. Determina tu edad \r\n 10. Persona de menor edad. \r\n 11.Bono por tiempo de trabajo \r\n 12.Salario del profesor en 6 años \r\n 13.Conteo de aprobados y desaprobados \r\n 14.Contabilizar focos \r\n 15. ¿Puedes votar?"
        )
    );

    if (isNaN(nro_ejercicio)) {
        alert("Por favor, ingresa valores numéricos");
    } else {
        menuEjercicios(nro_ejercicio);
    }
}

function menuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("Ingrese el valor 2 a sumar:"));
            alert(ej1_sumarValores(valor1, valor2));
            break;

        case 2:
            let ex1 = parseFloat(prompt("Ingrese la primera nota"));
            let ex2 = parseFloat(prompt("Ingrese la segunda nota"));
            let ex3 = parseFloat(prompt("Ingrese la tercera nota"));
            let ex4 = parseFloat(prompt("Ingrese la cuarta nota"));
            alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
            break;

        case 3:
            let base_rect = parseFloat(prompt("Ingrese base de rectángulo"));
            let alt_rect = parseFloat(prompt("Ingrese altura de rectángulo"));
            alert(ej3_areaRectangulo(base_rect, alt_rect));
            break;

        case 4:
            let base_trian = parseFloat(prompt("Ingrese base de triángulo"));
            let alt_trian = parseFloat(prompt("Ingrese altura de triángulo"));
            alert(ej4_areaTriangulo(base_trian, alt_trian));
            break;

        case 5:
            let radio = parseFloat(prompt("Ingrese el radio del círculo"));
            alert(ej5_radio(radio));
            break;

        case 6:
            let horas = parseFloat(prompt("Ingrese las horas trabajadas"));
            let salario_hora = parseFloat(
                prompt("Ingrese el salario por hora")
            );
            alert(ej6_salario(horas, salario_hora));
            break;

        case 7:
            let metros = parseFloat(
                prompt("Ingrese la cantidad en metros a convertir")
            );
            alert(ej7_pulgadas(metros));
            break;

        case 8:
            let sol = parseFloat(
                prompt("Ingrese la cantidad de soles a convertir")
            );
            alert(ej8_dolar(sol));
            break;

        case 9:
            let anio = parseInt(prompt("Ingrese el año en que naciste"));
            alert(ej9_edad(anio));
            break;

        case 10:
            let persona1 = prompt("Ingrese el nombre de la primera persona");
            let edad1 = parseInt(
                prompt("Ingrese la edad de la primera persona")
            );
            let persona2 = prompt("Ingrese el nombre de la segunda persona");
            let edad2 = parseInt(
                prompt("Ingrese la edad de la segunda persona")
            );
            let persona3 = prompt("Ingrese el nombre de la tercera persona");
            let edad3 = parseInt(
                prompt("Ingrese la edad de la tercera persona")
            );
            alert(
                ej10_menor(persona1, edad1, persona2, edad2, persona3, edad3)
            );
            break;

        case 11:
            let tiemposervicio = parseInt(
                prompt("Ingrese la cantidad de años que trabaja")
            );
            alert(ej11_bono(tiemposervicio));
            break;

        case 12:
            alert(ej12_sueldoanual());
            break;

        case 13:
            let notaalumno = 0;
            let notas = [10, 11];
            let cantalumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
            if(isNaN(cantalumnos) || cantalumnos < 0)
            {
                alert("No ingreso una cantidad validad de alumnos");
                break;
            }
            else
            {
            
            for (contador = 0; contador < cantalumnos; contador++) 
                {
                    
                    notaalumno = parseInt(
                        prompt(`Ingrese la nota del alumno ${contador + 1}`)
                    );
                    if(isNaN(notaalumno) || notaalumno < 0 || notaalumno >20)
                    {
                        alert("No ingreso una nota valida para el alumno");
                        return;
                    }
                    else
                    {
                        notas[contador] = notaalumno;
                    }
                }
            }
            alert(ej13_notasalumnos(notas));
            break;

        case 14:
            let cantfocos = parseInt(prompt("Ingrese la cantidad de focos"));
            if(isNaN(cantfocos) || cantfocos < 0)
            {
                alert("No ingreso una cantidad de focos");
                return;
            }
            let colorfoco = " ";
            let colores = ["blanco", "azul"];
            for (contador = 0; contador < cantfocos; contador++) 
            {
                colorfoco = prompt(`escriba  siel color del foco ${contador + 1} es rojo, verde o blanco `);
                colorfoco.toLowerCase();
                if(colorfoco !== "rojo")
                {
                    if(colorfoco !== "verde")
                    {
                        if(colorfoco !== "blanco")
                        {
                            alert("no ingreso un color valido");
                            return
                        }
                        else
                        {
                            colores[contador] = colorfoco;
                        }
                    }
                    else
                    {
                        colores[contador] = colorfoco;
                    }
                }
                else
                {
                    colores[contador] = colorfoco;
                }

            }
            alert(ej14_contarlote(colores));
            break;

        case 15:
            let voto = parseInt(prompt("Ingrese tu edad"));
            alert(ej15_edad(voto));
            break;

        default:
            alert("No ingreso una opcion valida");
    }
}
function ej1_sumarValores(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Por favor, ingresa valores";
    } else {
        return `La suma es: ${a + b}`;
    }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
    if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
        return "Por favor, ingresa valores";
    } else {
        return `El promedio es: ${(ex1 + ex2 + ex3 + ex4) / 4}`;
    }
}

function ej3_areaRectangulo(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Por favor, ingresa valores";
    } else {
        return `El área del rectángulo es: ${a * b}`;
    }
}

function ej4_areaTriangulo(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Por favor ingresa valores";
    } else {
        return `El área del triángulo es: ${(a * b) / 2}`;
    }
}

function ej5_radio(a) {
    if (isNaN(a)) {
        return "Por favor, ingresa valor";
    } else {
        return `El área del círculo es: ${(Math.PI * Math.pow(a, 2)).toFixed(
            2
        )}`;
    }
}

function ej6_salario(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Por favor, ingresa valores";
    } else {
        return `El salario semanal es: ${a * b}`;
    }
}

function ej7_pulgadas(a) {
    if (isNaN(a)) {
        return "Por favor, ingresa valor";
    } else {
        return `${a} metros son ${(a * 39.37).toFixed(2)} pulgadas.`;
    }
}

function ej8_dolar(a) {
    if (isNaN(a)) {
        return "por favor, ingresa valor";
    } else {
        return `S/${a} son US$${(a / 3.9).toFixed(2)} al 5 de agosto del 2022.`;
    }
}

function ej9_edad(a) {
    if (isNaN(a) || a > (new Date().getFullYear())-18) {
        return "Ingrese un valor valido";
    } else {
        return `La edad del empleado es: ${new Date().getFullYear() - a}`;
    }
}

function ej10_menor(nombre1, edad1, nombre2, edad2, nombre3, edad3) {
    if (
        nombre1 !== typeof("") ||
        isNaN(edad1) ||
        nombre2 !== typeof(" ") ||
        isNaN(edad2) ||
        nombre3 !== typeof(" ") ||
        isNaN(edad3)
    ) {
        return "Por favor, ingresa valores validos";
    } else {
        if (edad1 < edad2) {
            if (edad1 < edad3) {
                return `${nombre1} con ${edad1} años es la persona con menor edad.`;
            } else {
                return `${nombre3} con ${edad3} años es la persona con menor edad.`;
            }
        } else {
            if (edad2 < edad3) {
                return `${nombre2} con ${edad2} años es la persona con menor edad.`;
            } else {
                return `${nombre3} con ${edad3} años es la persona con menor edad.`;
            }
        }
    }
}

function ej11_bono(tiemposervicio) {
    if (isNaN(tiemposervicio)) {
        return "Por favor ingrese un valor valido";
    } else {
        if (tiemposervicio > 0) {
            tiemposervicio = parseInt(tiemposervicio);
            switch (tiemposervicio) {
                case 1:
                    return `El bono que le corresponde es: $${100}`;

                case 2:
                    return `El bono que le corresponde es: $${200}`;

                case 3:
                    return `El bono que le corresponde es: $${300}`;

                case 4:
                    return `El bono que le corresponde es: $${400}`;

                case 5:
                    return `El bono que le corresponde es: $${500}`;

                default:
                    return `El bono que le corresponde es: $${1000}`;
            }
        } else {
            return "No ha cumplido con el tiempo establecido para el bono";
        }
    }
}

function ej12_sueldoanual() {
    let texto = " ";
    let sueldo = 1500;
    for (contador = 0; contador < 6; contador++) {
        sueldo *= 1.1;
        texto += `el sueldo del año ${contador + 1} es ${sueldo.toFixed(
            2
        )} \r\n `;
    }
    return texto;
}

function ej13_notasalumnos(listanotas) {
    let arraynotas = [1, 2];
    arraynotas = listanotas;
    let desaprobados = 0;
    let aprobados = 0;
    let contador = 0;

    while (contador < arraynotas.length) {
        if (arraynotas[contador] < 10) {
            desaprobados += 1;
        } else {
            aprobados += 1;
        }
        contador++;
    }

    return `Èl numero de desaprobados es ${desaprobados} y el numero de aprobados es ${aprobados}`;
}

function ej14_contarlote(colores) {
    let arraydecolores = ["blanco", "azul"];
    arraydecolores = colores;
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    let contador = 0;

    while (contador < arraydecolores.length) {
        if (arraydecolores[contador].toString() == "rojo") {
            rojo += 1;
        } else {
            if (arraydecolores[contador].toString() == "verde") {
                verde += 1;
            } else {
                blanco += 1;
            }
        }
        contador++;
    }

    return `Èl numero de colores verde es ${verde} y el numero de blanco es ${blanco} y el numero de colores rojos es ${rojo}`;
}

function ej15_edad(a) {
    if (isNaN(a)) {
        return "Ingrese un valor valido";
    } else {
        if (a > 17) {
            return "Puedes votar";
        } else {
            return "aun te falta la edad";
        }
    }
}
