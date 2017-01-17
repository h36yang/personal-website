angular
    .module("app.route", [])
    .config(routeConfig);

routeConfig.$inject = [
    "$locationProvider",
    "$routeProvider"
];

function routeConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider
        .when("/", {
            template: "<about-me></about-me>"
        })
        .when("/about", {
            template: "<about-me></about-me>"
        })
        .when("/skills", {
            template: "<skills></skills>"
        })
        .when("/work", {
            template: "<work-exp></work-exp>"
        })
        .when("/educations", {
            template: "<educations></educations>"
        })
        .when("/other", {
            template: "<other></other>"
        })
        .otherwise("/");
}
