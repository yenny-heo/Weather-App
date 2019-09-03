import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Mist: {
        iconName: "weather-fog",
        gradient: ["#c0c0aa","#1cefff"],
        title:"Mist",
        subtitle:"You don't need to spray face mist today 👏"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#B993D6", "#8CA6DB"], 
        title:"Haze",
        subtitle:"Memory is so hazy"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#c0392b","#8e44ad"], 
        title:"Thunderstorm in the house",
        subtitle:"Outside of house"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#43C6AC", "#F8FFAE"], 
        title:"Drizzle",
        subtitle:"이슬비 내리는 이른아침에~ 🌙"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#159957", "#155799"], 
        title:"Rain",
        subtitle:"비가 내리는 날에는 \n나를 생각해줘요\n\n feat.우산☂"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#83a4d4", "#b6fbff"], 
        title:"Snow",
        subtitle:"Do you wanna build a snowman? ☃"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#3E5151", "#DECBA4"], 
        title:"Dusty",
        subtitle:"fuck you China 🖕"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#0052D4", "#9CECFB"], 
        title:"Sunny",
        subtitle:"맑아. 맑아서 싫어."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#4B79A1", "#283E51"], 
        title:"Cloudy",
        subtitle:"오늘 날씨: 흐림 \n차라리 비가왔으면 좋겠다"
    }
}

export default function Weather(props) {
    return (
        <LinearGradient
            colors={weatherOptions[props.condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={100}
                    name={weatherOptions[props.condition].iconName}
                    color="white"
                ></MaterialCommunityIcons>
                <Text style={styles.temp}>{props.temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[props.condition].title}</Text>
                <Text style={styles.subtItle}>{weatherOptions[props.condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Haze",
        "Dust",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 45,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize: 45,
        fontWeight: "300",
        color:"white",
        marginBottom: 10
    },
    subtItle:{
        fontSize: 23, 
        fontWeight: "600",
        color:"white",
    },
    textContainer: {
        paddingHorizontal: 50,
        alignItems: "flex-start"

    }
})