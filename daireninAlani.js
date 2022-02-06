var yariCap = process.argv[2];

const daireninAlani = (number) => {
    return `Yarıçapı ${number} olan dairenin alanı: ${Math.PI.toFixed(2) * number ** 2}`
}

console.log(daireninAlani(yariCap))