const axios = require('axios');
const dataScale = require('./calculateScaling');

const lungCancerTestResult = async (req, res) => {
    console.log(req.body);

    const arrayAnswers = req.body.answers;
    const arrayFloatAnswers = arrayAnswers.map(parseFloat);
    console.log('arrayAnswers: ', arrayAnswers);
    console.log('arrayFloatAnswers before shift: ', arrayFloatAnswers);

    const scalingAge = dataScale.ageInLungCancer(arrayFloatAnswers[0]);
    console.log('age after scaling: ', scalingAge);

    arrayFloatAnswers.shift();
    arrayFloatAnswers.unshift(scalingAge);
    console.log('arrayFloatAnswers after shift: ', arrayFloatAnswers);

    try {
        const data = {
            instances: [arrayFloatAnswers]
        };
        console.log(data);
        const response = await axios.post('https://lung-cancer-test-qf5zhqokha-et.a.run.app/v1/models/lung_cancer:predict', data);
        console.log(response.data.predictions[0][0]);

        const testResult = response.data.predictions[0][0];

        if(testResult > 0.5) {
            res.json({
                status: "positive lung cancer"
            })
        } else {
            res.json({
                status: "negative lung cancer"
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
} 

const brainTumorTestResult = async (req, res) => {
    console.log(req.body);

    const arrayAnswers = req.body.answers;
    const arrayFloatAnswers = arrayAnswers.map(parseFloat);
    console.log('arrayAnswers: ', arrayAnswers);
    console.log('arrayFloatAnswers before shift: ', arrayFloatAnswers);

    const scalingAge = dataScale.ageInBrainTumor(arrayFloatAnswers[0]);
    console.log('age after scaling: ', scalingAge);

    arrayFloatAnswers.shift();
    arrayFloatAnswers.unshift(scalingAge);
    console.log('arrayFloatAnswers after shift: ', arrayFloatAnswers);

    try {
        const data = {
            instances: [arrayFloatAnswers]
        };

        const response = await axios.post('https://brain-tumor-test-qf5zhqokha-et.a.run.app/v1/models/brain_tumor:predict', data);
        console.log(response.data.predictions[0][0]);

        const testResult = response.data.predictions[0][0];

        if(testResult > 0.5) {
            res.json({
                status: "positive brain tumor cancer"
            })
        } else {
            res.json({
                status: "negative brain tumor cancer"
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
} 

const cervicalCancerTestResult = async (req, res) => {
    console.log(req.body);

    const arrayAnswers = req.body.answers;
    const arrayFloatAnswers = arrayAnswers.map(parseFloat);
    console.log('arrayAnswers: ', arrayAnswers);
    console.log('arrayFloatAnswers: ', arrayFloatAnswers);

    const scalingAnswers = dataScale.scaleAllCervicalData(arrayFloatAnswers);
    console.log('Scaled answers: ', scalingAnswers);

    try {
        const data = {
            instances: [scalingAnswers]
        };

        const response = await axios.post('https://cervical-cancer-test-qf5zhqokha-et.a.run.app/v1/models/cervical_cancer:predict', data);
        console.log(response.data.predictions[0][0]);

        const testResult = response.data.predictions[0][0];

        if(testResult > 0.5) {
            res.json({
                status: "positive cervical cancer"
            })
        } else {
            res.json({
                status: "negative cervical cancer"
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
} 

module.exports = {
    lungCancerTestResult,
    brainTumorTestResult,
    cervicalCancerTestResult
};