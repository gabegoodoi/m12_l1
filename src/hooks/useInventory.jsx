import { useState } from 'react';

export default function useInventory() {
    // dummy data for products
    const dummyProducts = [
        { id: 1, name: 'hat', price: 19.99 },
        { id: 2, name: 'shoes', price: 59.99 },
        { id: 3, name: 'tie', price: 29.99 }
    ];

    // state for storing products
    const [products, setProducts] = useState(dummyProducts);

    // function to fetch all products
    const fetchProducts = () => {
        return products;
    };

    // function to add new products
    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [ 
            ...prevProducts,
            { 
                id: prevProducts.length > 0 ? prevProducts[prevProducts.length - 1].id + 1 : 1, 
                ...newProduct 
            }
        ]);
    };

    // function to remove product by id
    const removeProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } 

    return { products, fetchProducts, addProduct, removeProduct };
};