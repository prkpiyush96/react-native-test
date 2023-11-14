import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

import { GET } from '../Services/APIService';
import { IForYouData } from '../Types';
import MCQBody from '../Components/MCQBody';
import { URL_OBJ } from '../Utils/constants';

const Home = () => {
    const [forYouData, setForYouData] = useState<IForYouData>();
    const [loading, setLoading] = useState(true);

    const getForYouData = async () => {
        const res = await GET(URL_OBJ.FOR_YOU);
        setForYouData(res);
        setLoading(false);
    };

    useEffect(() => {
        getForYouData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MCQBody data={forYouData} />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    }
});

export default Home;
