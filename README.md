# React Native Counter App

A simple counter application built with React Native that supports both light and dark modes.

## Screenshots

### Dark Mode
![Dark Mode](https://github.com/Rudraksh121a/reactt-native-counterApp/blob/main/github_image/counter_dark.jpg)

### Light Mode
![Light Mode](https://github.com/Rudraksh121a/reactt-native-counterApp/blob/main/github_image/counter_light.jpg)

### Default Mode
![Default](https://github.com/Rudraksh121a/reactt-native-counterApp/blob/main/github_image/counter.jpg)

## Features
- Light and Dark mode support based on system theme.
- Simple counter functionality.
- Smooth UI with styled buttons.

## Installation

Clone the repository:
```sh
git clone https://github.com/Rudraksh121a/reactt-native-counterApp.git
```

Navigate to the project directory:
```sh
cd reactt-native-counterApp
```

Install dependencies:
```sh
npm install
```

## Running the App

For Android:
```sh
npx react-native run-android
```

For iOS:
```sh
npx react-native run-ios
```

## Code Overview

The core functionality of the app:

```javascript
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App() {
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
```

## License

This project is open-source and available under the [MIT License](LICENSE).
