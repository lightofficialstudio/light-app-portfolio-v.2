import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlaceholderScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.name}</Text>
      <Text style={styles.subtitle}>This is a placeholder screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: '#777',
  },
});

export default PlaceholderScreen;