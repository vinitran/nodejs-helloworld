const NFTInfo = require("../controller/NFT");
// const authenToken = require("../authentication/authen");

const router = (app) => {

    /**
     * @typedef NFTInfo
     * @property {number} id -
     * @property {string} imageURL -
     */
    /**
     * take all data of user
     * @route POST /setUserInfo
     * @headers {string} Authorization and the security 
     * @param {NFTInfo.model} point.body.required - the new point
     * @security JWT
     * @group User
     * @returns {object} 200 - name, nationality, phonenumber
     * @returns {Error}  default - Unexpected error
     */

    app.post("/api/nft/mint",async (req, res, next) => {
        NFTInfo.init(req, res);
    })

    app.get("/api/nft/:id",async (req, res, next) => {
        NFTInfo.a(req, res);
    })
    
}

module.exports = router;