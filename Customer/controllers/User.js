const {
    createCustomer,
    signToken,
    getId,
    checkUsername,
    CheckPassword
} = require('../services/User')

const signup = async (req, res) => {
    await createCustomer(req);
    let customerId = await getId(req.body.username);
    let token = signToken(req.body, customerId);
    res.cookie('AuthToken', token, { httpOnly: true })
    return;
}

const login = (req, res) => {
    let user = checkUsername(req);
    if (!user === undefined) {
        let pass = CheckPassword(req)
        if (!pass === undefined) {
            let customerId = getId(req.body.username);
            let token = signToken(req.body, customerId);
            res.cookie('AuthToken', token, { httpOnly: true })
            return;
        }
    }
}

const profile = (req, res) => {

}

module.exports = {
    signup,
    login,
    profile
}