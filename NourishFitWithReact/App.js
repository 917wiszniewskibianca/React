// Import necessary components and screens
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './MainPage';
import AddRecipeScreen from './AddRecipeScreen';
import UpdateRecipeScreen from './UpdateRecipeScreen'; // Assuming you have this screen
import {RecipeProvider} from './RecipeContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
          <Stack.Screen name="UpdateRecipe" component={UpdateRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
};

export default App;
