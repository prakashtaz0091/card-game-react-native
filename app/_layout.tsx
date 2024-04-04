import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='index'
                options={{
                    headerShown: false,
                    headerShadowVisible: false,
                    statusBarHidden: true,
                    navigationBarHidden: true
                }}
            />
            <Stack.Screen name='game'
                options={{
                    headerShown: false,
                    statusBarHidden: true,
                    navigationBarHidden: true
                }}
            />
        </Stack>
    )
}

export default _layout