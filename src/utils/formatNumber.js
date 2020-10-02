export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const percentage = (x) => Math.round(x * 10000) / 100 + "%"