var UserProfile = (function () {
    var name = "";

    var getName = function () {
        return name;
    };

    var setName = function (name) {
        name = name;
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;