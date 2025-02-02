const hre = require("hardhat");
require("dotenv").config();

const TOEKN_NAME = process.env.TOKEN_NAME;
const TOKEN_SYMBOL = process.env.TOKEN_SYMBOL;
const SOFT_CAP = process.env.SOFT_CAP;
const HARD_CAP = process.env.HARD_CAP;
const PRESALE_PRICE = process.env.PRESALE_PRICE;
const MAX_BUY_LIMIT = process.env.MAX_BUY_LIMIT;
const DELAY_BEFORE_START_TIME = process.env.DELAY_BEFORE_START_TIME;
const PRESALE_DURATION_TIME = process.env.PRESALE_DURATION_TIME;
