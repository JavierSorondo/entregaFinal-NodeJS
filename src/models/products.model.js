import db from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (!productDoc) {
        return null;
    } else {
        return productDoc.data();
    };
}

export async function createProduct(product) {
    const docRef = await addDoc(productsCollection, product);
    return { id: docRef.id, ...product };
}

export async function updateProduct(id, updatedProduct) {
    const productDoc = doc(productsCollection, id);
    await updateDoc(productDoc, updatedProduct);
}

export async function deleteProduct(id) {
    await deleteDoc(doc(productsCollection, id));
}