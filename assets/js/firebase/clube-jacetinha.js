import app from './app.js'
import {getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToClubeJacetinha(subscription){
    const db =getFirestore(app)
    const clubeJacetinhaCollection = collection(db, 'clubejacetinha')
    const docRef= await addDoc(clubeJacetinhaCollection, subscription)
    return docRef.id

}

export async function getClubeJacetinhaSubscriptions(){
const db = getFirestore(app)
const clubeJacetinhaCollection = collection(db, 'clubejacetinha')
const clubeJacetinhaCollectionSnapshot=await getDocs(clubeJacetinhaCollection)
const listaInscritos = clubeJacetinhaCollectionSnapshot.docs.map(doc =>doc.data())
return listaInscritos
}