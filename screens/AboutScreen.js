import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About Screen !!!</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
