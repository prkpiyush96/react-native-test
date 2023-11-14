import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IOption } from '../Types';
import { GET } from '../Services/APIService';
import { URL_OBJ } from '../Utils/constants';
import { useState } from 'react';

const Options = ({ options, id }: { options: Array<IOption>; id: number }) => {
    const [correctOption, setCorrectOption] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleAnswer = async (selectedId: string) => {
        const res = await GET(`${URL_OBJ.REVEAL_ANSWER}${id}`);
        setCorrectOption(res.correct_options[0].id);
        setSelectedOption(selectedId);
    };

    const correctStyle = {
        backgroundColor: '#28B18F',
    };

    const incorrectStyle = {
        backgroundColor: '#dc5f5fb3',
    };

    return (
        <View style={styles.container}>
            {options?.map(({ answer, id }) => {
                const isSelectedOption = id === selectedOption;
                const isCorrect = id === correctOption;
                const style = isSelectedOption && !isCorrect ? incorrectStyle : {};

                return (
                    <TouchableOpacity
                        key={id}
                        style={[styles.optionBtn, style, isCorrect ? correctStyle : {}]}
                        disabled={!!selectedOption}
                        onPress={() => handleAnswer(id)}>
                        <Text style={styles.optionText}>{answer}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 24,
        justifyContent: 'flex-end',
        marginBottom: 24,
    },
    optionBtn: {
        backgroundColor: '#ffffff80',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        maxWidth: '85%',
    },
    optionText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
        textShadowColor: '#00000073',
        textShadowOffset: {
            height: 2,
            width: 2,
        },
        textShadowRadius: 2,
    },
});

export default Options;
