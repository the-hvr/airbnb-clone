require("dotenv").config({ path: "../.env" });

const initData = require('./data.js');
const Listing = require('../models/listing.js');
const mongoose = require('mongoose');
const MONGO_ATLAS_URL = process.env.ATLASDB_URL;  

main()
    .then(() => console.log(`CONNECTION SUCCESSFULL WITH MONGODB-ATLAS `))
    .catch((err) => console.log("CONNECTION FAILED - ERROR :", err));

async function main() {
    await mongoose.connect(MONGO_ATLAS_URL);
}

const initdb = async () => {
    console.log("Start initializing... ");
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({...obj, owner: "6980f08471a6003a9ef46b6d",}));

    for (let listing of initData.data) {
        try {
            const location = listing.location;

            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`,
                {
                    headers: {
                        "User-Agent": "airbnb-clone/1.0 (learning project)",
                    },
                }
            );

            const data = await response.json();

            if (data.length > 0) {
                const lat = Number(data[0].lat);
                const lon = Number(data[0].lon);

                listing.geometry = {
                    type: "Point",
                    coordinates: [lon, lat],
                };
            } else {
                listing.geometry = {
                    type: "Point",
                    coordinates: [0, 0],
                };
                console.warn(`Location not found for: ${location}`);
            }
        } catch (err) {
            console.error(`Geocoding failed for ${listing.location}`, err);

            listing.geometry = {
                type: "Point",
                coordinates: [0, 0],
            };
        }
    }

    await Listing.insertMany(initData.data);
    console.log("Data initialized successfully.");
};

initdb();
