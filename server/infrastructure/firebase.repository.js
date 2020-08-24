const admin = require('firebase-admin');

function FirebaseRepository(config) {
    let serviceAccount = require("../magneto-mutants-firebase-key.json");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: config.db.url
    });
    
    const db = admin.firestore();
    const collection = db.collection(config.db.collection);
    
    async function addDocument(dnaData) {
        const docRef = collection.doc(dnaData.id);
        await docRef.set(dnaData);
    }
    
    async function findDocument(id) {
        const doc = await collection.get(id);
        if (!doc.exists) 
            return undefined;

        const result = doc.data();        
        return result;
    }

    async function allDocuments() {
        const snapshot = await collection.get();
        let result = [];
        snapshot.forEach(doc => result.push(doc.data()));
        return result;
    }

    return {
        add: addDocument,
        find: findDocument,
        all: allDocuments
    }
}

module.exports = FirebaseRepository;