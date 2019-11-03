import React from 'react';
import { View, Button, Image, Text, TouchableHighlight } from 'react-native';


const getNewTag = () => {
    return <View
        style={
            {
                position: "absolute",
                top: -8,
                left: -8,
                //backgroundColor:'#FFD700',
                //color: 'white',
                //border: '1px solid red',
                //borderRadius: 500,
                //zIndex: 10000
            }
        }
    >
        <Image resizeMode="contain" style={{ width: 35, height: 35 }} source={require('./new.png')} />
    </View>;

}


const Card = (props) => {
    //alert(props.source);
    //return <Text style={{width:'100%',height:100}}>Hello</Text>;
    return (
        <TouchableHighlight
            onPress={() => props.clicked(props.data.url)}
            underlayColor="#eeeeee"
            style={
                {
                    width: '32%',
                    borderRadius: 5,
                    margin: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: 5,
                    borderColor: "rgba(0,0,0,.1)",
                    borderWidth: 1,
                }
            }>
            <View
                style={
                    {
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        position: "relative",
                    }
                }
            >
                {
                    props.data.isnew ? getNewTag():null
                }
                <View
                style={
                    {
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                    }
                }                
                >
                <Image resizeMode="contain" style={{ width: 50, height: 50 }} source={{ uri: props.data.source }} />
                <Text style={
                    {
                        color: 'black',
                        width: '100%',
                        textAlign: 'center',
                        paddingTop: 5
                    }
                } >{props.data.title} </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}


export default Card;


