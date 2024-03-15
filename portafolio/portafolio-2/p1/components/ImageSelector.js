import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ImageSelector({ onSelect }) {
  const selectImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      onSelect(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={selectImageFromGallery} style={styles.button}>
      <Text style={styles.buttonText}>Select Image from Gallery</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
