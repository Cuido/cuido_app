import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CardsContainer from '../components/CardsContainer';
import { Card, ListItem } from "react-native-elements";

const DATA = [
    { id: 1, text: 'Card #1', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 2, text: 'Card #2', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 3, text: 'Card #3', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 4, text: 'Card #4', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 5, text: 'Card #5', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 6, text: 'Card #6', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 7, text: 'Card #7', uri: "https://iili.io/H1I4VI.jpg" },
    { id: 8, text: 'Card #8', uri: "https://iili.io/H1I4VI.jpg" }
];

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;


export default class OfferCards extends Component {
    renderCard(item) {
       return (
          <Card
             key={item.id}
             image={{ uri: item.uri }}
             imageProps={{
                 resizeMode: "stretch"
             }}
             imageStyle={{
                 height: 230,
                 width: SCREEN_WIDTH,
                 borderRadius: 10,
                 overflow: "hidden",
             }}
             containerStyle={{
                 width: SCREEN_WIDTH - 80,
                 height: 230,
                 borderWidth: 0
             }}
          >
          </Card>
       );
    }
    render() {
       return (
            <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10}}
            horizontal={true}>
                <CardsContainer
                    data={DATA}
                    renderCard={this.renderCard}
                />
            </ScrollView>
       );
    }
 }
