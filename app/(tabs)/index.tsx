import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Index Page</Text>
      <Link href='/log-in'>Log in</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
