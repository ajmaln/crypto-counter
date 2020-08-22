export const twoDecimalPlaces = (num) => parseFloat((Math.round(num * 100) / 100).toFixed(2));

// eslint-disable-next-line max-len
export const percentChange = (oldVal, newVal) => twoDecimalPlaces((100 * (newVal - oldVal)) / ((newVal + oldVal) / 2));
