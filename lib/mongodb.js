// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Ajoutez votre URI MongoDB à .env.local');
}

async function connectToDatabase() {
    if (client) {
        return client.db();
    }

    if (!clientPromise) {
        client = new MongoClient(uri, options);
        clientPromise = client.connect();
        console.log("Nouvelle connexion MongoDB établie"); // Pour le débogage
    }

    try {
        await clientPromise;
        client = await clientPromise;
        return client.db();
    } catch (e) {
        console.error("Erreur lors de la connexion à MongoDB :", e);
        clientPromise = null;
        throw e;
    }
}

export default connectToDatabase;