import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark';
  const [counter, setCounter] = useState(0);

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkBackground : styles.lightBackground,
      ]}>
      <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
        Counter App
      </Text>
      <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
        {counter}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setCounter(counter + 1)}
          style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackground: {
    backgroundColor: '#121212', // Dark mode background
  },
  lightBackground: {
    backgroundColor: '#F5F5F5', // Light mode background
  },
  darkText: {
    color: 'white',
    fontSize: 30,
    marginTop: 15,
  },
  lightText: {
    color: 'black',
    fontSize: 30,
    marginTop: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
