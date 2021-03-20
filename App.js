import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import axios from 'axios';


const SEARCH = () => {
    const apiURL = 'http://www.omdbapi.com/?&apikey=28f4dae9';
    const [state, setState] = useState({
        s: "Enter a movie....",
        results: [],
        selected: {}
    });

    const search = () => {
        axios(apiURL + "&s=" + state.s).then(({ data }) => {
            let results = data.Search;
            console.log(results)
            setState(prevState => {
                return {...prevState, results: results }
            })
        })
    }
    return ( <
        SafeAreaView >
        <
        View >
        <
        Text style = { styles.title } >
        <
        Image style = { styles.searchpic }
        source = {
            { uri: 'https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg' }
        }
        />
        Movie <
        Image style = { styles.searchpic }
        source = {
            { uri: 'https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg' } }
        />  { "\n" } <
        /Text>  <
        TextInput style = { styles.s }
        onChangeText = {
            text => setState(prevState => {
                return {...prevState, s: text }
            })
        }
        onSubmitEditing = { search }
        value = { state.s }
        />  <
        ScrollView > {
            state.results.map(result => ( <
                View key = { result.imdbID } >
                <
                Image style = {
                    { width: 300, height: 300, marginHorizontal: 'auto' }
                }
                source = {
                    { uri: result.Poster } }
                resizeMode = "cover" /
                >
                <
                Text > { result.Title } <
                /Text>  <
                /View>
            ))
        } <
        /ScrollView>  <
        /View>  <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Cochin",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center"
    },
    searchpic: {
        width: 50,
        height: 50

    },
    searchbar: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
        width: '100%',

    },
});
export default SEARCH;