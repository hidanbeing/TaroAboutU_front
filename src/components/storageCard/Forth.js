import React ,{useContext}from 'react';
import {Platform, Pressable, StyleSheet, Text,View,Image} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';
import LogContext from '../../contexts/LogContext';

function Forth({currentDate, isExist}) {
  
  const navigation = useNavigation();
  const date = format(new Date(), 'yyyy-MM-dd');
  const {invenMind} = useContext(LogContext);
  

  const filteredLogs = invenMind.filter(
      () => currentDate===date,
  );
  
  const onPress = () => {
    navigation.navigate('ResultMind_inven',{
      currentDate,
      date,    
    });
  };
  return (
    isExist &&
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
          <View style={styles.view}>
      <Text style={styles.title}>마음 타로</Text>
      <Image source={require('../../img/Linewhite.png')}/>
      <Image source={require('../../img/pop.png')} style={styles.img}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    block: {
      backgroundColor: '#030303',
      paddingHorizontal: 14,
      paddingVertical: 17,
      borderColor:"white",
      borderWidth:1,
      marginBottom:25,
      flexDirection:"row",
      width:300,
      height:110,
      justifyContent:"center",
      alignItems:"center",
    },
    view:{
        flexDirection:"column",
        alignItems:"center",
    },
    title: {
      marginTop:8,
      color:"white",
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      
    },
    img:{
        marginTop:5,
        width:40,
        height:40,
    }
  });

export default Forth;
