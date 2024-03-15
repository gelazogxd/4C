import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.items);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Personajes de Dragon Ball</Text>
      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title style={styles.headerCell}>Nombre</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Raza</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Género</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Descripción</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Ki</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Máximo Ki</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Afiliación</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Imagen</DataTable.Title>
        </DataTable.Header>

        {characters.map(character => (
          <DataTable.Row key={character.id} style={styles.row}>
            <DataTable.Cell>{character.name}</DataTable.Cell>
            <DataTable.Cell>{character.race}</DataTable.Cell>
            <DataTable.Cell>{character.gender}</DataTable.Cell>
            <DataTable.Cell>{character.description}</DataTable.Cell>
            <DataTable.Cell>{character.ki}</DataTable.Cell>
            <DataTable.Cell>{character.maxKi}</DataTable.Cell>
            <DataTable.Cell>{character.affiliation}</DataTable.Cell>
            <DataTable.Cell>
              <Image
                style={styles.image}
                source={{ uri: character.image }}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    marginTop: 10,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  row: {
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});