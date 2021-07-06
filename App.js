/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView styles={styles.safeArea}>
      <ScrollView styles={styles.scrollView}>
        <View styles={styles.logoHolder}>
          <Image source={require('./res/img/logo.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  scrollView: {
    flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  logoHolder: {
    flex: 0.5,
    width: 300,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
