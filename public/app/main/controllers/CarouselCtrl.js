app.controller('CarouselCtrl', function($scope, $sce){
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      type: "1",
      image: '/img/bg.jpg',
      url: $sce.trustAsResourceUrl('http://player.vimeo.com/video/39683393?api=1&amp;player_id=player_1')
    },
    {
      type: "2",
      url: '/img/bg2.jpg'
    },
    {
      type: "3",
      url: '/img/bg3.jpg'

    }
  ];
})