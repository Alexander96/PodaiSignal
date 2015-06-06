app.controller('CarouselCtrl', function($scope){
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: '/img/bg.jpg'
    },
    {
      image: '/img/bg2.jpg'
    },
    {
      image: '/img/bg3.jpg'
    }
  ];
})