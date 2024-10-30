import React from 'react';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';


export default function Product_Detail() {
    const [data, setData] = useState([])
    const filePath = 'https://dummyjson.com/products/2';
    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Card style={{ marginVertical: 10 }}>
                    <Card.Title
                        title={data.title}
                        titleStyle={{ fontSize: 25 }}
                    />                    
                    <Card.Content>
                        <Text>{data.description}</Text>
                        <Text>Price: ${data.price}</Text>
                        <Text>Discount: {data.discountPercentage}%</Text>
                        <Text>Rating: {data.rating}/5</Text>
                        <Text>Stock: {data.stock}</Text>
                        <Text>Brand: {data.brand}</Text>
                        <Text>Category: {data.category}</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: data.thumbnail }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                        <Button mode="contained" onPress={() => console.log('Pressed')} style={{ marginRight: 10 }}>
                            Delete
                        </Button>
                        <Button mode="contained" onPress={() => console.log('Pressed')}>
                            Cancel
                        </Button>
                    </View>
                </Card>
            </View>


        </View>

    )
}