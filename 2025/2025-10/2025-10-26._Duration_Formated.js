/*
Formatador de Duração

Dado um número inteiro de segundos, retorne uma string representando a mesma duração no formato "H:MM:SS", onde "H" representa o número de horas, "MM" o número de minutos e "SS" o número de segundos. Retorne o tempo seguindo as seguintes regras:

-Segundos: Devem sempre ter dois dígitos.
-Minutos: Devem omitir zeros à esquerda quando não forem necessários. Use "0" se a duração for menor que um minuto.
-Horas: Devem ser incluídas apenas se forem maiores que zero.
*/
function format(seconds) {
    let formattedTime = "";
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let secondsRemaining = Math.floor(seconds % 60);

    if (minutes >= 60)
        minutes = String(Math.floor(minutes % 60)).padStart(2, "0");

    if (hours > 0) {
        formattedTime += hours + ":" + String(minutes).padStart(2, "0") + ":";
    } else {
        formattedTime += minutes + ":";
    }

    formattedTime += String(secondsRemaining).padStart(2, "0");

    return formattedTime;
}

console.log(format(500)); // should return "8:20".
console.log(format(4000)); // should return "1:06:40".
console.log(format(1)); // should return "0:01".
console.log(format(5555)); // should return "1:32:35".
console.log(format(99999)); // should return "27:46:39".
