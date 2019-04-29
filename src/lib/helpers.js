export const isEmpty = val => val == null || !(Object.keys(val) || val).length
export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n