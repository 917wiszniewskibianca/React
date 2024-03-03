import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {RecipeContext} from './RecipeContext';

const MainPage = ({navigation}) => {
  const {recipes, deleteRecipe} = useContext(RecipeContext); // way to pass the props

  const handleNavigateToAddRecipe = () => {
    navigation.navigate('AddRecipe');
  };
  const handleNavigateToUpdateRecipe = recipe_id => {
    navigation.navigate('UpdateRecipe', {id: recipe_id});
  };

  const handleDeleteRecipe = id => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deleteRecipe(id),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => (
          <View style={styles.recipeContainer} key={item.id}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <View key={item.id} style={styles.buttonsContainer}>
              <Button
                title="Update"
                onPress={() => handleNavigateToUpdateRecipe(item.id)}
              />
              <Button
                title="Delete"
                onPress={() => handleDeleteRecipe(item.id)}
              />
            </View>
          </View>
        )}
      />
      <Button title="Add New Recipe" onPress={handleNavigateToAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  recipeContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default MainPage;
