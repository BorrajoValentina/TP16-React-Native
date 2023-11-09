import { StyleSheet, Text, View } from 'react-native';
import { obtenerAlumno } from './dbFunctions';
import { useState, useEffect } from 'react';

export default function App() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() =>{
    (async () => {
      await obtenerAlumno().then((data) => {
        setAlumnos(data);
      });
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>{alumnos}</Text>
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
});