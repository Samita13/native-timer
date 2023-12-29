import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './Timer';

const Stack = createNativeStackNavigator();

function Home({navigation}){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("Timer")}>
        <Text style={styles.text}>Start Timer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Timer" component={Timer}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
     container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF7A92'

     },
     text: {
      fontSize: 20
     }
});