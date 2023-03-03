
const iPhoneModel = require('../models/iPhone.model')
const iPadModel = require('../models/iPad.model')
const AppleWatchModel = require('../models/AppleWatch.model')
const MacbookModel = require('../models/Macbook.model')

const priceFunctions = require('../functions/price.function')

module.exports.index = async (req, res, next) => {
    const {categoriesName, modelsName} = req.params
    let Models = [];
    switch(categoriesName){
        case 'iPhone':
            Models = await iPhoneModel.find({"model": modelsName});
            Models = priceFunctions.changePriceToString_iPhone(Models);
            break;

        case 'iPad':
            Models = await iPadModel.find({"model": modelsName});
            Models = priceFunctions.changePriceToString_iPhone(Models);
            break;

        case 'Apple Watch':
            Models = await AppleWatchModel.find({"model": modelsName});
            Models = priceFunctions.changePriceToString_Watch(Models);
            break;

        case 'Macbook':
            Models = await MacbookModel.find({"model": modelsName});
            Models = priceFunctions.changePriceToString_iPhone(Models)
            break;
    }
    
    res.render('./models/index', {
        modelsName: modelsName,
        categoriesName: categoriesName,
        Models: Models
    })
}