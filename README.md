# CANCERWISE Model API
API to serve the machine learning models in CANCERWISE. Built using Node.js with the Express framework and then deployed in Cloud Run.
## Packages used
1. [Express](https://expressjs.com/)
2. [Axios](https://axios-http.com/)
3. [Nodemon](https://nodemon.io/)
## Google Cloud Services
1. Cloud Build
2. Container Registry
3. Cloud Run
## Endpoints
HTTP method: `POST`

Model prediction endpoints:
- /predict/lung-cancer
- /predict/brain-tumor
- /predict/cervical-cancer
### Sample request
Sample request for lung cancer test (consisting of 13 questions). 
```json
{
   "answers": ["59", "1", "1", "0", "0", "0", "1", "1", "0", "0", "1", "0", "1"]
}
```
### Sample response
Sample response when the user is diagnosed as having lung cancer.
```json
{
   "status": "Positive lung cancer.", 
   "action": "Please contact your doctor immediately." 
}
```
## Installation
Clone this repository using the following command:
```sh
git clone https://github.com/cancerwise/cloud-computing.git`
```
Open the project folder and install dependencies with this command:
```sh
npm install
```
Finally, run it with this command:
```sh
npm run start
```
