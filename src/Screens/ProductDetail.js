import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '../redux/slices/WishlistSlice';
import { addItemToCart } from '../redux/slices/CartSlice';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const productData = route?.params?.data;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <ScrollView>
      <Image source={{uri: productData?.image}} style={styles.banner} />
      <Text style={styles.title}>{productData?.title}</Text>
      <Text style={styles.desc}>{productData?.description}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.price, {color: '#000'}]}>Price</Text>
        <Text style={styles.price}>{`$${productData?.price}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => {
          dispatch(addItemToWishlist(route.params.data));
        }}>
        <Image
          source={require('../images/heart.png')}
          style={styles.wishlistIcon}
        />
      </TouchableOpacity>
      <CustomButton
        title={'Add To Cart'}
        bg="#FF9A0C"
        color={'#FFF'}
        onClick={() => {dispatch(addItemToCart(route.params.data));}}
      />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
    color: '#000',
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  price: {
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  wishlistIcon: {
    width: 24,
    height: 24,
  },
});
