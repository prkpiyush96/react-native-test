import React, { useEffect, useState } from "react";
import { GET } from "../Services/APIService";
import { IForYouData } from "../Types";
import { URL_OBJ } from "../Utils/constants";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import MCQBody from "./MCQBody";

const ForYou = ({ url }: { url: string }) => {
    const [forYouData, setForYouData] = useState<IForYouData>();
    const [loading, setLoading] = useState(true);

    const getForYouData = async () => {
        const res = await GET(url);
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
        <View style={{ flex: 1, height: '100%' }}>
            <MCQBody data={forYouData} />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ForYou;