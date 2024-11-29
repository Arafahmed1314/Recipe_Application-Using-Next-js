const getCategoryCounts = (recipes) => {
    const categoryCounts = {};

    recipes.forEach(recipe => {
        const categoryId = recipe.category_id;
        if (categoryCounts[categoryId]) {
            categoryCounts[categoryId] += 1;
        } else {
            categoryCounts[categoryId] = 1;
        }
    });

    return categoryCounts;
};

// Step 2: Sort the categories by the number of recipes
export const getPopularCategories = (category, recipes) => {
    const categoryCounts = getCategoryCounts(recipes);

    // Get the categories with their recipe counts
    const categoriesWithCounts = category.map(cat => ({
        ...cat,
        recipe_count: categoryCounts[cat.id] || 0
    }));

    // Sort categories by recipe_count in descending order
    categoriesWithCounts.sort((a, b) => b.recipe_count - a.recipe_count);

    // Return top 6 or 8 categories
    return categoriesWithCounts.slice(0, 6);  // Adjust number as needed
};
