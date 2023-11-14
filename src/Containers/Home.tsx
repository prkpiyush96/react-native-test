import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { URL_OBJ } from '../Utils/constants';
import ForYou from '../Components/ForYou';

const Home = () => {
    const [urlList, setUrlList] = useState([
        URL_OBJ.FOR_YOU,
        URL_OBJ.FOR_YOU,
        URL_OBJ.FOR_YOU,
    ]);

    const handleAddImage = (index: number) => {
        if (index >= urlList.length - 1)
            setUrlList(prevList => [...prevList, URL_OBJ.FOR_YOU]);
    };

    return (
        <View style={styles.container}>
            <Swiper
                onIndexChanged={handleAddImage}
                showsPagination={false}
                horizontal={false}
                loop={false}>
                {urlList?.map((url, idx) => (
                    <ForYou key={idx} url={url} />
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
});

export default Home;
