var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId : {
        type        : Number,
        required    : true,
        unique      : true,
    },
    uiName : {
        type        : String,
        required    : true,
    },
    uiAge : {
        type        : Number,
        required    : true,
    },
    uiGender : {
        type        : String,
        required    : true,
    },
    uiWeight : {
        type        : Number,
        required    : true,
    },
    uiHeight : {
        type        : Number,
        required    : true,
    }
})

var foodDataEntrySchema = mongoose.Schema({
    fdFoodName : {
        type        : String,
        required    : true,
    },
    fdFoodQuantity : {
        type        : Number,
        required    : true,
    },
    fdEntryDate : {
        type        : Date,
        required    : true,
    },
    fdEntryTime : {
        type        : String,
        required    : true,
    },
    fdMood : {
        type        : String,
        required    : true,
    },
    fdCaloriesIn : {
        type        : Number,
        required    : true,
    },
})

var activityDataEntrySchema = mongoose.Schema({
    adActivityName : {
        type        : String,
        required    : true,
    },
    adEntryDate : {
        type        : Date,
        required    : true,
    },
    adEntryTime : {
        type        : String,
        required    : true,
    },
    adActivityAmountHours : {
        type        : Number,
        required    : true,
    },
    adActivityAmountMinutes : {
        type        : Number,
        required    : true,
    },
    adMood : {
        type        : String,
        required    : true,
    },
    adCaloriesOut : {
        type        : Number,
        required    : true,
    },
})

var UserInformationModel = mongoose.model('userInformation', userInformationSchema, 'userInformation')
var FoodDataEntryModel = mongoose.model('foodDataEntry', foodDataEntrySchema, 'foodDataEntry')
var ActivityDataEntryModel = mongoose.model('activityDataEntry', activityDataEntrySchema, 'activityDataEntry')

module.exports = UserInformationModel
module.exports = FoodDataEntryModel
module.exports = ActivityDataEntryModel
