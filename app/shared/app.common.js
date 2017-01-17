angular
    .module("app.common", [])
    .factory("common", common);

function common() {
    var service = {
        calculateAge: calculateAge
    };
    return service;

    function calculateAge(birthday) {
        var birthDate;
        if (typeof birthday === "string") {
            birthDate = new Date(birthday);
        } else {
            birthDate = birthday;
        }
        var ageDate = new Date(Date.now() - birthDate.getTime());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
