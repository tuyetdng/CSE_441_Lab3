import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function AddProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');
    const handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                images,
            }),
        }).then((res) => res.json())
            .then(console.log);
        Alert.alert('Add sucessfull');
    };
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 35, color: 'pink', fontWeight: 'bold' }}>Add a Product</Text>

            <TextInput
                label="Title"
                value={title}
                onChangeText={setTitle}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Description"
                value={description}
                onChangeText={setDescription}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Price"
                value={price}
                onChangeText={setPrice}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Discount Percentage"
                value={discountPercentage}
                onChangeText={setDiscountPercentage}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Rating"
                value={rating}
                onChangeText={setRating}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Stock"
                value={stock}
                onChangeText={setStock}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Brand"
                value={brand}
                onChangeText={setBrand}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Category"
                value={category}
                onChangeText={setCategory}
                style={{ marginBottom: 10 }}

            />
            <TextInput
                label="Images"
                value={images}
                onChangeText={setImages}
                style={{ marginBottom: 10 }}

            />
            <Button mode="contained" onPress={handleSubmit}>
                Add Product
            </Button>
        </View>

    );
}

