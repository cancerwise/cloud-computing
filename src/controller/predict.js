const axios = require('axios');
const scallingCounter = require('./calculateScalling');

const lungCancerTestResult = async (req, res) => {
    console.log(req.body);
    console.log('age before scalling: ', req.body.age);
    const scallingAge = scallingCounter.ageInLungCancer(req.body.age);
    console.log(`age after scalling: ${scallingAge}`);

    try {
        const data = {
            instances: [[scallingAge, parseFloat(req.body.gender),
                        parseFloat(req.body.no1), parseFloat(req.body.no2), parseFloat(req.body.no3), parseFloat(req.body.no4), 
                        parseFloat(req.body.no5), parseFloat(req.body.no6), parseFloat(req.body.no7), parseFloat(req.body.no8), 
                        parseFloat(req.body.no9), parseFloat(req.body.no10), parseFloat(req.body.no11)]]
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
    const scallingAge = scallingCounter.ageInBrainTumor(req.body.age);

    try {
        const data = {
            instances: [[scallingAge, parseFloat(req.body.gender),
                        parseFloat(req.body.no1), parseFloat(req.body.no2), parseFloat(req.body.no3), parseFloat(req.body.no4), 
                        parseFloat(req.body.no5), parseFloat(req.body.no6), parseFloat(req.body.no7), parseFloat(req.body.no8), 
                        parseFloat(req.body.no9), parseFloat(req.body.no10), parseFloat(req.body.no11), parseFloat(req.body.no12)]]
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

module.exports = {
    lungCancerTestResult,
    brainTumorTestResult
};
