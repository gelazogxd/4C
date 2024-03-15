import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function Post(){
    const{data,setData}=useState(null);
    const{error, setError}= useState(null);
    const{isLoading, setIsLoadiog}= useState(true);

    useEffect=(()=>{
        fetch(url)
        .then(response => response.json())
        .then(response) => {
            setIsLoadiog(false)    );

        }, () => {
    )
        }
    },[]);

    const getcontent = () => {
        if (isLoading){
            <View>
                <Text style={styles.textProps}>
                    Loading Data...
                </Text>
                <ActivityIndicator size="large" color="green"></ActivityIndicator>
            </View>
        }
    }

    if(error){
        setIsLoadiog(false);
        setError(error);

        return <Text>{error}</Text>
    }

    

        console.log(data)
    
    return(
        <View>
        <FlatList 
        data={data}
        renderItem={item=>{
                <Text>{item.title}</Text>
        }}/>
            </View>
        
    );

}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 32,
    }
});
