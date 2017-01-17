// Bootstrap all Angular modules here
angular.module("app", [
    // Ng Modules
    "ngMaterial",
    "ngRoute",

    // Custom Modules
    "app.route",
    "app.controller",
    "app.dataservice",
    "app.common",
    "app.components"
]);
