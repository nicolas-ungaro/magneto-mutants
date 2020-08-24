// Mock the database:
function FirebaseRepository() {
    let data = require('./data.json')

    async function addDocument(dnaData) {
        return data.push(dnaData);
    }

    async function findDocument(id) {
        return data.find(d => d.id === id);
    }

    async function allDocuments() {
        return data;
    }

    return {
        add: addDocument,
        find: findDocument,
        all: allDocuments
    }
};

module.exports = FirebaseRepository;