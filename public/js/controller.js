(function () {
    angular.module("PlatoApp")
        .controller("PlatoCtrl", PlatoCtrl);
    
    function PlatoCtrl($http, $scope) {
        var vm = this;
        vm.shop = {};
        vm.products = [];
        vm.currency = "";
        vm.searchText = "";
        vm.cart = {
            noOfItems: 0,
            totalPrice: 0
        };
        vm.email = "";

        $http.get('js/shop.json')
            .then(function (res) {
                vm.shop = res.data;
                console.info("shop data: ", vm.shop);
            });

        $http.get('js/products.json')
            .then(function (res) {
                vm.products = res.data;
                console.info("products data: ", vm.products);
            });

        vm.dropBoxChange = function () {
            $(".dropdown-menu li a").click(function(){
                $(this).parents(".dropdown").find('.btn').html($(this).html() + ' <span class="caret"></span>');
                $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
            });
        };

        vm.dropBoxChange();
        
        vm.search = function () {
            console.log("String to be searched: ", vm.searchText);
        };
        
        vm.getProduct = function (id) {
            console.info("View details of ", id);
        };

    }


    PlatoCtrl.$inject = ["$http", "$scope"];
})();