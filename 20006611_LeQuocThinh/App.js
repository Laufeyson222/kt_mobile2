import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const App = () => {
  const [showText, setShowText] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
    
    });
  };

  const handleShowText = () => {
    setShowText(true);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {showText && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.text}>Hi</Text>
          <Text style={styles.text}>Hello</Text>
        </Animated.View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleShowText}>
        <Text style={styles.buttonText}>Show</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;