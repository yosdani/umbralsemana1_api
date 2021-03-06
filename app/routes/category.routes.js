const { authJwt } = require("../middleware");
const controller = require("../controllers/category.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/createCategory",
         [authJwt.verifyToken,authJwt.isAdmin],

       
    );

    app.post(
        "/api/updateCategory",
        [authJwt.verifyToken,authJwt.isAdmin],
        [
            controller.updateCategory

        ]
    );
};
