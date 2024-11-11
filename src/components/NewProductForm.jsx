import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import useInventory from "../hooks/useInventory"

const NewProductForm = () => {
    const { addProduct } = useInventory();

    // local state for form fields
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const productData = { name: name.trim(), price: parseFloat(price).toFixed(2) };
        
        // add the new product
        addProduct(productData);

        // clear form
        setName('');
        setPrice('');
       
        }

    return (
        <Container>
            <h1>Add Product</h1>
            <h4>Because these are dummy products and the list is a dummy list it won't update the actual list.</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter product name" 
                    />
                </Form.Group>

                <Form.Group controlId="formGroupPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Enter price"
                    />
                </Form.Group>

                <Button variant='primary' type='submit' className="mt-3">Submit</Button>
            </Form>

        </Container>
    );
}

export default NewProductForm;