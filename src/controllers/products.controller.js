import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query; //Si se indica categoria la tomamos
        
        let products = await productService.getAllProducts(); //Traemos todo

        if (category) { //Si se indica categoria filtramos
            products = products.filter(p => p.category === category);
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { title, description, category, price, stock } = req.body;

        // 1. Validar campos requeridos
        if (!title || !description || !category || price === undefined || stock === undefined) {
            return res.status(400).json({ message: 'Los siguientes campos son obligatorios: title, description, category, price, stock' });
        }

        // 2. Validar que el precio sea un número y no un string
        if (typeof price !== 'number' || isNaN(price)) {
            return res.status(400).json({ message: 'El precio debe ser un número válido' });
        }

        // 3. Validar que el stock no sea negativo
        if (stock < 0) {
            return res.status(400).json({ message: 'El stock no puede ser negativo' });
        }

        // 4. Validar que el precio no tenga más de 2 decimales (ej: 99.999 es inválido)
        // Convertimos a string y contamos los decimales después del punto
        const priceString = price.toString();
        if (priceString.includes('.') && priceString.split('.')[1].length > 2) {
            return res.status(400).json({ message: 'El precio no puede tener más de 2 decimales' });
        }

        const newProduct = await productService.createProduct({ title, description, category, price, stock });
        
        res.status(201).json(newProduct); 

    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const result = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json({ message: 'Producto actualizado correctamente', data: result });
    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};
