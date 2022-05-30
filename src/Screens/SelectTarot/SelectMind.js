import React from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity} from "react-native";
import CardArr from '../../components/CardArr';
import CustomButton from '../../../CustomButton';

function SelectMind({navigation}){

    function clickNext() {
        const randomId = Math.floor(Math.random()*63)+1;
        navigation.navigate('ResultMind', {setId: randomId});
    }

    return(
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>답을 얻고 싶은 질문을 떠올리면서{'\n'}신중하게 세 장을 뽑아보세요</Text>
            </View>
            <View style={styles.card}>
                <CardArr/>
                <View
                style={{bottom:100}}>
                    <CustomButton onPress={clickNext}>
                    </CustomButton> 
                    </View>
            </View>
        </View>
    );
}

export default SelectMind;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#030303",
    },
    textView:{
        flex:1.5,
        justifyContent:"flex-end",
        alignItems:"center",
    },text:{
        textAlign:"center",
        color:"white",
        fontSize:18,
    },
    card:{
        flex:5,
        
    },
    
});
