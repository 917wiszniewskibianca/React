import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {RecipeContext} from './RecipeContext';

const AddRecipeScreen = ({navigation}) => {
  const {addRecipe} = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    information: '',
    instructions: '',
  });

  const handleSave = () => {
    addRecipe(newRecipe);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput
        placeholder="Title"
        value={newRecipe.title}
        onChangeText={text => setNewRecipe({...newRecipe, title: text})}
        style={styles.input}
      />
      <Text>Calories:</Text>
      <TextInput
        placeholder="Caloric Information"
        value={newRecipe.information}
        onChangeText={text => setNewRecipe({...newRecipe, information: text})}
        style={styles.input}
      />
      <Text>Instructions:</Text>
      <TextInput
        placeholder="Instructions"
        value={newRecipe.instructions}
        onChangeText={text => setNewRecipe({...newRecipe, instructions: text})}
        style={[styles.input, {height: 100}]}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
});

export default AddRecipeScreen;
