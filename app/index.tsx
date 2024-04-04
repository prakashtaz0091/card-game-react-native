import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Colors from '@/constants/Colors'
import { Link, useRouter } from 'expo-router'
import { Socket } from 'socket.io-client';
import { newSocket } from '../utils/socket'


const Index = () => {

    // for sockets 
    const [socket, setSocket] = useState<Socket | null>(null);



    useEffect(() => {
        // Create a new socket.io-client instance when component mounts

        // Event listeners for socket.io events
        newSocket.on('connect', () => {
            console.log('Socket.io connection established');
        });


        newSocket.on('message', (message: string) => {
            console.log('Message received:', message);
            // setMessage(message);
        });

        newSocket.on('error', (error: Error) => {
            console.error('Socket.io error:', error);
        });

        newSocket.on('disconnect', () => {
            console.log('Socket.io connection closed');
        });

        // Save the socket.io-client instance to state
        setSocket(newSocket);

        // Cleanup function
        return () => {
            if (newSocket) {
                newSocket.close();
            }
        };
    }, []);



    // Function to send a message via socket.io
    const sendMessage = (msg: string) => {
        // console.log(msg);

        if (socket) {
            socket.emit('message', msg);
            console.log('Message sent:', msg);
        } else {
            console.error('Socket.io connection not established');
        }
    };


    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.text} > to Cards Game</Text>
            <Link href="/game" asChild >
                <Button title='Start Game' />
            </Link>
        </View>
    )
}

export default Index


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        display: "flex",
        gap: 20

    },
    text: {
        color: "white",
        fontWeight: "400",
        fontSize: 20

    },
    heading: {
        fontSize: 40,
        fontWeight: "600"

    }

})