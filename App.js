import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.flex1}>
        <Text>
          1
        </Text>
      </View>
      <View style = {styles.flex2}>
        <Text>
          2
        </Text>
      </View>
      <View style = {styles.flex3}>
        <Text>
          3
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
   flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  flex1: {
    backgroundColor: 'red',
     flex: 1  ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex2: {
    backgroundColor: 'blue',
     flex: 2,
    alignItems: 'center',
    justifyContent:'center'
  },
  flex3: {
    backgroundColor: 'green',
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
