import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { IForYouData } from '../Types';
import Header from './Header';
import Options from './Options';

const dummyData = {
    likes: {
        icon: 'heart',
        value: 23,
    },
    comments: {
        icon: 'comments',
        value: 10,
    },
    saves: {
        icon: 'save',
        value: 4,
    },
    shares: {
        icon: 'share',
        value: 7,
    },
};

const MCQBody = ({ data }: { data?: IForYouData }) => {

    if (!data) return null;

    return (
        <ImageBackground
            style={styles.image}
            resizeMode="cover"
            source={{ uri: data?.image }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                }}>
                <Header />
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.bodyLeft}>
                    <View style={{ flexGrow: 1, paddingVertical: 40 }}>
                        <Text style={styles.question}>{data?.question}</Text>
                    </View>

                    <Options options={data?.options} id={data?.id} />

                    <View>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                            {data?.user?.name}
                        </Text>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                            {data?.description}
                        </Text>
                    </View>
                </View>

                <View style={styles.bodyRight}>
                    <FAIcon name="scroll" size={20} color="orange" />
                    {Object.values(dummyData)?.map(({ icon, value }) => {
                        return (
                            <View key={icon} style={{ marginTop: 15, alignItems: 'center' }}>
                                <FAIcon name={icon} size={20} color="#fff" />
                                <Text style={{ color: '#fff' }}>{value}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#161616',
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <MaterialIcon
                        name="play-box-multiple-outline"
                        size={20}
                        color="#fff"
                    />
                    <Text style={{ color: 'white', marginLeft: 4 }}>
                        Playlist: {data?.playlist}
                    </Text>
                </View>
                <View>
                    <FAIcon name="caret-right" size={20} color="#fff" />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'space-between',
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        paddingLeft: 16,
        paddingRight: 8,
        marginBottom: 16,
    },
    bodyLeft: {
        flexGrow: 2,
    },
    bodyRight: {
        minWidth: 20,
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 4,
    },
    question: {
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.7,
        fontSize: 22,
        lineHeight: 46.25,
        fontFamily: 'SF Pro Rounded',
        fontWeight: '500',
        maxWidth: '85%',
        paddingHorizontal: 8,
    }
});

export default MCQBody;
