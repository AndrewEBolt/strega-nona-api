const postRoutes = require('./post_routes');

module.exports = function(app, db) {
	postRoutes(app, db);
};
