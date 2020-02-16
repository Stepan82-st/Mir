var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);

var rct = new createjs.Shape();
rct.graphics.beginFill("#696969").rect(0, 0, 800, 600).endFill();
stage.addChild(rct);
TweenLite.to(rct, 0, {
  onUpdate: function () {
    rct.graphics.clear()
    .beginFill("#696969")
    .rect(0, 0, 800, 600)
    .endFill();
  }
});

var s = new createjs.Shape();
stage.addChild(s);

s.x = -10;
s.y = 300;

var a = {
	p0x: 0,
	p0y: 50,
	p1x: 100,
	p1y: 50,
	p2x: 100,
	p2y: -50,
	p3x: 0,
	p3y: -50
};

s.graphics
.beginFill("#fff")
.mt(a.p0x, a.p0y)
.lt(a.p1x, a.p1y)
.lt(a.p2x, a.p2y)
.lt(a.p3x, a.p3y)
.cp()
.endStroke()
.endFill();


var v = new createjs.Shape();
stage.addChild(v);
v.x = 110;
v.y = 300;
var a1 = {
	p0x: 0,
	p0y: 50,
	p1x: 100,
	p1y: 50,
	p2x: 100,
	p2y: -50,
	p3x: 0,
	p3y: -50
}
var lt = new TimelineMax();
lt.to (a1, 0.5, {
onUpdate: function (){
v.graphics
.beginFill("#fff")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});
var r = new createjs.Shape();
stage.addChild(r);
r.x = 230;
r.y = 300;
lt.to(r, 0.5,{
	onUpdate: function (){
r.graphics
.beginFill("#fff")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0
});

var t = new createjs.Shape();
stage.addChild(t);
t.x = 470;
t.y = 300;
lt.to(t, 0,{
	onUpdate: function (){
t.graphics
.beginFill("#fff")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0
});

var p = new createjs.Shape();
stage.addChild(p);
p.x = 590;
p.y = 300;
lt.to(p, 0,{
	onUpdate: function (){
p.graphics
.beginFill("#fff")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var l = new createjs.Shape();
stage.addChild(l);
l.x = 710;
l.y = 300;
lt.to(p, 0,{
	onUpdate: function (){
l.graphics
.beginFill("#fff")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var v1 = new createjs.Shape();
stage.addChild(v1);
v1.x = 350;
v1.y = 540;
lt.to (a1, 0, {
onUpdate: function (){
v1.graphics
.beginFill("#808080")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0
});

var v2 = new createjs.Shape();
stage.addChild(v2);
v2.x = 350;
v2.y = 420;
lt.to (a1, 0, {
onUpdate: function (){
	v2.graphics
	.beginFill("#808080")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var v3 = new createjs.Shape();
stage.addChild(v3);
v3.x = 350;
v3.y = 300;
lt.to (a1, 0, {
onUpdate: function (){
	v3.graphics
	.beginFill("#808080")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var v4 = new createjs.Shape();
stage.addChild(v4);
v4.x = 350;
v4.y = 180;
lt.to (a1, 0, {
onUpdate: function (){
	v4.graphics
	.beginFill("#808080")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var v5 = new createjs.Shape();
stage.addChild(v5);
v5.x = 350;
v5.y = 60;
lt.to (a1, 0, {
onUpdate: function (){
	v5.graphics
	.beginFill("#808080")
.mt(a1.p0x, a1.p0y)
.lt(a1.p1x, a1.p1y)
.lt(a1.p2x, a1.p2y)
.lt(a1.p3x, a1.p3y)  
.cp()
.endStroke()
.endFill();
}, delay: 0.5
});

var crc1 = new createjs.Shape();
crc1.graphics.beginFill("#D3D3D3")
	.setStrokeStyle(7, "round")
	.drawCircle(0, 0, 740);
crc1.x = 500;
crc1.y = 540;
crc1.scaleX = 0;
crc1.scaleY = 0;
stage.addChild(crc1);	
TweenMax.to(crc1, 2, {scaleX:1,scaleY:1, delay: 4 });


var crc2 = new createjs.Shape();
crc2.graphics.beginFill("#808080")
	.setStrokeStyle(7, "round")
	.drawCircle(0, 0, 940);
crc2.x = 20;
crc2.y = 140;
crc2.scaleX = 0;
crc2.scaleY = 0;
stage.addChild(crc2);	
TweenMax.to(crc2, 2, {scaleX:1,scaleY:1, delay: 5 });
/*
var crc3 = new createjs.Shape();
crc3.graphics.beginFill("#D3D3D3")
	.setStrokeStyle(7, "round")
	.drawCircle(0, 0, 720);
crc3.x = 550;
crc3.y = 140;
crc3.scaleX = 0;
crc3.scaleY = 0;
stage.addChild(crc3);	
TweenMax.to(crc3, 2, {scaleX:1,scaleY:1, delay: 6 });
*/

var c = new createjs.Shape();
c.x = 700;
c.y = 240;
c.regX = 800;
c.regY = 600;
c.scaleX = 0;
c.scaleY = 0;
stage.addChild(c);

var a2 = {
	cp0x0: 280,
	cp0y0: -280,
	cp0x1: 720,
	cp0y1: -280,
	cp1x0: 1280,
	cp1y0: 280,
	cp1x1: 1280,
	cp1y1: 720,
	cp2x0: 720,
	cp2y0: 1280,
	cp2x1: 280,
	cp2y1: 1280,
	cp3x0: -280,
	cp3y0: 720,
	cp3x1: -280,
	cp3y1: 280
};
c.graphics
.beginFill("#D3D3D3")
.beginStroke("rgb(255, 255, 0, 0)")
.setStrokeStyle(0)
	.mt(0, 0)
	.bt(a2.cp0x0, a2.cp0y0, a2.cp0x1, a2.cp0y1, 1000, 0)
	.bt(a2.cp1x0, a2.cp1y0, a2.cp1x1, a2.cp1y1, 1000, 1000)
	.bt(a2.cp2x0, a2.cp2y0, a2.cp2x1, a2.cp2y1, 0, 1000)
	.bt(a2.cp3x0, a2.cp3y0, a2.cp3x1, a2.cp3y1, 0, 0)
	.cp()
	.endStroke()
    .endFill();
	
TweenMax.to(c, 2, {scaleX:1,scaleY:1, delay: 6 });


 
TweenMax.to(a2, 3,{
	cp0x0: 0,
	cp0y0: 520,
	cp0x1: 720,
	cp0y1: 520,
	cp1x0: 1000,
	cp1y0: 520,
	cp1x1: 1280,
	cp1y1: 820,
	cp2x0: 1000,
	cp2y0: 820,
	cp2x1: 0,
	cp2y1: 520,
	cp3x0: 0,
	cp3y0: 820,
	cp3x1: 0,
	cp3y1: 520,
	onUpdate: function () {
		c.graphics
		.clear()
		.beginFill("#D3D3D3")
		.mt(0, 0)
	.lt(a2.cp0x0, a2.cp0y0, a2.cp0x1, a2.cp0y1, 1000, 520)
	.lt(a2.cp1x0, a2.cp1y0, a2.cp1x1, a2.cp1y1, 1000, 820)
	.lt(a2.cp2x0, a2.cp2y0, a2.cp2x1, a2.cp2y1, 0, 520)
	.lt(a2.cp3x0, a2.cp3y0, a2.cp3x1, a2.cp3y1, -280, 520)
	.cp()
		.endStroke();
	},
	delay: 7
});


var h = new createjs.Shape();
stage.addChild(h);

h.x = 0;
h.y = 160;

var a3 = {
	p0x: 0,
	p0y: 0,
	p1x: 0,
	p1y: 0,
	p2x: 0,
	p2y: 300,
	p3x: 0,
	p3y: 300
};

h.graphics
.beginFill("#808080")
.beginStroke("rgb(0, 0, 0, 0)")
.mt(a3.p0x, a3.p0y)
.lt(a3.p1x, a3.p1y)
.lt(a3.p2x, a3.p2y)
.lt(a3.p3x, a3.p3y)
.cp()
.endStroke()
.endFill();

var lt = new TimelineMax();

lt.to(a3, 2, {
	p0x: 400,
	p0y: 0,
	p3x: 400,
	p3y: 300,
	onUpdate: function () {
		h.graphics
		.clear()
		.beginFill("#808080")
		.beginStroke("rgb(0, 0, 0, 0)")
		.mt(a3.p0x, a3.p0y).lt(a3.p1x, a3.p1y).lt(a3.p2x, a3.p2y).lt(a3.p3x, a3.p3y).cp()
		.endStroke();
	},
	delay: 10
});

var k = new createjs.Shape();
stage.addChild(k);

k.x = 0;
k.y = 160;

var a5 = {
	p0x: 800,
	p0y: 0,
	p1x: 800,
	p1y: 0,
	p2x: 800,
	p2y: 300,
	p3x: 800,
	p3y: 300
};

k.graphics
.beginFill("#808080")
.beginStroke("rgb(0, 0, 0, 0)")
.mt(a5.p0x, a5.p0y)
.lt(a5.p1x, a5.p1y)
.lt(a5.p2x, a5.p2y)
.lt(a5.p3x, a5.p3y)
.cp()
.endStroke()
.endFill();

var lt = new TimelineMax();

lt.to(a5, 2, {
	p0x: 400,
	p0y: 0,
	p3x: 400,
	p3y: 300,
	onUpdate: function () {
		k.graphics
		.clear()
		.beginFill("#808080")
		.beginStroke("rgb(0, 0, 0, 0)")
		.mt(a5.p0x, a5.p0y).lt(a5.p1x, a5.p1y).lt(a5.p2x, a5.p2y).lt(a5.p3x, a5.p3y).cp()
		.endStroke();
	},
	delay: 10
});

var s1 = new createjs.Shape();
stage.addChild(s1);

s1.x = 0;
s1.y = 160;

var a4 = {
	p0x: 0,
	p0y: 0,
	p1x: 0,
	p1y: 0,
	p2x: 0,
	p2y: 8,
	p3x: 0,
	p3y: 8
};

s1.graphics
.beginFill("#fff")
.beginStroke("rgb(0, 0, 0, 0)")
.mt(a4.p0x, a4.p0y)
.lt(a4.p1x, a4.p1y)
.lt(a4.p2x, a4.p2y)
.lt(a4.p3x, a4.p3y)
.cp()
.endStroke()
.endFill();

var lt = new TimelineMax();

lt.to(a4, 3, {
	p0x: 800,
	p0y: 0,
	p3x: 800,
	p3y: 8,
	onUpdate: function () {
		s1.graphics
		.clear()
		.beginFill("#fff")
		.beginStroke("rgb(0, 0, 0, 0)")
		.mt(a4.p0x, a4.p0y).lt(a4.p1x, a4.p1y).lt(a4.p2x, a4.p2y).lt(a4.p3x, a4.p3y).cp()
		.endStroke();
	},
	delay: 12
});


var k1 = new createjs.Shape();
stage.addChild(k1);

k1.x = 800;
k1.y = 440;

var a7 = {
	p0x: 800,
	p0y: 0,
	p1x: 800,
	p1y: 0,
	p2x: 800,
	p2y: 8,
	p3x: 800,
	p3y: 8
};

k1.graphics
.beginFill("#fff")
.beginStroke("rgb(0, 0, 0, 0)")
.mt(a7.p0x, a7.p0y)
.lt(a7.p1x, a7.p1y)
.lt(a7.p2x, a7.p2y)
.lt(a7.p3x, a7.p3y)
.cp()
.endStroke()
.endFill();

var lt = new TimelineMax();

lt.to(a7, 3, {
	p0x: -800,
	p0y: 0,
	p3x: -800,
	p3y: 8,
	onUpdate: function () {
		k1.graphics
		.clear()
		.beginFill("#fff")
		.beginStroke("rgb(0, 0, 0, 0)")
		.mt(a7.p0x, a7.p0y).lt(a7.p1x, a7.p1y).lt(a7.p2x, a7.p2y).lt(a7.p3x, a7.p3y).cp()
		.endStroke();
	},
	delay: 11
});

var text2 = new createjs.Text("Stepan", "bold 170px Arial", "#D3D3D3");
text2.regX = text2.getMetrics().width/2;
text2.regY = 75;
text2.x = 400;
text2.y = 300;
text2.scaleX = 0;
text2.scaleY = 0;
stage.addChild(text2);
var tl = new TimelineMax();
tl.to(text2, 4, { scaleX:1,scaleY:1, delay: 14 });
TweenMax.ticker.fps(60);
TweenMax.ticker.addEventListener("tick", stage.update, stage);









