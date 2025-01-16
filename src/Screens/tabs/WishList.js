import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import ProductList from '../../common/ProductList';
import { useNavigation } from '@react-navigation/native';

const WishList = () => {
  const navigation = useNavigation()
  const items = useSelector(state => state.wishlist);
  const [wishlistItems, setWishlistTems] = useState(items.data);
  console.log(JSON.stringify(items));
  return (
    <View style={styles.container}>
      <Header title={'Wishlist Items'} />
      <ProductList
        items={wishlistItems}
        onPressItem={item => {
          navigation.navigate('ProductDetail', {data: item});
        }}
      />
    </View>
  );
};

export default WishList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
