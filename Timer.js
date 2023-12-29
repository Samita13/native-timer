import { StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import { useEffect, useState } from 'react';

export default function Timer() {
  const [play, setPlay] = useState(-1)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  useEffect(() =>{
    let interval;
    if(play === 1){
      interval = setInterval(()=>{
        setSec((time)=>{
          if(time === 59){
            setMin((minute) => minute+1)
            return 0
          } else{
            return time+1
          }
          
        })
      }, 1000)
    } else {
      clearInterval(interval)
      if(play === -1){
        setSec(0)
        setMin(0)
      } 
      
    }
    return ()=>{clearInterval(interval)}
  }, [play])

  const formatTime = (value) => value.toString().padStart(2, '0')

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.text}>
          Focus Time !
        </Text>
      </View>

      {/* counter */}
      <View style={{flex:3}}>
        <Progress.Circle size={300} 
          borderWidth={8}
          showsText={true} 
          formatText={()=> `${formatTime(min)}:${formatTime(sec)}`}
          textStyle={{color: "#fff", fontSize:50}} 
          color="#EBE598" 
        />
      </View>

      {/* buttons */}
      {
        play !== -1? 
          <View style={{flex:1, flexDirection: "row", gap: 50}}>
            <TouchableOpacity style={[styles.icon, {display: 'flex'}]} onPress={()=>setPlay(-1)}>
              <Icon name="stop" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.icon, {display: 'flex'}]}>
              <Icon name="pause" size={30} color="#fff"  onPress={()=> setPlay(play === 0 ? 1:0)}/>
            </TouchableOpacity>
          </View>
        :
        <View style={{flex:1, flexDirection: "row", gap: 50}}>
            <TouchableOpacity style={[styles.icon, {display: 'flex'}]} onPress={()=>setPlay(1)}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7A92',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
  },
  icon: {
    height: 70,
    borderRadius: 50, 
    padding: 20, 
    backgroundColor: "#C76778",
    opacity: 0.7,
  }
});