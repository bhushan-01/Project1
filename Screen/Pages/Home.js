import {StyleSheet, Text, View,Image ,ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import Flatlistdata from '../Flatlistdata/Flatlistdata';
import Icons from 'react-native-vector-icons/Feather';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.head}>Udemy</Text>
        <Icons
          name="shopping-cart"
          size={35}
          color="white"
          style={styles.icon}
          styles={{marginLeft: 10}}
        />
      </View>

      <Image
        style={styles.imgstyle}
        source={require('../Images/a-book-ga844da4a7_1920.jpeg')}
      />
      <Text style={styles.t1}>Learning that fits</Text>
      <Text style={styles.t2}>Skills for your present and future</Text>
      <Flatlistdata />

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.to}>Sign Up? </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home

const styles = StyleSheet.create({
  to: {
    color: 'white',
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 30,
    marginTop:20,

    
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft:150
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    // alignItems: 'center',
    fontFamily: 'sans-serif-light',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:160,
    marginBottom: 5,
  },
  icon: {
    marginTop: 7,
    marginRight:7
  },

  t1: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imgstyle: {
    width: '100%',
    height: 225,
  },

  t2: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'sans-serif-light',
    fontSize: 20,
  },
});
