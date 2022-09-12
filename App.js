import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

    const addItem = () => {
        setList([...list, item]);
    }

    const clearList = () => {
        setList([]);
    }
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="default"
                style={styles.textInput}
                onChangeText={item => setItem(item)} value={item}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                    style={styles.button}
                    onPress={addItem}>
                    <Text style={styles.text}>Add</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={clearList}>
                    <Text style={styles.text}>Clear</Text>
                </Pressable>
            </View>
            <Text style={styles.listTitle}>Shopping List</Text>
            <View style={styles.list}>
                <FlatList
                    data={list}
                    renderItem={({item}) => <Text style={styles.result}>{item}</Text>}
                />
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 44,
        paddingBottom: 11,
    },
    textInput: {
        borderColor: "#000",
        height: 44,
        marginTop: 11,
        marginBottom: 5,
        width: 200,
        borderWidth: 1
    },
    result: {
        paddingVertical: 5,
        fontSize: 16
    },
    button: {
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginTop: 11,
        backgroundColor: 'lightblue',
        marginHorizontal: 11
    },
    list: {
        borderColor: "black",
        borderWidth: 1,
        width: 200,
        flex: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    listTitle: {
        fontSize: 18,
        color: "blue",
    }
});
