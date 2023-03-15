const hourEl = document.querySelector(".hour")
const minutesEl = document.querySelector(".minutes")
const secondEl = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date();
    //setTimeout(updateClock,1000);
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    const hourDeg = (hour/12)*360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minutes/60)*360;
    minutesEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second/60)*360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

//updateClock();

setInterval(updateClock,1000)


/*Estas líneas obtienen referencias a los elementos HTML que representan las agujas de las horas, los minutos
 y los segundos respectivamente, a través de la clase CSS a la que pertenecen.

 La función updateClock() es la que actualiza la posición de las agujas de horas, minutos y segundos según
 la hora actual obtenida del objeto Date. Primero se obtiene la fecha y hora actual mediante la creación de un nuevo objeto Date. 
 Luego se calculan los ángulos de rotación para cada una de las agujas, en función de la hora, los minutos y los segundos actuales. 
 Finalmente, se actualizan las transformaciones CSS de los elementos de las agujas con los nuevos ángulos.

 Por último, esta línea llama a la función updateClock() cada segundo mediante la función setInterval(). 
 Esto hace que el reloj se actualice continuamente con la hora actual. Si quisieras detener la actualización del reloj, 
 tendrías que llamar a la función clearInterval() y pasar el ID que devuelve setInterval().
 */