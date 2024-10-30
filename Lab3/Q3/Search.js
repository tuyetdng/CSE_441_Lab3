import React, { useState } from 'react';
import { TextInput, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Search() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products';

    const searchProduct = () => {
        if (value != '') { filePath = 'https://dummyjson.com/products/search?q=' + value; }
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    };

    const renderItem = ({ item }) => (
        <Card style={{ marginVertical: 10 }}>
            <Card.Title title={item.title} />
            <Card.Content>
                <Text>{item.description}</Text>
                <Text>Price: ${item.price}</Text>
                <Text>Discount: {item.discountPercentage}%</Text>
                <Text>Rating: {item.rating}/5</Text>
                <Text>Stock: {item.stock}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.thumbnail }} />
        </Card>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ padding: 10, fontSize: 25, fontWeight: 'bold' }}>Search Product</Text>
            <View style={{ padding: 10 }}>
                <TextInput
                    style={styles.searchBar}
                    value={value}
                    onChangeText={setValue}
                />

                <TouchableOpacity onPress={searchProduct} style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    searchBar: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
