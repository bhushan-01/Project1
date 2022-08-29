import {
  StyleSheet,
  Text,
  View,
 ScrollView,Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,
{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icons from 'react-native-vector-icons/Entypo';
import Home from './Home';

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.t1}> Create an account</Text>
      <Text style={styles.t2}>
        By clicking on "Create Account" you agree to our Terms of Use and
        Privacy Policy{' '}
      </Text>
      <TextInput
        placeholder="Name "
        placeholderTextColor={'white'}
        style={styles.ti1}
      />
      <TextInput
        multiline={true}
        placeholder="Email "
        placeholderTextColor={'white'}
        style={styles.ti2}
      />
      <View style={styles.pass}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password (8+ characters)"
          placeholderTextColor={'white'}
          style={styles.ti3}
        />
        <Icons
          name="eye-with-line"
          size={30}
          color="white"
          style={styles.icon}
          styles={{marginLeft: 10}}
        />
      </View>

      <Text style={styles.t3}>Create Account</Text>
      <View style={styles.CheckBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{
            true: '#fff',
          }}
        />
        <Text style={styles.cbt}>Email me deals and recommendations</Text>
      </View>
      <View style={styles.r }>
        <Text style={styles.sn}>Have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  r: {
    flexDirection: 'row',
  },
  btn: {
  
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 60,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  icon: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  pass: {
    flexDirection: 'row',
  },
  sn: {
    marginLeft: 80,
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 20,
  },
  t1: {
    fontSize: 40,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  CheckBox: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,
  },
  cbt: {
    color: 'white',
    fontSize: 20,
  },
  t2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  t3: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
  },

  ti1: {
    color: 'white',
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '80%',
  },
  ti2: {
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'white',
    marginTop: 10,
    marginLeft: 20,
    borderBottomWidth: 1,
    width: '80%',
  },
  ti3: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
