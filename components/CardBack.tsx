import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardBack = () => {
    return (
        <View style={styles.card_wrapper} >
            <Image
                style={styles.image}
                source={require('@/assets/images/card-back.png')}
            // placeholder={blurhash}
            // contentFit="cover"
            // transition={1000}
            />
        </View>
    )
}

export default CardBack

const styles = StyleSheet.create({
    card_wrapper: {
        backgroundColor: "white",
        height: "40%",
        width: 100,
        borderRadius: 3,
        elevation: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


    },
    image: {
        height: "95%",
        width: "90%"
    }

})