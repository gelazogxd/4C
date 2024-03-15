import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function EmojiPicker({ isVisible, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a Sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.emoji}>😀</Text>
          <Text style={styles.emoji}>😎</Text>
          <Text style={styles.emoji}>😍</Text>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.emoji}>🎉</Text>
          {/* Agrega más emojis aquí según sea necesario */}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '50%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '25%',
    width: '100%',
    backgroundColor: '#464c55',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  emoji: {
    fontSize: 24,
    marginHorizontal: 10,
  },
});
