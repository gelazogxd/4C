import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import EmojiPicker from './components/EmojiPicker';
import ImageSelector from './components/ImageSelector';

export default function App() {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClosePicker = () => {
    setIsPickerVisible(false);
  };

  const handleOpenPicker = () => {
    setIsPickerVisible(true);
  };

  const handleSelectImage = (imageUri) => {
    setSelectedImage(imageUri);
    handleClosePicker(); // Cerrar el EmojiPicker si se selecciona una imagen
  };

  return (
    <View style={styles.container}>
      {/* Se muestra la imagen seleccionada o un espacio vacío */}
      {selectedImage ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.image}
          />
        </View>
      ) : (
        <View style={styles.emptyImageContainer}></View>
      )}

      {/* Botones para seleccionar la imagen y el emoji */}
      <View style={styles.buttonContainer}>
        <Button title="Select Image" onPress={handleOpenPicker} />
        <Button title="Change Emoji" onPress={handleOpenPicker} />
      </View>

      {/* EmojiPicker */}
      <EmojiPicker isVisible={isPickerVisible} onClose={handleClosePicker}>
        {/* Componentes para seleccionar emoji */}
      </EmojiPicker>

      {/* ImageSelector */}
      <ImageSelector onSelect={handleSelectImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImageContainer: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
