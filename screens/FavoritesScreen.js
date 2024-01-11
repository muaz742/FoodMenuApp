import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from "react-redux";
import MealItem from "../components/MealItem";
import {MEALS} from "../data/dummy-data";

function FavoritesScreen() {
    const favorites = useSelector((state) => state.foodMenu.favorites);

    const displayedMeals = MEALS.filter((mealItem) => {
        return favorites.includes(mealItem.id);
    });

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
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

export default FavoritesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
