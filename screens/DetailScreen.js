import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const DetailScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Button
        title="Change Header Name"
        onPress={() => navigation.setOptions({ title: route.params.name })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:"center"
  },
});

export default DetailScreen;
