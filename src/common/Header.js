import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const {height, width} = Dimensions.get('window');
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  showCartItemsCount,
}) => {
  const cartItems = useSelector(state => state.cart);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => onClickLeftIcon()}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity style={styles.btn} onPress={onClickRightIcon}>
        <Image
          source={rightIcon}
          style={[styles.icon, {width: 40, height: 40}]}
        />
        {showCartItemsCount && (
          <View style={styles.cartItemsCount}>
            <Text style={{color: '#000'}}>{cartItems.data.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: '#d4dadd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  cartItemsCount: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
