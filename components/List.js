import React from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
    main: {
        height: '85%',
        paddingBottom: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderRadius:15,
        marginLeft: 10,
        marginRight: 10,
        elevation: 5,
        padding: 8,
    },
    cardcontainer: {
        // height: '100%',
        //       marginBottom:100,
    }
});

const ListComp = (props) => {
    return <View style={styles.main}><FlatList
        data={props.data}
        renderItem={(item) => (<Card key={item.item._id} data={item.item} clicked={props.onListItemClick} />)}
        keyExtractor={(item, index) => item._id}
        numColumns={3}
        contentContainerStyle={styles.cardcontainer}
    />
    </View>
        ;
    /* return (
         <View style={
             {
                 height: '100%',
                 backgroundColor: 'white',
                 borderTopLeftRadius: 15,
                 borderTopRightRadius: 15,
                 marginLeft: 10,
                 marginRight: 10,
                 elevation: 5,
                 padding: 8,
             }
         }>
             <FlatList
                 data={props.data}
                 renderItem={(item) => {
                     return <Card data={item.item} clicked={props.onListItemClick}/>
                   }}
                 numColumns={3}
                 keyExtractor={(item, index) => item._id}
                 contentContainerStyle={styles.cardcontainer}
             />
         </View>
     );
     */
}



export default ListComp;