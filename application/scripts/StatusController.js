var myApp = angular.module('istim', []);//'ngRoute'

/*myApp.config(function($routeProvider) {
		$routeProvider
			// route for the contact page
			.when('/', {
				templateUrl : 'perfil.html',
				controller  : 'UsersCtrl'
			});
	});*/

myApp.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.user = {};
    
    $scope.user_url =  "http://istimuser.nodejitsu.com/user/533509979a4d2aa14799cc04";
    
    $http.get($scope.user_url)
 		.success(function(data) {
 			//$scope.game_list = data;
            $scope.user.name = data.name;
 			//console.log(data);
 		})
 		.error(function(data) {
            $scope.user.name = 'error';
 			//console.log('Error: ' + data);
 		});
    
    
    
    $scope.coin_url = "http://istimcoinvirtual.jit.su/coin/show?userId=533509979a4d2aa14799cc04"//+$routeParams.id;
 
 	$http.get($scope.coin_url)
 		.success(function(data) {
 			//$scope.game_list = data;
            $scope.user.coin = data.cash;
 			//console.log(data);
 		})
 		.error(function(data) {
            $scope.user.coin = '0';
 			//console.log('Error: ' + data);
 		});

    
    $scope.user.games = [{
        "name": "Flappy Bird",
        "description": "O mais difícil jogo de passarinhos já visto e mostre que é melhor do que todos os seus amigos",
        "image": "http://android-play.info/uploads/posts/2014-03/1393751760_flappy-bird-logo.jpg",
        "link": "perfil_flappy_bird.html"
    },{
        "name": "Legend of Zelda",
        "description": "É uma série de jogos eletrônicos da Nintendo criada em 1986 por Shigeru Miyamoto e Takashi Tezuka. Os jogos se passam no reino de Hyrule, num ambiente de fantasia. A jogabilidade mistura aventura e ação com elementos de RPG. A série é muito apreciada por suas tramas complexas, quebra-cabeças, jogabilidade e pela superprodução.",
        "image": "http://userserve-ak.last.fm/serve/_/8619375/The+Legend+of+Zelda+Majoras+Mask+OST.jpg",
        "link": "perfil_legend_of_zelda.html"
    },{
        "name": "Real Racing",
        "description": "É um 2009 jogo de corrida desenvolvido e publicado pela Firemint para iOS . Foi lançado em 8 de junho de 2009, para iPhone e iPod Touch , e mais tarde um HD versão foi lançada para o iPad , que contou com gráficos melhorados para tirar o máximo proveito das capacidades do iPad.",
        "image": "http://1.bp.blogspot.com/-MvffPIa4ocU/UrHjVugLk0I/AAAAAAAABnU/URe6jSFGrbs/s1600/rr3-lamborguini.png",
        "link": "perfil_real_racing.html"
    },{
        "name": "Knights Of Pen and Paper",
        "description": "Estabelecidos em uma grande aventura neste baseado em turnos, estilo retro, RPG de pixel-art, inspirado nos grandes títulos da década de 90. Assumir o papel de jogadores no jogo assumindo os papéis de seus personagens em uma caneta e papel tradicional sessão de RPG na melhor experiência de RPG meta.",
        "image": "http://4.bp.blogspot.com/-kN-NMyeY3EY/UiuDpZbDvOI/AAAAAAAAAT4/Dw29tye-zOw/s1600/KOPAP+Banner.jpg",
        "link": "perfil_knights.html"
    }];

}]);

