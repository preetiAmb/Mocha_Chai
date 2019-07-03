function AuthController(){
     var roles;
    function setRoles(role){
        roles = role;

    }
    function setUser(isUser){
        user = inUser;
    }
    function isAuthorized(neededRole) {
        if(user){
            user.isAuthorized(neededRole);
            return user.isAuthorized(neededRole);
        }    
    }
    function isAuthorizedAsync(neededRole, cb){
        setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 0);
    }

    function isAuthorizedPromise(neededRole, cb){
        return new Promise(function(resolve){
            setTimeout(function(){resolve(roles.indexOf(neededRole) >= 0)}, 0);
        });
    }
    function getIndex(req, res){
        if(req.user.isAuthorized('admin')){
           return res.render('index');
        }
            res.render('error');
    }
    return {isAuthorized, isAuthorizedAsync, setRoles, setUser, 
        isAuthorizedPromise, getIndex};
}

module.exports = AuthController();