export const getTopCategories = (dataSet1, dataSet2) => {
    // Sort dataSet1 by published_date in descending order
    const sortedData = dataSet1.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));

    // Get the top 4 most recent recipes
    const topRecipes = sortedData.slice(0, 4);

    // Extract the category_id from the top 4 recipes and find matching categories
    const topCategoryIds = topRecipes.map(item => item.category_id);
    const topCategories = dataSet2.filter(cat => topCategoryIds.includes(cat.id));

    return topCategories;
};