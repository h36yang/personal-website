angular
    .module("app.controller", [])
    .controller("AppController", AppController);

function AppController() {
    var vm = this;
    vm.currentNavItem = "about-me";
}
