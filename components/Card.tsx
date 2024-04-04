import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    runOnUI,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { throwCard } from '@/utils/socket';



type CardProps = {
    info: {
        title: string,
        card_no: number,
        card_type: string,
    };

}

const Card = ({ info }: CardProps) => {

    const pressed = useSharedValue(false);
    const offset = useSharedValue(0);




    const icon_name = `cards-${info.card_type}`
    const icon_color = ["heart", "diamond"].includes(info.card_type) ? "red" : "black"



    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = true;
        })
        .onChange((event) => {
            offset.value = event.translationY;
        })
        .onFinalize((event) => {
            offset.value = withSpring(-120);
            pressed.value = false;
            runOnJS(throwCard)(info.card_no);
        })








    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateY: offset.value },
            { scale: withTiming(pressed.value ? 1.2 : 1) },
        ],
        backgroundColor: pressed.value ? '#f6f6f6' : '#fff',
    }));






    return (
        <>
            <GestureDetector gesture={pan}>

                <Animated.View

                    style={
                        [
                            styles.card_wrapper,
                            { left: info.card_no * 40 },
                            animatedStyles
                        ]

                    }

                // onLongPress={handleLongPress}
                // delayLongPress={100}
                // onPressOut={handlePressOut}

                >
                    <View  >
                        <Text style={styles.card_title} >{info.title}</Text>


                        {
                            <MaterialCommunityIcons name={icon_name as "text"} size={20} color={icon_color} style={styles.card_icon} />

                        }

                    </View>
                </Animated.View>
            </GestureDetector>

        </>
    )
}

export default Card

const styles = StyleSheet.create({

    card_wrapper: {
        position: "absolute",
        top: 0,
        backgroundColor: "white",
        height: 110,
        width: 80,
        borderRadius: 3,
        elevation: 6,


        // justifyContent: "center",
        // alignItems: "center"

    },
    normal: {
        top: 0,
    },
    popUp: {
        top: -20,
        elevation: 10
    },
    card_title: {
        position: "absolute",
        top: 0,
        left: 0,
        fontWeight: "600",
        fontSize: 20,
        margin: 8,
    },
    card_icon: {
        position: "absolute",
        margin: 6,
        top: 25
    },

})