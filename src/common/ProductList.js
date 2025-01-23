import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';

const ProductList = ({items, onPressItem, showItemQty}) => {
  const dispatch = useDispatch();
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={styles.productItem}
            activeOpacity={1}
            onPress={() => onPressItem(item)}>
            <Image source={{uri: item?.image}} style={styles.itemImage} />
            <View>
              <Text style={styles.name}>
                {item?.title?.length > 25
                  ? item?.title?.substring(0, 25) + '...'
                  : item?.title}
              </Text>
              <Text style={styles.desc}>
                {item?.description?.length > 30
                  ? item?.description?.substring(0, 30) + '...'
                  : item?.description}
              </Text>
              {showItemQty ? (
                <View style={styles.qtyView}>
                  <Text style={styles.price}>{`$${item.price}`}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      if (item.qty > 1) {
                        dispatch(reduceItemFromCart(item));
                      } else {
                        dispatch(removeItemFromCart(item));
                      }
                    }}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qty}>{item.qty}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      dispatch(addItemToCart(item));
                    }}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={styles.price}>{`$${item.price}`}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    marginLeft: 20,
    color: 'green',
    fontSize: 18,
    fontWeight: 600,
    marginTop: 5,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 5,
    width: 30,
    justifyContent: 'center',
    borderRadius: 2,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
});
