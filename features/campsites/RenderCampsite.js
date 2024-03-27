import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Import StyleSheet
import { Icon } from 'react-native-elements';

function RenderCampsite(props) {
 
 
 
 
 
  return (
    <View style={styles.cardRow}
    >
      <Icon
        name={props.favorite ? 'heart' : 'heart-o'}
        type='font-awesome'
        color='#f50'
        raised
        reverse
        onPress={() => props.onFavoritePress}
      />
      <Icon
        name='pencil'
        type='font-awesome'
        color='#5637DD'
        raised
        reverse
        onPress={() => props.onShowModal()}
      />
      <Text style={styles.cardText}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ // Use StyleSheet.create for defining styles
  cardRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  cardText: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
});

export default  RenderCampsite ;
