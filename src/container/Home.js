import React, { Component } from "react";
import { StyleSheet, View, Button, SafeAreaView, Text } from "react-native";
import Search from "../components/Search";
import OfferCards from "./OfferCards";

export default class Home extends Component {
    render() {
        return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, flexDirection:'column' ,paddingTop: 30}}>
                <View style={styles.header}>
                    <Search />
                </View>
                <View style={styles.secondary}>
                    <View>
                        <Text style={styles.offersText}>Offers for you</Text>
                        <OfferCards />
                        <Text style={styles.offersText}>Categories</Text>
                    </View>
                </View>
                <View style={styles.listView}></View>
            </View>
        </SafeAreaView>
        
        );
    }
}

const styles = StyleSheet.create({
    header : {
        justifyContent: "flex-end",
        flex: 0.6,
        borderBottomWidth: 0.5,
        backgroundColor: "#618a85"
    },
    secondary: {
        flex: 3,
    },
    listView: {
        flex: 2,
        backgroundColor: 'white'
    },
    searchBar: {
        position: 'absolute',
        bottom: 0
    },
    offersText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "grey",
        marginTop: 30,
        marginLeft: 20
    }
})