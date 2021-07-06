/**
 * React Native Build Exercise
 *
 * Lingokids - 2021
 */

import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView
      style={styles.scrollViewHolder}
      contentContainerStyle={styles.scrollView}>
      <Image style={styles.logo} source={require('./res/img/logo.png')} />
      <Text style={styles.buildLabel}>{'Build me!'}</Text>
      <Text style={styles.modeLabel}>
        {`Mode: ${__DEV__ ? 'Development' : 'Production'} `}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewHolder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4F67FF',
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginVertical: 45,
  },
  buildLabel: {
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  modeLabel: {
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;
