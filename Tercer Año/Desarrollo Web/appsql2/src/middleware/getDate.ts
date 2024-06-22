export default function returnDate():string{
    // Obtiene la fecha de hoy
    const date = new Date();
    // Extrae el año
    const year = date.getFullYear();
    // Extrae el mes y si no tiene 2 digitos, añade el 0 con padStart
    const month = String(date.getMonth() + 1).padStart(2, '0');
    // Extrae el dia y si no tiene 2 digitos, añade el 0 con padStart
    const day = String(date.getDate()).padStart(2, '0');
    // Extrae las horas y si no tiene 2 digitos, añade el 0 con padStart
    const hour = String(date.getHours()).padStart(2, '0');
    // Extrae los minutos y si no tienen 2 digitos, añade el 0 con padStart
    const minutes = String(date.getMinutes()).padStart(2, '0');
    // Extrae los segundos y si no tienen 2 digitos, añade el 0 con padStart
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // Ordena los datos en el formato deseado: DD/MM/YYYY, HH:MM:SS
    const newFormatDate = `${day}/${month}/${year}, ${hour}:${minutes}:${seconds}`
    // Por último, retorna la fecha en el formato nuevo
    return newFormatDate;
}