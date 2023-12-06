import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// note that any screen registered as a Stack screen in the App.js gets a couple of props
// that can be used:  'navigation' and 'route'. So, this is where the 'route' prop is coming
// from even though you don't see it explicitly passed down.  See 'react-navigation' documentation
// for more info on properties that accompany these props.
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
