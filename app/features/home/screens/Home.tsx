import { View, Text, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AppView from '~/app/core/component/AppView';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CompositeNavigationProp } from '@react-navigation/native';
import ScannerScreens from '../../scanner/config/Screens';


export default function Home({ navigation }: { navigation: CompositeNavigationProp<any, any> }) {

  return (
    <AppView withSafeArea>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={ () => ScannerScreens.SCANNER.navigate(navigation)}>
          <Text style={styles.buttonText}>
            Scan
          </Text>
        </TouchableOpacity>
        {/* </ScrollView> */}
      </View>
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 120,
    height: 35,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    // color: 'white'
  }
});