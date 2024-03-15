import { StatusBar, StyleSheet, View } from 'react-native';
import ApiBTC from './components/ApiBTC';

export default function App() {
  
  return (
    <View style={styles.container}>
    
      <ApiBTC/>
    <StatusBar style="auto" />
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
  textSize: {
    fontSize: 30,
  },
});
