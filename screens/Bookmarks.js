import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Bookmarks = () => {
  const bookmarkedRecipes = [
    { id: '1', name: 'Bookmark Recipe 1', ingredients: 'Ingredient 1, Ingredient 2', process: 'Step 1, Step 2' },
    { id: '2', name: 'Bookmark Recipe 2', ingredients: 'Ingredient 1, Ingredient 2', process: 'Step 1, Step 2' },
    { id: '3', name: 'Bookmark Recipe 3', ingredients: 'Ingredient 1, Ingredient 2', process: 'Step 1, Step 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bookmarks</Text>
      <Text style={styles.subheading}>Your saved recipes</Text>
      <FlatList
        data={bookmarkedRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recipeCard}>
            <Text style={styles.recipeName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Black background
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: 'white', // White text color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: 'white', // White text color
    marginBottom: 20,
  },
  recipeCard: {
    backgroundColor: '#333333', // Dark gray for recipe cards
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  recipeName: {
    fontSize: 16,
    color: 'white', // White text color
  },
});

export default Bookmarks;
