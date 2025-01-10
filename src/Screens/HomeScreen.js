import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import Home from './tabs/Home';
import Search from './tabs/Search';
import WishList from './tabs/WishList';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const renderSelectedTab = number => {
    switch (number) {
      case 0:
        return <Home />;
      case 1:
        return <Search />;
      case 2:
        return <WishList />;
      case 3:
        return <Notification />;
      case 4:
        return <User />;
      default:
        return <Home />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'Title'}
      /> */}
      {renderSelectedTab(selectedTab)}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}>
          <Image
            source={
              selectedTab === 0
                ? require('../images/home_fill.png')
                : require('../images/home.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}>
          <Image
            source={
              selectedTab === 1
                ? require('../images/search.png')
                : require('../images/search.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}>
          <Image
            source={
              selectedTab === 2
                ? require('../images/heart_fill.png')
                : require('../images/heart.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(3)}>
          <Image
            source={
              selectedTab === 3
                ? require('../images/notification_fill.png')
                : require('../images/notification.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(4)}>
          <Image
            source={
              selectedTab === 4
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
