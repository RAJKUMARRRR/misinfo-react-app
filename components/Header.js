import React from 'react';
import { Text, View } from 'react-native';



const HeaderComp = (props) => {
    return (
        <View style={{
            elevation: 5,
            width:'100%',
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
         }}>
            <Text style={{
                fontFamily: 'Pacifico',
                color: '#2196f3',
                fontSize: 35
            }}>
                {props.title}
            </Text>
        </View>
    );
}


export default HeaderComp;