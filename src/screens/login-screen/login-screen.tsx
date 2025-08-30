import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView, ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from "../../components/button/button-primary-component.tsx";
import OutlineButton from "../../components/button/button-outline-component.tsx";


const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
      <ImageBackground
        source={require('../../assets/background/login-screen.png')}
        style={styles.background}
        resizeMode={'cover'}
      >
        <View style={styles.overlay} />


      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Light Application</Text>
        </View>

        <View style={styles.middle}>
          <Text style={styles.title}>Welcome 👋</Text>
          <Text style={styles.subtitle}>
            This is a sample mobile app built for my React Native Portfolio. Enjoy the design!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonBalance}>
            <PrimaryButton
                title="Log in"
                onPress={() => navigation.navigate('SignIn')}
            />
          </View>


          <OutlineButton
              title="Sign up"
              onPress={() => navigation.navigate('SignIn')}
          />

        </View>
      </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    position: 'relative'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: height * 0.1,
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 20,
  },
  logo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  middle: {
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 22,
  },
  subtitle: {
    color: '#cfdfff',
    fontSize: 16,
    lineHeight: 32,
    maxWidth: '85%',
  },
  buttonContainer: {
    width: '90%',
    paddingBottom:10,
  },
  buttonBalance: {
    marginBottom: 10,
  }
});
