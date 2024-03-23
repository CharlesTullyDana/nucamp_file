import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Text } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />

                <Text style={styles.text}>
                    1 Nucamp Way{'\n'}
                    Seattle, WA 98001{'\n'}

                    U.S.A. </Text>

                <Text style={styles.text}>
                    Phone: 1-206-555-1234
                </Text>

                <Text style={{marginBottom: 10}}>
                    Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>   
    );
};

const styles = StyleSheet.create({
    text: {
        marginBottom: 10
    }
});

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5637DD' }
    };
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
            />
        </Stack.Navigator>
    );
};

export default ContactNavigator;
