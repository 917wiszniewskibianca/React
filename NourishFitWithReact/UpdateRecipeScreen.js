import React, {useContext, useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {RecipeContext} from './RecipeContext';

const UpdateRecipeScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {recipes, updateRecipe} = useContext(RecipeContext);
  const selectedRecipe = recipes.find(recipe => recipe.id === id);
  const [updatedRecipe, setUpdatedRecipe] = useState(selectedRecipe);

  useEffect(() => {
    // If the selectedRecipe changes externally, update the state
    setUpdatedRecipe(
      selectedRecipe || {
        title: '',
        information: '',
        instructions: '',
      },
    );
  }, [selectedRecipe]);

  const handleUpdate = () => {
    updateRecipe(id, updatedRecipe);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput
        placeholder="Title"
        value={updatedRecipe.title}
        onChangeText={text => setUpdatedRecipe({...updatedRecipe, title: text})}
        style={styles.input}
      />
      <Text>Calories:</Text>
      <TextInput
        placeholder="Caloric Information"
        value={updatedRecipe.caloric_information}
        onChangeText={text =>
          setUpdatedRecipe({...updatedRecipe, caloric_information: text})
        }
        style={styles.input}
      />
      <Text>Instructions:</Text>
      <TextInput
        placeholder="Instructions"
        value={updatedRecipe.instructions}
        onChangeText={text =>
          setUpdatedRecipe({...updatedRecipe, instructions: text})
        }
        style={[styles.input, {height: 100}]}
        multiline
      />
      <Button title="Update Recipe" onPress={handleUpdate} />
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

export default UpdateRecipeScreen;
