const userController = require("../controller/user");
const authenToken = require("../authentication/authen");

const router = (app) => {


    /**
     * @typedef UserRegister
     * @property {string} username.required -
     * @property {string} password.required -
     */
    /**
     * Login by username and password
     * @route POST /register
     * @param {UserRegister.model} point.body.required - the new point
     * @group User
     * @returns {object} 200 - accessToken, refreshToken
     * @returns {Error}  default - Unexpected error
     */

    app.post("/api/register", async (req, res, next) => {
        userController.register(req, res);
    })

    /**
     * @typedef UserLogin
     * @property {string} username.required -
     * @property {string} password.required -
     */
    /**
     * Login by username and password
     * @route POST /login
     * @param {UserLogin.model} point.body.required - the new point
     * @group User
     * @returns {object} 200 - id, username, accessToken, refreshToken
     * @returns {Error}  default - Unexpected error
     */

    app.post("/api/login", async (req, res, next) => {
        userController.login(req, res);
    })
    
    app.get("/", async (req, res, next) => {
        res.json({ message: "hello world" })
    })
    

    /**
     * Login by username and password
     * @route GET /test
     * @headers {string} Authorization and the security 
     * @security JWT
     * @group User
     * @returns {object} 200 - id, username, accessToken, refreshToken
     * @returns {Error}  default - Unexpected error
     */

    app.get("/api/test", authenToken ,async (req, res, next) => {
        res.json({ message: "hello world" })
    })

    /**
     * Login by username and password
     * @route GET /getAllDataUser
     * @headers {string} Authorization and the security 
     * @security JWT
     * @group User
     * @returns {object} 200 - id, username, accessToken, refreshToken
     * @returns {Error}  default - Unexpected error
     */

        app.get("/api/getAllDataUser", authenToken ,async (req, res, next) => {
            userController.takeAllDataUser(req, res);
        })

    /**
     * take all data of user
     * @route GET /getUserInfo
     * @headers {string} Authorization and the security 
     * @security JWT
     * @group User
     * @returns {object} 200 - name, nationality, phonenumber
     * @returns {Error}  default - Unexpected error
     */

     app.get("/api/getUserInfo", authenToken ,async (req, res, next) => {
        userController.getUserInfo(req, res);
    })

    /**
     * @typedef UserInfo
     * @property {number} phoneNumber.required -
     * @property {string} fullName.required -
     * @property {string} nationality.required -
     */
    /**
     * take all data of user
     * @route POST /setUserInfo
     * @headers {string} Authorization and the security 
     * @param {UserInfo.model} point.body.required - the new point
     * @security JWT
     * @group User
     * @returns {object} 200 - name, nationality, phonenumber
     * @returns {Error}  default - Unexpected error
     */

     app.post("/api/setUserInfo", authenToken ,async (req, res, next) => {
        userController.setUserInfo(req, res);
    })
}

module.exports = router;