const express =  require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//User model
const User = require('../../models/User');

//user login request
router.post("/", (req, res)=>{
    const {email, password} = req.body;

    //simple validation
    if (!email || !password) {
        return res.status(400).json({msg: "please enter all required fields"});
    }

    //check for existing users
    User.findOne({email: email}).then(user => {
        if(!user) return res.status(400).json({msg: "User does not exist"});

        //validate password
        bcryptjs.compare(password, user.password).then((isMatch) => {
            if(!isMatch) return res.status(400).json({msg: "Invalid Credentials"});

            jwt.sign(
                {id: user.id},
                config.get('escrosissecret'),
                {expiresIn: 3600},
                (err, token) => {
                    if(err) throw err;
                    return res.status(200).json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            account_balance: user.account_balance,
                            account_number: user.account_number,
                        },
                    });
                }
            )
        })
    });
});

module.exports = router;

// router.get('/user', )