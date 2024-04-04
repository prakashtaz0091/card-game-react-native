import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

type PlayerProps = {
    playerPosition: string;
}


const Player = ({ playerPosition }: PlayerProps) => {

    return (
        <View style={
            [
                styles.player,
                playerPosition == "left" && styles.left,
                playerPosition == "top" && styles.top,
                playerPosition == "right" && styles.right,
            ]
        }>
            <Octicons name="person" size={24} color="black" />
            <View style={styles.badge} ></View>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({
    player: {
        position: "absolute",
        height: 50,
        width: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        elevation: 5
    },
    badge: {
        borderWidth: 1.5,
        borderColor: "lightblue",
        height: 12,
        width: 12,
        backgroundColor: "green",
        borderRadius: 50,
        position: "absolute",
        top: 5,
        right: -1
    },
    top: {
        top: 10
    },
    left: {
        left: 10
    },
    right: {
        right: 10
    },
})