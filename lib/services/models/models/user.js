module.exports = function (baseModel, bookshelf) {
  return baseModel.extend({
    tableName: 'users'
  });
};
