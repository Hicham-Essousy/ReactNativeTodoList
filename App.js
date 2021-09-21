import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, TouchableOpacityBase } from 'react-native';import  Task  from './components/Task';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);
  const handlAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  const completTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      
      <View style={styles.tasksBack}> 
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
      

      <View style={styles.items}>
        {/* <Task text={'text1'}/>
        <Task text={'text2'}/> */}
        {
          taskItems.map((item, index) => {
            return <TouchableOpacity  key={index}  onPress={() => completTask(index) }>
              <Task text={item} />
            </TouchableOpacity>
          })
        }
      </View>
      </View>
      </ScrollView>  
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handlAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E8EAED',
  },
  tasksBack: {
    paddingTop:90,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  items:{
    paddingHorizontal:20,
    marginTop:20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addtask:{
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
