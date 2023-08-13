import { parseISO, formatDistance } from "date-fns";
import { id } from "date-fns/locale";

 const formatDate = (dateNow) => {
    const date = parseISO(dateNow);
    return formatDistance(date, new Date(), { addSuffix: true, locale: id })
}
 const getTimeAgo = (datestamp) => {
    const now = new Date();
    const timestamp = new Date(datestamp);
    const timeDiff = now - timestamp;

    if (timeDiff < 60000) {
        return Math.floor(timeDiff / 1000) + " seconds ago";
    } else if (timeDiff < 3600000) {
        return Math.floor(timeDiff / 60000) + " minutes ago";
    } else if (timeDiff < 86400000) {
        return Math.floor(timeDiff / 3600000) + " hours ago";
    } else {
        return Math.floor(timeDiff / 86400000) + " days ago";
    }
}

export {getTimeAgo, formatDate}