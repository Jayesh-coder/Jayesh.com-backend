const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter game name"],
        },

        status: {
            type: String,
            required: [true, "Completed or Playing"]
        },

        code: {
            type: String,
            required: [true, "provide trailer"]
        }

    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;