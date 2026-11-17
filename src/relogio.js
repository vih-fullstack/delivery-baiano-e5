// src/relogio.js - a data e a hora do pedido, com o dayjs, em português
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

dayjs.locale("pt-br");

// A hora de agora, de 0 a 23, para a regra do horário
export function horaAgora() {
    return dayjs().hour();
}

// Formata a data e a hora em português
export function formatarData(data) {
    return dayjs(data).format("dddd, DD/MM/YYYY [às] HH:mm");
}