import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailid: '',
      password: '',
    };
  }
 login = async (emailInput, passwordInput) => {
    if (emailInput && passwordInput) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(emailInput, passwordInput);
        if (response) {
          this.props.navigation.navigate('Write');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert('The user does not exist');
            console.log("user doesn't exist");
            break;
          case 'auth/invalid-email':
            Alert.alert('The entered email ID or password is incorrect');
            console.log('invaild user information');
            break;
        }
      }
    } else {
      Alert.alert('Enter email ID and password');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            Bedtime Stories
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          />
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderWidth: 1,
              marginTop: 20,
              paddingTop: 5,
              borderRadius: 7,
            }}
            onPress={() => {
              this.login(this.state.emailId, this.state.password);
            }}>
            <Text style={{ textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
});