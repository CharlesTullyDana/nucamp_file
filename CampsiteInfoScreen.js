import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Rating, Input } from 'react-native-elements';
import RenderCampsite from '../features/campsites/RenderCampsite';
const CampsiteInfoScreen = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const newComment = {
      author,
      rating,
      text,
      campsiteId: props.campsiteId
    };
    console.log(newComment);
    setShowModal(!showModal);
  };

  const resetForm = () => {
    setRating(5);
    setAuthor('');
    setText('');
  };

  return (
    <>
      <View>
        <RenderCampsite
          campsite={props}
          onShowModal={() => setShowModal(!showModal)}
        />
          
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
          >

            <View style={styles.modal}>
              <Rating
                showRating
                startingValue={rating}
                imageSize={40}
                onFinishRating={(rating) => setRating(rating)}
                style={{ paddingVertical: 10 }}
              />
              <Input
                placeholder='Author'
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                leftIconContainerStyle={{ paddingRight: 10 }}
                onChangeText={(author) => setAuthor(author)}
                value={author}
              />
              <Input
                placeholder='Comment'
                leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                leftIconContainerStyle={{ paddingRight: 10 }}
                onChangeText={(text) => setText(text)}
                value={text}
              />
              <View style={{ margin: 10 }}>
                <Button
                  onPress={() => {
                    handleSubmit();
                    resetForm();
                  }}
                  title='Submit'
                  color='#5637DD'
                />
              </View>
              <Button
                onPress={() => {
                  setShowModal(!showModal);
                  resetForm();
                }}
                title='Cancel'
                color='#808080'
              />
            </View>
          </Modal>
        </View>
      
    </>
  );
};

const styles = {
  modal: {
    justifyContent: 'center',
    margin: 20
  }
};

export default CampsiteInfoScreen;
