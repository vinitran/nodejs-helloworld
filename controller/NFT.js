const NFT = require('../models/NFT');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require("jsonwebtoken");

const init = async (req, res) => {
    const nft = req.body;
    await NFT.create({
        id: nft.id,
        imageURL: nft.imageURL,
        name: nft.name,
        description: nft.description
    });
    return res.json({message: nft.id});
}

const a = async (req, res) => {
    let nftInfor = await NFT.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json(nftInfor);
}

var NFTInfo = {
    init,
    a,
}
module.exports = NFTInfo;