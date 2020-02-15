const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Sin Autorización');
    res.redirect('/users/signin');
}

module.exports = helpers;