angular
    .module("app.dataservice", [])
    .factory("dataservice", dataservice);

dataservice.$inject = [
    "$http"
];

function dataservice($http) {
    var service = {
        getAboutMe: getAboutMe
    };
    return service;

    function getAboutMe() {
        var req = {
            method: "GET",
            url: "app/data/about-me.json",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };

        return $http(req).then(success, failure);
    }

    function success(response) {
        return response.data;
    }

    function failure(error) {
        console.error(error);
        return error;
    }
}
