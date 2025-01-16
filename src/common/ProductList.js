import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const ProductList = ({items, onPressItem}) => {
  return (
    <FlatList
        data={items}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.productItem}
              activeOpacity={1}
              onPress={()=>onPressItem(item)}>
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
                <Text style={styles.price}>{`$${item.price}`}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
  )
}

export default ProductList

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
  });