import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task = (props) =>{
    return(
        <View style = {styles.item}>
            <View style = {styles.leftItem}>
                <View style={styles.square}></View>
                <Text> {props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding:15,
        borderRadius:15,
        flexDirection:'row',
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    leftItem: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:"wrap",
        
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#62F394",
        opacity: 0.6,
        marginRight:15,
        borderRadius:7,
        
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#62F394',
        borderWidth:2,
        borderRadius:5
    }
});

export default Task;