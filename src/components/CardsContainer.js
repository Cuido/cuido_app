import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';


export default class CardsContainer extends Component {
    renderCards() {
        return this.props.data.map((item, index) => {
            return (
                <View key={index}>
                    {this.props.renderCard(item)}
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.cardsContainer}>
                {this.renderCards()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        overflow: 'scroll'
    }
})