angular
    .module("app.component.about-me", [])
    .component("aboutMe", {
        templateUrl: "app/components/about-me.component.html",
        controller: AboutMeController,
        controllerAs: "vm"
    });

AboutMeController.$inject = [
    "dataservice",
    "common"
];

function AboutMeController(dataservice, common) {
    var vm = this;

    dataservice.getAboutMe().then(function (data) {
        vm.name = data.name;
        vm.gender = data.gender;
        vm.age = common.calculateAge(data.birthdate);
        vm.desc = data.description;
    });
}
