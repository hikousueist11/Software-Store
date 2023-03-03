
// const iPhoneModel = require('../models/iPhone.model')
// const iPadModel = require('../models/iPad.model')
// const AppleWatchModel = require('../models/AppleWatch.model')
// const MacbookModel = require('../models/Macbook.model')
// const AirPodsModel = require('../models/AirPods.model')
// const AccessoriesModel = require('../models/Accessories.model')
// const tsktModel = require('../models/tskt.model')

const ProductsModel = require('../models/Products.model')
const priceFunctions = require('../functions/price.function')



module.exports.index = async (req, res, next)  => {
    const { categoriesName, productsName } = req.params

    // let Products;
    // switch(categoriesName){
    //     case 'iPhone':
    //         Products = await iPhoneModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_iPhoneProduct(Products[0])
    //         break;

    //     case 'iPad':
    //         Products = await iPadModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_iPhoneProduct(Products[0])
    //         break;

    //     case 'Apple Watch':
    //         Products = await AppleWatchModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_AppleWatchProduct(Products[0])
    //         break;

    //     case 'Macbook':
    //         Products = await MacbookModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_iPhoneProduct(Products[0])
    //         break;
    //     case 'AirPods':
    //         Products = await AirPodsModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_AirPodsProduct(Products[0])
    //         break;
    //     case 'Accessories':
    //         Products = await AccessoriesModel.find({"name": productsName});
    //         Products = priceFunctions.changePriceToString_AirPodsProduct(Products[0])
    //         break;
    // }
    const Product = await ProductsModel.findOne({"category": categoriesName, name: productsName})
    const price = priceFunctions.changeNumberToString(Product.price)

    console.log({ ...Product, price})
    // const tsktData = await tsktModel.findOne({"model": modelsName})

    // const tskt = tsktData === null ? `Trống` : `<table class="products__sideBarTable">${tsktData.tskt}</table>`

    res.render('./products/index', {
        // categoriesName: categoriesName,
        // modelsName: modelsName,
        // productsName: productsName,
        // tskt: tskt,
        Product: { ...Product._doc, price}
    })
}