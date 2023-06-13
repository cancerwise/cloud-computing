const ageInLungCancer = (realAge) => {
    const mean = 63.0143;
    const std = 43.4998;
    return (realAge - mean) / std;
}

const ageInBrainTumor = (realAge) => {
    const var1 = 33.92771084;
    const var2 = 118.42850922;
    return (realAge - var1) / var2;
}
module.exports = {
    ageInLungCancer,
    ageInBrainTumor
}

