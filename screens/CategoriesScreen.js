import { StyleSheet, View, FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {
    function pressHandler() {
      // note that the 2nd parameter being passed in the navigate method is a params object,
      // which is passed down to the MealsOverviewScreen and can be accessed as route.params
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      });
    }
  
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({

});
