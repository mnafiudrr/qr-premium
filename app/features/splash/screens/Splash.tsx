import {CompositeNavigationProp} from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';
import { SplashContext } from '~/app/core/config/SplashContext';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    paddingBottom: wp(5),
    width: wp(50),
    height: wp(10),
  },
  footer: {
    padding: Platform.OS === 'android' ? wp(3) : (heightScreen < 700 ? wp(2) : 0),
    fontSize: wp(100) < 600 ? wp(3.8) : wp(100) < 700 ? wp(2.8) : wp(2),
    color: 'grey',
    textAlign: 'center',
    marginTop: wp(2),
  },
  loader: {
    marginTop: wp(5),
  }
});

export default function Splash({navigation}: {navigation: CompositeNavigationProp<any, any>}) {

  const { setSplashLoading } = useContext(SplashContext);
  const [imageUrl, setImageUrl] = useState(`https://i.mydramalist.com/pJZRB_5f.jpg`);
  useEffect(() => {
    setTimeout(() => {
      setSplashLoading(false);
    }, 3000);
  }, []);
  
  const getImage = async () => {

    setTimeout(() => {
      setSplashLoading(false);
    }, 3000);

  }


  return (
    <AppView withSafeArea withHeader={false}>
      <View style={styles.container}>
        {
          imageUrl ? <Image style={styles.logo} source={{ uri:imageUrl }}/> : null
        }
        <Text>Welkam tu mai QR</Text>
      </View>
      <View style={styles.containerFooter}>
        <ActivityIndicator style={styles.loader} size={'large'} color={'grey'} />
        <Text style={styles.footer}>Loading ...</Text>
      </View>
    </AppView>
  );
}
