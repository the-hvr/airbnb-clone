const Joi = require('joi');

//LISTING SCHEMA VALIDATION -- SERVER SIDE VALIDATION
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string()
            .trim()
            .required()
            .min(3),

        description: Joi.string()
            .trim()
            .required()
            .min(8)
            .max(500),

        image : Joi.object({
            url : Joi.string()
                .uri()
                .allow("", null),
            filename : Joi.string()
        }).optional(),

        price : Joi.number()
            .required()
            .min(0),

        location : Joi.string()
            .trim()
            .required()
            .min(2)
            .max(50),

        country : Joi.string()
            .trim()
            .required()
            .min(2)
            .max(30),
        categories: Joi.array()
            .items(
                Joi.string().valid(
                "trending",
                "iconic cities",
                "beach",
                "mountains",
                "cabins",
                "rooms",
                "luxury",
                "nature",
                "farms",
                "camping",
                "amazing pools",
                "arctic",
                "heritage",
                "desert",
                "unique stays"
            )
        )
        .min(1)
        .required()    
    }).required().unknown(false),
});


//REVIEWS SCHEMA VALIDATION -- SERVER SIDE VALIDATION
module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        comment : Joi.string()
            .trim()
            .required(),
        rating : Joi.number()
            .required()
            .min(1)
            .max(5),
    }).required().unknown(false),
});