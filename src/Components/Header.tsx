import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMinutes(mins => mins + 1);
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <View style={styles.timerContainer}>
                <FAIcon name="clock" size={20} color="#ffffff99" />
                <Text style={styles.timerText}>{minutes}m</Text>
            </View>
            <Text style={styles.mainText}>For You</Text>
            <FAIcon name="search" size={20} color="#fff" />
        </>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    timerText: {
        color: '#ffffff99',
        marginLeft: 4,
    },
    mainText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22,
        borderBottomColor: '#fff',
        borderBottomWidth: 4,
    },
});

export default Header;
