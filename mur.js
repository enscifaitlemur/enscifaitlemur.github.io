var PageTitleNotification = {
    Vars:{
        OriginalTitle: document.title,
        Interval: null
    },    
    On: function(notification, intervalSpeed){
        var _this = this;
        _this.Vars.Interval = setInterval(function(){
             document.title = (_this.Vars.OriginalTitle == document.title)
                                 ? notification
                                 : _this.Vars.OriginalTitle;
        }, (intervalSpeed) ? intervalSpeed : 2000);
    },
    Off: function(){
        clearInterval(this.Vars.Interval);
        document.title = this.Vars.OriginalTitle;   
    }
}

PageTitleNotification.On("École en chantier");


// define images
						var images = [
							"media/anim1.png",
							"media/anim2.png",
							"media/anim3.png",
							"media/anim4.png",
							"media/anim5.png",
							"media/anim6.png",
							"media/anim7.png",
							"media/anim8.png",
							"media/anim9.png",
							"media/anim10.png",
							"media/anim11.png",
							"media/anim12.png"
						];

						// TweenMax can tween any property of any object. We use this object to cycle through the array
						var obj = {curImg: 0};

						// create tween
						var tween = TweenMax.to(obj, 0.5,
							{
								curImg: images.length - 1,	// animate propery curImg to number of images
								roundProps: "curImg",				// only integers so it can be used as an array index
								repeat: 27,									// repeat 4 times
								immediateRender: true,			// load first image automatically
								ease: Linear.easeNone,			// show every image the same ammount of time
								onUpdate: function () {
								  $("#myimg").attr("src", images[obj.curImg]); // set the image source
								}
							}
						);

						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 15000})
										.setTween(tween)
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						// handle form change
						$("form.move input[name=duration]:radio").change(function () {
							scene.duration($(this).val());
						});

						

//bg
const video = document.getElementById('video');
const long = document.getElementById('long');
let scrollpos = 0;
let lastpos;
const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
  triggerElement: long,
  triggerHook: "onEnter"
});
const startScrollAnimation = () => {
  scene2
    .addTo(controller2)
    .duration(long.clientHeight)
    .on("progress", (e) => {
      scrollpos = e.progress;
    });

  setInterval(() => {
    if (lastpos === scrollpos) return;
    	var currentTime = video.duration * scrollpos;
        video.currentTime = currentTime;
        console.log(video.duration + ' ' + currentTime);
    requestAnimationFrame(() => {
      //video.pause();
      lastpos = scrollpos;
      //console.log(video.currentTime, scrollpos);
    });
  }, 100);
};

const preloadVideo = (v, callback) => {
  const ready = () => {
    v.removeEventListener('canplaythrough', ready);

    video.pause();
    var i = setInterval(function() {
      if (v.readyState > 3) {
        clearInterval(i);
        video.currentTime = 0;
        callback();
      }
    }, 50);
  };
  v.addEventListener('canplaythrough', ready, false);
  v.play();
};

preloadVideo(video, startScrollAnimation);




var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
 
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 2;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};



$("#frise").wrapInner("b"); // wrap "My Text" with a new span
$("#frise").append($("#frise b").clone().hide());
$(function() {

    var marquee = $("#frise"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // wrap "My Text" with a span (old versions of IE don't like divs inline-block)
    marquee.wrapInner("<b>");
    marquee.find("b").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("b").clone()); // now there are two spans with "My Text"

    // create an inner div twice as wide as the view port for animating the scroll
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    // create a function which animates the div
    // $.animate takes a callback for when the animation completes
    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 6000, 'linear', reset);
    };

    // kick it off
    reset.call(marquee.find("div"));

});


$("#frise2").wrapInner("b2"); // wrap "My Text" with a new span
$("#frise2").append($("#frise2 b2").clone().hide());
$(function() {

    var marquee = $("#frise2"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // wrap "My Text" with a span (old versions of IE don't like divs inline-block)
    marquee.wrapInner("<b2>");
    marquee.find("b2").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("b2").clone()); // now there are two spans with "My Text"

    // create an inner div twice as wide as the view port for animating the scroll
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    // create a function which animates the div
    // $.animate takes a callback for when the animation completes
    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 6000, 'linear', reset);
    };

    // kick it off
    reset.call(marquee.find("div"));

});


window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("frise");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$(function () {
    $(window).scroll(function(){
      if($(window).scrollTop() > $('#historique2').offset().top
      && $(window).scrollTop() < $('#historique3').offset().top 
         //&& $(window).scrollTop() < $('#historique2').offset().top + $('#historique2').outerHeight(true)
      ){
         $('#frise span').text('Semaine du 11 au 15 novembre');
      }else if($(window).scrollTop() >= $('#historique3').offset().top 
         //&& $(window).scrollTop() < $('#historique3').offset().top + $('#historique3').outerHeight(true)
      ){
         $('#frise span').text('Semaine du 18 au 22 novembre');
      }else{
      	$('#frise span').text('Semaine du 4 au 8 novembre');
      }
    });
});
