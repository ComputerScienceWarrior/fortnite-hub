import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View>
        <Button title="Player Search" onPress={() => {navigation.navigate('Search')}} />
        <Text>Home Screen</Text>
      </View>
    );
}

export default HomeScreen;
