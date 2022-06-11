const CategoryModel = require('./categoryModel');

exports.getAllCategory = async () => {
    const categories = await CategoryModel.find({});
    return categories;
}

exports.getOneCategory = async (categoryID) => {
    const category = await CategoryModel.findOne({ categoryID });
    return category;
}

exports.createCategory = async (body) => {
    const { categoryName } = body;
    const categories = await CategoryModel.find({});
    const categoryID = (+categories[categories.length - 1].categoryID + 1) + '';

    const data = {
        categoryID,
        categoryName
    };
    const category = await CategoryModel.create(data);

    return category;
}

exports.updateCategory = async (categoryID, body) => {
    const { categoryName } = body;
    const data = {
        categoryID,
        categoryName
    };
    const categoryUpdated = await CategoryModel.updateOne({ categoryID }, data);

    return categoryUpdated;
}

exports.deleteCategory = async (categoryID) => {
    const categoryDeleted = await CategoryModel.deleteOne({ categoryID });
    return categoryDeleted;
}