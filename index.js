const express = require("express");
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin:CIYitp18317@node50122-pawat.proen.app.ruk-com.cloud:11541/Books'

const sequelize = new Sequelize(dbUrl);