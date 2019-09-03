import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "265babe8f59b6fd51abba483ded61373";

export default class extends React.Component {

  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, 
      temp: data.main.temp, 
      condition: data.weather[0].main
    });
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // Send to API and get weather
    } catch (error){
      Alert.alert("Can't find you.", "So sad");

    }
  }
  
  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
    }
}

