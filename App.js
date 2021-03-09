
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList,Modal } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import colors from './Colors';
import tempData from './Tempdata';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';


export default class App extends React.Component{
  
  state= {
    addTodoVisible:false
  };

  toggleAddTodoModal(){
    this.setState({addTodoVisible:!this.state.addTodoVisible})
  }

  renderList = list =>{
     return <TodoList list={list}/>
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible} 
          onRequestClose={() =>this.toggleAddTodoModal()}>
            <AddListModal closeModal={() => this.toggleAddTodoModal()}/>
        </Modal>
        <View style={{flexDirection:'row'}}>
          <View style={styles.divider}/>
          <Text style={styles.title}>
            Todo-<Text style={{fontWeight:"300", color:colors.blue}}>-List</Text>
          </Text>
          <View style={styles.divider}/>
        </View>

        <View style={{marginVertical:48}}>
          <TouchableOpacity style={styles.addList} onPress={()=>this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={24} color = {colors.blue}/>
          </TouchableOpacity>

          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height:275, }}>
          <FlatList 
            data={tempData} 
            keyExtractor={ item=>item.name} 
            horizontal={true} 
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> this.renderList(item)}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  divider:{
    backgroundColor:colors.blue,
    height:1,
    flex:1,
    alignSelf:'center'
  },
  title:{
    fontSize:38,
    fontWeight:'bold',
    color:colors.Black,
    paddingHorizontal:64
  },
  addList:{
    borderWidth:3,
    borderColor:colors.lightblue,
    borderRadius:40,
    padding:16,
    alignItems:'center',
    justifyContent:'center'
  },
  add:{
    color:colors.blue,
    fontWeight:'bold',
    fontSize:16,
    marginTop:8
  }
});
