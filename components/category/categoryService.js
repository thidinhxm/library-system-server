const CategoryModel = require('./categoryModel');

exports.getAllCategory = async () => {
    const categories = await CategoryModel.find({});
    return categories;
}

exports.getCategoryByID = async (categoryID) => {
    const category = await CategoryModel.findOne({ categoryID });
    return category;
}

exports.createCategory = async (categoryObj) => {
    const categories = await CategoryModel.find({});
    const categoryID = (categories.length === 0) ? '1' : ((+categories[categories.length - 1].categoryID + 1) + '');

    categoryObj = {
        categoryID,
        ...categoryObj
    }
    const category = await CategoryModel.create(categoryObj);

    return category;
}

exports.updateCategory = async (categoryID, categoryObj) => {
    categoryObj = {
        categoryID,
        ...categoryObj
    }
    const categoryUpdated = await CategoryModel.updateOne({ categoryID }, categoryObj);

    return categoryUpdated;
}

exports.deleteCategory = async (categoryID) => {
    const categoryDeleted = await CategoryModel.deleteOne({ categoryID });
    return categoryDeleted;
}
