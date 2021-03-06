import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTap';
import WriteScreen from './WriteScreen';
import TypeOfTaro from './TypeOfTaro';

import SelectLove from './SelectTarot/SelectLove';
import SelectMind from './SelectTarot/SelectMind';
import SelectTodayTarot from './SelectTarot/SelectTodayTarot';
import SelectYesOrNo from './SelectTarot/SelectYesOrNo';

import ResultLove_inven from './ResultTarot/ResultLove_inven';
import ResultMind_inven from './ResultTarot/ResultMind_inven';
import ResultTodayTarot_inven from './ResultTarot/ResultTodayTarot_inven';
import ResultYesOrNo_inven from './ResultTarot/ResultYesOrNo_inven';

import ResultLove from './ResultTarot/ResultLove';
import ResultMind from './ResultTarot/ResultMind';
import ResultTodayTarot from './ResultTarot/ResultTodayTarot';
import ResultYesOrNo from './ResultTarot/ResultYesOrNo';

import WriteScreen2 from './WriteScreen2';
import WriteScreen3 from './WriteScreen3';
import LoginPage from './LoginPage';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{headerShown: false}}
    />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write2"
        component={WriteScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write3"
        component={WriteScreen3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TypeOfTaro"
        component={TypeOfTaro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectLove"
        component={SelectLove}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectMind"
        component={SelectMind}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectTodayTarot"
        component={SelectTodayTarot}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectYesOrNo"
        component={SelectYesOrNo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultLove"
        component={ResultLove}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultMind"
        component={ResultMind}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultYesOrNo"
        component={ResultYesOrNo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultTodayTarot"
        component={ResultTodayTarot}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultLove_inven"
        component={ResultLove_inven}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultMind_inven"
        component={ResultMind_inven}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultYesOrNo_inven"
        component={ResultYesOrNo_inven}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultTodayTarot_inven"
        component={ResultTodayTarot_inven}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

export default RootStack;