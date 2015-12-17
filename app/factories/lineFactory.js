(function(){
  angular
    .module('app')
    .factory('lineFactory',lineFactory);

  function lineFactory() {
    return {lineFunction: lineFunction};

    ////////////

    function lineFunction(query,query1){
        var temp = $(query);
        var temp1 = $(query1);
        console.log(temp1);
        var c = document.getElementById("canvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        // if(temp.length > 1) {
          var x1 = $(temp[0]).offset().left+5;
          var y1 = $(temp[0]).offset().top +10;
          var x2 = $(temp[1]).offset().left+5;
          var y2 = $(temp[1]).offset().top +10;
          console.log(x1,y1,x2,y2);
          var x3 = $(temp1[0]).offset().left+5;
          var y3 = $(temp1[0]).offset().top +10;
          var x4 = $(temp1[1]).offset().left+5;
          var y4 = $(temp1[1]).offset().top +10;

          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          ctx.beginPath();
          ctx.lineWidth = 0.2;
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(400,400,x2,y2);
          ctx.stroke();
          ctx.beginPath();
          ctx.lineWidth = 0.2;
          ctx.moveTo(x3, y3);
          ctx.quadraticCurveTo(400,400,x4,y4);
          ctx.stroke();
        // }
        // if(temp.length < 2) {
        //     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        // }
      }
  }
}());
