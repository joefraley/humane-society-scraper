#!/usr/bin/env node
'use strict'


const firebase = require(`firebase`)
const CONFIG = require(`./config.firebase.json`)


const app = firebase.initializeApp(CONFIG)
const database = app.database()
const auth = app.auth()


auth.signInWithEmailAndPassword(CONFIG.email, CONFIG.password)
    .catch(console.error)


module.exports = 
    { app 
    , auth 
    , database 
    }