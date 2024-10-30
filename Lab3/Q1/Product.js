import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from "./style_product";

export default function Product() {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products';
    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Networ......');
                }
                return response.json();
            })
            .then((d) => { setData(d.products); console.log(data); }
            )
            .catch((error) => { console.log(error); });
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 35, color: 'pink', fontWeight: 'bold' }}>Product List</Text>

            <FlatList data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.imageColumn}>
                                <Image
                                    style={styles.logo}
                                    source={{ uri: item.thumbnail }}
                                />
                            </View>
                            <View style={styles.textButtonColumn}>
                                <Text style={styles.title}>Title: {item.title}</Text>
                                <Text style={styles.semi_text}>Description: {item.description}</Text>
                                <Text style={styles.semi_text}>Price: {item.price}</Text>
                                <Text style={styles.discount_text}>Discount: {item.discountPercentage} off</Text>
                                <Text style={styles.semi_text}>Rating: {item.rating}</Text>
                                <Text style={styles.semi_text}>Stock: {item.stock}</Text>
                                <Text style={styles.semi_text}>Brand: {item.brand}</Text>
                                <Text style={styles.semi_text}>Caterogy: {item.category}</Text>

                                <View style={styles.buttonRow}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Detail</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>);
                }}
            />
        </View>
    );
}