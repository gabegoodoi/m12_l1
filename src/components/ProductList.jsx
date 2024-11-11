import React, { useState } from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import useInventory from "../hooks/useInventory"

const ProductList = () => {
    // accessing products & remove products from hook
    const { products, removeProduct } = useInventory();

    return (
        <Container>
            <h1>Product List</h1>
            <ListGroup>
                {products.map((product) => (
                    <ListGroup.Item key={product.id}>
                        <div>
                            {product.name} - ${product.price}
                            <Button variant="danger" onClick={() => removeProduct(product.id)} className="mx-3">Remove</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default ProductList;