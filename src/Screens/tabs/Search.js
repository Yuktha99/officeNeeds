import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import ProductList from '../../common/ProductList';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state);

  const [searchText, setSearchText] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchList, setSearchList] = useState(oldData);

  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchList(newData);
  };
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../images/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            value={searchText}
            onChangeText={txt => {
              setSearchText(txt);
              filterData(txt);
            }}
            placeholder="Search Items here.."
            style={styles.searchInput}
          />
        </View>
        {searchText !== '' && (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => {
              setSearchText('');
              filterData('');
            }}>
            <Image
              source={require('../../images/close.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop: 50}}>
        <ProductList
          items={searchList}
          onPressItem={item => {
            navigation.navigate('ProductDetail', {data: item});
          }}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  searchIcon: {
    width: 16,
    height: 16,
    resizeMode: 'center',
  },
  searchInput: {
    width: '80%',
    marginLeft: 10,
  },
});
