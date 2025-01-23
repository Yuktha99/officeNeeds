import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../common/Header';
import ProductList from '../common/ProductList';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);
  return (
    <View style={styles.container}>
      <Header
        title={'Cart Items'}
        leftIcon={require('../images/back.png')}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <ProductList
        items={cartItems}
        onPressItem={item => {
          navigation.navigate('ProductDetail', {data: item});
        }}
        showItemQty
      />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
