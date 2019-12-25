import React, { Component } from "react";
import { View } from 'react-native';
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
    state = {
        search : ''
    };

    updateSearch = search => {
        this.setState({ search });
    }

    render() {
        let {search} = this.state;
        return (
            <View>
                <SearchBar
                lightTheme={true}
                containerStyle={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 0,
                    borderBottomWidth: 2,
                    borderTopWidth: 0,
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: -20,
                    elevation: 15
                }}
                inputContainerStyle={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    padding: 7
                }}
                placeholder="Find Services"
                round={true}
                onChangeText={this.updateSearch}
                value={search}
                />
            </View>
        );
    }
}