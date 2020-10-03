export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const percentage = (x) => Math.round(x * 10000) / 100 + "%"

export const growth = (total, daily) => {
    const yesterday = total - daily;
    if (yesterday !== 0) {
        return "(+" + (Math.round((daily / yesterday) * 10000) / 100).toString() + "%)";
    } else return "(Primera ocurrencia)";
}