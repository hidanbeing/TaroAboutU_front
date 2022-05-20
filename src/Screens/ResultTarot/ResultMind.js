import React,{useContext} from 'react';
import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogContext from '../../contexts/LogContext';

function ResultMind({navigation}){
    const invenMind=useContext(LogContext);
    const card1Title = "Mind Card";
    const card1Img = require("../../img/card.png");
    const card2Title = "Mind Card";
    const card2Img = require("../../img/card.png");
    const card3Title = "Mind Card";
    const card3Img = require("../../img/card.png");
    const cardText = 'Mind cardText';
    const date = new Date();
    const {invenMindCreate} = useContext(LogContext);
    const onSave = () => {
        invenMindCreate({
            card1Title,
            card2Img,
            card2Title,
            card3Img,
            card3Title,
            card1Img,cardText,
            date
        });
        navigation.navigate('MainTab');
    };
    return(
        <View style={styles.container}>
            
            <ImageBackground source={require('../../img/background.png')} style={{width:"100%",height:"102%",top:-10}}>
            <View style={{flex:0.2}}></View>
            <ScrollView style={{flex:2}}>
                <View style={styles.result}>
                <Text style={{color:"blanchedalmond",left:-20,fontSize:30,marginBottom:20}}>마음 타로</Text>
                    <View>
                    <Text style={{color:"white", fontSize:23,left:-20}}>{card1Title}</Text>
                    <Image source={card1Img} style={styles.cardImg}/>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{card2Title}</Text>
                        <Image source={card2Img} style={styles.cardImg}/>
                        </View>
                        <View style={{width:15}}></View>
                        <View>
                        <Text style={{color:"white", fontSize:23,left:-20}}>{card3Title}</Text>
                        <Image source={card3Img} style={styles.cardImg}/>
                        </View>
                    </View>
                </View>
                
                <View style={styles.resulttext}><Text
                style={{color:"white", width:300, fontSize:15}}>{cardText}
            </Text>
            
            </View>
            <View style={{alignItems:"center",flex:1}}>
                <TouchableOpacity onPress={()=> {navigation.navigate('Write2')}}><View style={styles.goTab}><Image source={require('../../img/iconDiary.png')}/><Text style={styles.gotext}>타로 다이어리 쓰기</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={onSave}><View style={styles.goTab}><Icon name="inventory" size={24} style={{color:"white"}}/><Text style={styles.gotext}>보관함에 저장하기</Text></View></TouchableOpacity>
            </View>
            </ScrollView>
            <View style={{flex:0.2}}></View>
            </ImageBackground>
        </View>
    );
}

export default ResultMind;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    result:{
        flex:2,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        left:18,
       
    },
    cardImg:{
        width:100,
        height:190,
        
    },
    resulttext:{
        flex:4,
        alignItems:"center",
        marginTop:20,
        marginBottom:30,
        
    },
    goTab:{

        borderColor:"white",
        borderWidth:1,
        borderRadius:5,
        marginBottom:15,
        width:180,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    gotext:{
        color:"white",
        paddingLeft:10,
    }
    
    
});