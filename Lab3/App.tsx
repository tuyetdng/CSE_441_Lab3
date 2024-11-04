
import React, { useState } from 'react';
import Product from './Q1/Product';
import AddProduct from './Q2/Add';
import Search from './Q3/Search';
import Product_Detail from './Q4/Product_Detail';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-paper';


export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductList', title: 'Products', focusedIcon: 'cart', unfocusedIcon: 'cart-outline' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'plus-box', unfocusedIcon: 'plus-box-outline' },
    { key: 'ProductSearch', title: 'Search', focusedIcon: 'magnify', unfocusedIcon: 'magnify-outline' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'information', unfocusedIcon: 'information-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ProductList: Product,
    Product_Add: AddProduct,
    ProductSearch: Search,
    Product_Detail: Product_Detail,
  });
  const renderIcon = ({ route, focused }) => {
    const iconName = focused ? route.focusedIcon : route.unfocusedIcon; // Sử dụng icon tương ứng
    return <Icon icon={iconName} />;
  };

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
      />
    </SafeAreaProvider>
  );
};