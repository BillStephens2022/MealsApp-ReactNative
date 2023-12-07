import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

// note that any screen registered as a Stack screen in the App.js gets a couple of props
// that can be used:  'navigation' and 'route'. So, this is where the 'route' prop is coming
// from even though you don't see it explicitly passed down.  See 'react-navigation' documentation
// for more info on properties that accompany these props.
function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
