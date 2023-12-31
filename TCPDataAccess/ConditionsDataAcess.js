
const temperatureModel = require('../model/TemperatureModel');
const humidityModel = require('../model/HumidityModel');
const lightModel = require('../model/LightLevelModel');

async function tempConditionData(tempReading) {

    const timestamp = Date.now();

    const tdata = new temperatureModel({ temperature: tempReading, time: timestamp });

    const dataToSave = await tdata.save();

}


async function humidityConditionData(humReading) {

    const timestamp = Date.now();

    const hdata = new humidityModel({ measurment: humReading, time: timestamp });

    const dataToSave = await hdata.save();

}

async function lightConditionData(lightReading) {

    const timestamp = Date.now();

    const ldata = new lightModel({ lightLevel: lightReading, time: timestamp });

    const dataToSave = await ldata.save();

}


module.exports = {
    tempConditionData,
    humidityConditionData,
    lightConditionData
};
