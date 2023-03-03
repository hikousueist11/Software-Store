// const BannersModel = require('../models/banners.model')
// const CategoriesModel = require('../models/categories.model')
// const iPhoneModel = require('../models/iPhone.model')
// const iPadModel = require('../models/iPad.model')
// const AppleWatchModel = require('../models/AppleWatch.model')
// const MacbookModel = require('../models/Macbook.model')
const priceFunctions = require('../functions/price.function')

const ProductsModel = require('../models/Products.model')


module.exports.index = async (req, res, next) => {

    // const Banners = await BannersModel.find()
    // const Categories = await CategoriesModel.find()

    // let iPhone = await iPhoneModel.find({"home": true});
    // iPhone = priceFunctions.changePriceToString_iPhone(iPhone);

    // let iPad = await iPadModel.find({"home": true});
    // iPad = priceFunctions.changePriceToString_iPhone(iPad);

    // let Macbook = await MacbookModel.find({"home": true})
    // Macbook = priceFunctions.changePriceToString_iPhone(Macbook);

    // let AppleWatch = await AppleWatchModel.find({"home": true});
    // AppleWatch = priceFunctions.changePriceToString_Watch(AppleWatch)
    
    let AdobeProducts = await ProductsModel.find({category: "Adobe"});
    let OfficeProducts = await ProductsModel.find({category: "Office"});
    let SecurityProducts = await ProductsModel.find({category: "Security"});
    let WindowProducts = await ProductsModel.find({category: "Window"});
    let GoogleProducts = await ProductsModel.find({category: "Google"});
    let CloudProducts = await ProductsModel.find({category: "Cloud"});

    AdobeProducts = priceFunctions.changePriceToString_Products(AdobeProducts)
    OfficeProducts = priceFunctions.changePriceToString_Products(OfficeProducts)
    SecurityProducts = priceFunctions.changePriceToString_Products(SecurityProducts)
    WindowProducts = priceFunctions.changePriceToString_Products(WindowProducts)
    GoogleProducts = priceFunctions.changePriceToString_Products(GoogleProducts)
    CloudProducts = priceFunctions.changePriceToString_Products(CloudProducts)



    res.render('home', {
        AdobeProducts,
        OfficeProducts,
        SecurityProducts,
        WindowProducts,
        GoogleProducts,
        CloudProducts,
    })

	// res.render('home', {
    //     Banners: Banners,
    //     Categories: Categories,
    //     iPhone: iPhone,
    //     iPad: iPad,
    //     AppleWatch: AppleWatch,
    //     Macbook: Macbook
    // })
}