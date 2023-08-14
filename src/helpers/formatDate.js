import { parseISO, formatDistance } from "date-fns";
import { id } from "date-fns/locale";

 export const formatDate = (dateNow) => {
    const date = parseISO(dateNow);
    return formatDistance(date, new Date(), { addSuffix: true, locale: id })
 }