import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading.js";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async() =>{
    state = {
      isLoading: true
    }
    try{
      await Location.requestForegroundPermissionsAsync();
      
      const { 
        coords:{ latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false})
  
    } catch(error){
      Alert.alert("Can't find you", "So sad");
    }
    
  };
  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    const { isLoading } = this.state;  
    return isLoading ? <Loading /> : null;
  }
}