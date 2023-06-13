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

const scaleAllCervicalData = (data) => {
    const maxValue = [52, 9, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1];
    const minValue = [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const scaled_data = [];

    for(let i = 0; i < data.length; i++) {
        const result = (data[i] - minValue[i]) / (maxValue[i] - minValue[i]);
        scaled_data.push(result);
    }

    return scaled_data;
}

module.exports = {
    ageInLungCancer,
    ageInBrainTumor,
    scaleAllCervicalData
}

