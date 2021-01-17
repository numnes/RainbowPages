const Firestore = require('@google-cloud/firestore');
const path = require('path');

class FirestoreClient{
    constructor(){
        this. firestore = new Firestore({
            projectId: 'rainbowpages-301923',
            keyFilename: path.join(__dirname, './service-account.json')
        })
    }
    async save(collection, data){
        const docRef = this.firestore.collection(collection).doc(data.nome);
        const response = await docRef.set(data);
        return response.data();
    }
    async saveSubCollection(rootCol, rootDocName, subCol, subColData){
        const docRef = this.firestore.collection(rootCol).doc(rootDocName).collection(subCol).doc(subColData.docName);
        await docRef.set(subColData);
    }
    async saveByPath(path, data){
        const docRef= this.firestore.doc(path);
        await docRef.set(data);
    }
    async getByPath(path){
        const docRef = this.firestore.collection(path)
        let response = [];
        await docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                response.push(doc.data());
                console.log(response);
            });
        });
        return response;
    }
}

module.exports = new FirestoreClient();