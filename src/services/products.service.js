import * as productModel from '../models/products.model.js';

export async function getAllProducts() {
    return await productModel.getAllProducts();
}

export async function createProduct(productData) {
    return await productModel.createProduct(productData);
}

//Explicitamos los NOT_FOUND para que el controlador pueda distinguir 404 y 500
export async function getProductById(id) {
    const product = await productModel.getProductById(id);
    if (!product) throw new Error('NOT_FOUND');
    return product;
}

export async function updateProduct(id, updatedProduct) {
    const existingProduct = await productModel.getProductById(id);
    if (!existingProduct) throw new Error('NOT_FOUND');
    
    await productModel.updateProduct(id, updatedProduct);
    return { id, ...updatedProduct };
}

export async function deleteProduct(id) {
    const existingProduct = await productModel.getProductById(id);
    if (!existingProduct) throw new Error('NOT_FOUND');
    
    await productModel.deleteProduct(id);
}
