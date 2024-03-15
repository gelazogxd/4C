import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


const url = "http://api.coindesk.com/v1/bpi/currentprice.json"


export default function ApiBTC() {
    // const url = "http://api.coindesk.com/v1/bpi/currentprice.json"

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          setIsLoading(false);
          setResponse(result);
        }, (error) => {
          setIsLoading(false);
          setError(error);
        })
    }, []);
  
    console.log(response)
  
    const getContent = () => {
      if (isLoading) {
        return (
        <View>
          <Text style={styles.textSize}>Loading Data ...</Text>
        <ActivityIndicator size="large"/>
      </View>
  
      );
  
      }
  
      if (error) {
        return <Text >{error}</Text>
      }
      return(
        <View>
          <Text style={styles.textSize}>BTC to USD {response["bpi"]["USD"].rate}</Text>
          <Text style={styles.textSize}>Transaction Description {response["bpi"]["USD"].description}</Text>
  
        </View>
      )
    }
  
    return (
      
        getContent()
    );
  }
  
  const styles = StyleSheet.create({
    
    textSize: {
      fontSize: 30,
    },
  });