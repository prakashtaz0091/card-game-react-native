import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import CardBack from '@/components/CardBack'
import Player from '@/components/Player'
import { sendMessage } from '../utils/socket'



import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Game = () => {

    const cards = ["A", "K", "Q"]
    const card_types = ["club", "heart", "diamond"]
    // const cards = {
    //     {spade:"A"}
    // }


    useEffect(() => {

        sendMessage("entered game")
    }, [])










    return (
        <GestureHandlerRootView style={styles.wrapper} >
            <Player playerPosition={"left"} />
            <Player playerPosition={"top"} />
            <Player playerPosition={"right"} />
            {/* <CardBack /> */}
            <View style={styles.player_view}>
                <View style={styles.cards} >

                    {
                        cards.map((card) => {
                            const cardInfo = {
                                title: card,
                                card_no: cards.indexOf(card),
                                card_type: card_types[cards.indexOf(card)]
                            }
                            return (
                                <Card key={card} info={cardInfo} />
                            )
                        })
                    }


                </View>

            </View>
        </GestureHandlerRootView>
    )
}

export default Game


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        display: "flex",
        gap: 20,

    },
    text: {
        color: "white",
        fontWeight: "400",
        fontSize: 20

    },
    heading: {
        fontSize: 40,
        fontWeight: "600"

    },
    cards: {
        position: "relative",
        // borderWidth: 1,
        width: "auto"
    },
    player_view: {
        position: "absolute",
        bottom: -30,
        // left: 10,
        transform: [{ translateX: -80 }],
        // borderWidth: 1,
        height: "40%",
        // width: "70%",
        display: "flex",
        alignItems: "center"
    }

})