
module.exports = function(app, sequelize) {
    require(__dirname + '/user/index')(app, sequelize);
};
