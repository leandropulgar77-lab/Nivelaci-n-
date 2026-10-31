function comisionVentas() {

    let nombre, ventas, antiguedad, porcentaje, comision;
     nombre = prompt("Ingrese el nombre del vendedor:");
     ventas = parseFloat(prompt("Ingrese el valor de las ventas:"));
     antiguedad = parseInt(prompt("Ingrese los años de antigüedad:"));
     porcentaje = 0;
     comision = 0;

    if (ventas < 3000000) {

        porcentaje = 0;

    } else if (ventas >= 8000000 && antiguedad >= 2) {

        porcentaje = 10;

    } else {

        porcentaje = 5;
    }

    comision = ventas * porcentaje / 100;

    alert("Nombre: " + nombre);
    alert("Ventas: $" + ventas);
    alert("Porcentaje: " + porcentaje + "%");
    alert("Comision: $" + comision);
}

function solicitudPrestamo() {

    let nombre, ingresos, gastos, historial;
    let disponible, resultado;

    alert("Este algoritmo evalua una solicitud de prestamo");

    nombre = prompt("Ingrese el nombre del solicitante");
    ingresos = parseFloat(prompt("Ingrese los ingresos mensuales"));
    gastos = parseFloat(prompt("Ingrese los gastos mensuales"));
    historial = prompt("Ingrese el historial crediticio (positivo o negativo)");

    disponible = ingresos - gastos;

    if (ingresos <= gastos) {

        resultado = "Rechazado por capacidad de pago insuficiente";

    } else if (historial == "negativo") {

        resultado = "Rechazado por historial crediticio";

    } else if (historial == "positivo" && disponible >= 1000000) {

        resultado = "Preaprobado";

    } else if (historial == "positivo" && disponible < 1000000) {

        resultado = "Revision pendiente";

    } else {

        resultado = "Historial crediticio no valido";
    }

    alert("Nombre: " + nombre);
    alert("Dinero disponible: $" + disponible);
    alert("Resultado: " + resultado);
}

function tarifaAlojamiento() {

    let nombre, tipo, temporada, noches;
    let tarifa, costo, descuento, total;

    alert("Este algoritmo calcula el costo de alojamiento");

    nombre = prompt("Ingrese el nombre del huesped");
    tipo = prompt("Ingrese el tipo de habitacion (estandar, ejecutiva o suite)");
    temporada = prompt("Ingrese la temporada (alta o baja)");
    noches = parseInt(prompt("Ingrese el numero de noches"));

    tarifa = 0;
    descuento = 0;

    if (noches <= 0) {

        alert("Error: el numero de noches no es valido");

    } else if (tipo == "estandar" || tipo == "ejecutiva" || tipo == "suite") {

        alert("Error: tipo de habitacion no valido");

    }  if (temporada == "alta" || temporada == "baja"){

        alert("Error: temporada no valida");

    } else {

        if (tipo == "estandar") {

            tarifa = 150000;

        } else if (tipo == "ejecutiva") {

            tarifa = 250000;

        } else {

            tarifa = 400000;
        }

        if (temporada == "alta") {

            tarifa = tarifa * 1.20;
        }

        costo = tarifa * noches;

        if (noches >= 5) {

            descuento = costo * 0.10;
        }

        total = costo - descuento;

        alert("Nombre del huesped: " + nombre);
        alert("Tarifa por noche: $" + tarifa);
        alert("Costo antes del descuento: $" + costo);
        alert("Descuento aplicado: $" + descuento);
        alert("Total a pagar: $" + total);
    }
}

function clasificarTriangulo() {

    let a, b, c;
    let tipo, perimetro, area;

    alert("Este algoritmo clasifica un triangulo y calcula su area");

    a = parseFloat(prompt("Ingrese el primer lado"));
    b = parseFloat(prompt("Ingrese el segundo lado"));
    c = parseFloat(prompt("Ingrese el tercer lado"));

    if (a <= 0 || b <= 0 || c <= 0) {

        alert("Los lados deben ser positivos");

    } else if (a + b <= c || a + c <= b || b + c <= a) {

        alert("Las medidas no forman un triangulo");

    } else {

        if (a == b && b == c) {

            tipo = "Equilatero";

        } else if (a == b || a == c || b == c) {

            tipo = "Isosceles";

        } else {

            tipo = "Escaleno";
        }

        perimetro = (a + b + c) / 2;

        area = (perimetro * (perimetro - a) * (perimetro - b) * (perimetro - c)) ** 0.5;

        alert("Clasificacion: " + tipo);
        alert("Area del triangulo: " + area);
    }
}

function desempeñoAcademico() {

    let nombre, nota1, nota2, nota3, asistencia;
    let promedio, resultado;

    alert("Este algoritmo evalua el desempeño academico de un aprendiz");

    nombre = prompt("Ingrese el nombre del aprendiz");
    nota1 = parseFloat(prompt("Ingrese la primera calificacion"));
    nota2 = parseFloat(prompt("Ingrese la segunda calificacion"));
    nota3 = parseFloat(prompt("Ingrese la tercera calificacion"));
    asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia"));

    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || asistencia < 0 || asistencia > 100) {

        alert("Las calificaciones y la asistencia deben estar entre 0 y 100");

    } else {

        promedio = (nota1 + nota2 + nota3) / 3;

        if (asistencia < 80) {

            resultado = "No aprobado por asistencia";

        } else if (promedio < 60) {

            resultado = "No aprobado por rendimiento";

        } else {

            resultado = "Aprobado";
        }

        alert("Nombre: " + nombre);
        alert("Promedio: " + promedio);
        alert("Asistencia: " + asistencia + "%");
        alert("Resultado final: " + resultado);
    }
}

function registroVentas() {

    let cantidad, venta;
    let total = 0;
    let contador = 0;
    let ventaMayor = 0;
    let promedio;

    alert("Este algoritmo registra las ventas de una jornada");

    cantidad = parseInt(prompt("Ingrese la cantidad de ventas"));

    if (cantidad <= 0) {

        alert("Debe ingresar una cantidad mayor que cero");

    } else {

        for (let i = 1; i <= cantidad; i++) {

            venta = parseFloat(prompt("Ingrese el valor de la venta " + i));

            total = total + venta;

            if (venta > 200000) {

                contador = contador + 1;
            }

            if (i == 1) {

                ventaMayor = venta;

            } else if (venta > ventaMayor) {

                ventaMayor = venta;
            }
        }

        promedio = total / cantidad;

        alert("Cantidad de ventas: " + cantidad);
        alert("Total recaudado: $" + total);
        alert("Promedio por venta: $" + promedio);
        alert("Ventas superiores a $200.000: " + contador);
        alert("Venta mas alta: $" + ventaMayor);
    }
}