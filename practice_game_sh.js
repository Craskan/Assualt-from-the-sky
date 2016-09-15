var level_1_length = 14000;
var player_speed = 1;
var rocket_speed = 200;
var rocket_creation_speed = 20;
var player_boost = 5;
var window_height = 480;
var window_width = 757;
var img_width = 69;

function close_menu(){
	document.body.removeChild(document.getElementById("menu"));
	//level 1
	autofire(1);
	
}
function autofire(level)
{
	if(level == 1)
	{	
		document.getElementById("main_frame").focus();
		var value = true;
		var temp = setInterval(function(){rocket_launch_1();}, rocket_speed);
		setInterval(function(){clearInterval(temp);},level_1_length);

		//rocket_launch_1();
	}	
	if(level == 2)
	{
		alert("HURRAH, you won!");
	}

}
//var my_screen_width = window.innerWidth;
//however, for the first attempt, we are using a small window
var my_screen_width = window_width;
//var my_screen_height = window.innerHeight;
//however, for the first attempt, we will set 
//a static screensize
var my_screen_height = window_height;
function rocket_launch_1(){
	var position = Math.floor((Math.random() * my_screen_height)+1)
	var small_rocket_width = 45;
	var rocket_image = "practice_game_img/rocket_2.png";
	var x = rocket_builder(position,small_rocket_width,rocket_image);
	sound_clip("practice_game_sh_sound/Missile_Launch_S1.MP3");
	//alert(x);
	var rocket_type = 1;
	fire_rocket_1(x,rocket_type);

}
var para = [];
var rocketNum = 0;

function rocket_builder(margin,width,rocket_image){
	
	para.push(document.createElement("IMG"));
	
	para[rocketNum].setAttribute("src",rocket_image);
	para[rocketNum].setAttribute("width",width);
	//para[rocketNum].setAttribute("width",height);
	para[rocketNum].setAttribute("alt","rocket_picture");
	para[rocketNum].setAttribute("id","IMG" + rocketNum);
	
	document.body.appendChild(para[rocketNum]);
	document.getElementById("IMG" + rocketNum).style.position="absolute";
	document.getElementById("IMG" + rocketNum).style.top= margin +"px";
	rocketNum = rocketNum + 1;
	return para[rocketNum-1].id;
}

var sound_tester = [];
var sound_num = 0;

function sound_clip(){
	sound_tester.push(document.createElement("Audio"));
	sound_tester[sound_num].setAttribute("src","practice_game_sh_sound/Missile_Launch_S1.MP3");
	sound_tester[sound_num].setAttribute("id", "sound" + sound_num);
	sound_tester[sound_num].setAttribute("type","audio/mpeg");
	document.body.appendChild(sound_tester[sound_num]);

	play_clip("sound" + sound_num);
}
function play_clip(element_name){
	document.getElementById(element_name).play();
}

function fire_rocket_1(rocket_name,type_of_rocket)	{
	if(type_of_rocket == 1)
	{	
	var interval = 10;
	var width_of_screen = my_screen_width;
	var temp = setInterval(function(){refresher_2(rocket_name,width_of_screen,interval)}, rocket_creation_speed);
	}
}
function refresher_2(element_moved,how_far,increment){
	//alert("did I get called?");
	var target = "player";
	if(document.getElementById(element_moved) != null)
	{
		if(document.getElementById(element_moved).offsetLeft < how_far)
		{
			move_right_target_1(element_moved,increment,target);
		}
		else
		{
			var temp = document.getElementById(element_moved).parentNode;
			temp.removeChild(document.getElementById(element_moved));

			check_if_finished(element_moved);	
		}
	}	
}
function check_if_finished(rocket_name){
	clearTimeout(rocket_name);
}
function move_right_target_1(element_moved,increment,target){
	var temp = 0;
	var temp1 = 0;
		//alert(document.getElementById(element_moved).offsetLeft)
	if(document.getElementById(element_moved).style.left == "")
	{
		temp = document.getElementById(element_moved).offsetLeft;	
	}	
	else
	{	
		temp = document.getElementById(element_moved).style.left;
	}

	if(document.getElementById(target).style.left == "")
	{
		temp1 = document.getElementById(target).offsetLeft;	
	}	
	else
	{	
		temp1 = document.getElementById(target).style.left;
	}
	
	toString(temp);
	toString(temp1);
	len = temp.length;
	len1 = temp1.length;
		//alert("len " +len);
	if(len > 0)
	{	
	temp = temp.slice(0,len-2);
	}
	if(len1 > 0)
	{	
	temp1 = temp1.slice(0,len-2);
	}

		
	var dis = parseInt(temp) + increment;
	var tdis = parseInt(temp1);
	//width of rocket is 40, we are giving a 10 px tolerance
	//so it can be off by five in either direction
	var checker = dis + 40;
	
	if(checker + 5 >= tdis && checker - 5 <= tdis)
	{
		if(document.getElementById(element_moved).style.top == "")
		{
			temp = document.getElementById(element_moved).offsetTop;	
		}	
		else
		{	
			temp = document.getElementById(element_moved).style.top;
		}

		if(document.getElementById(target).style.top == "")
		{
			temp1 = document.getElementById(target).offsetTop;	
		}	
		else
		{	
			temp1 = document.getElementById(target).style.top;
		}
		
		toString(temp);
		toString(temp1);
		len = temp.length;
		len1 = temp1.length;
			//alert("len " +len);
		if(len > 0)
		{	
		temp = temp.slice(0,len-2);
		}
		if(len1 > 0)
		{	
		temp1 = temp1.slice(0,len1-2);
		}
			//alert("temp "  + temp);
		
		//the rocket image height is ~21px,
		//to center the image we have to move it half it's height
		//hence the 10.5 px ;)

		 checker = parseInt(temp) + 10.5;
		 //the height of the player image is 75px
		 //the plus and minus 5 is to give the rocket a tolerance of 10
		 tdis = parseInt(temp1);
		if(checker + 0 >= tdis && checker -75 <= tdis)
		{
			alert("Game Over! Better luck next time.");
		}
	}
	
	dis = dis + "px"; 
		
	document.getElementById(element_moved).style.left = dis;

}	
function move_up_1(element_moved, increment){
	//alert("move_me");
	var temp = 0;
	//alert(document.getElementById(element_moved).offsetLeft)
	if(document.getElementById(element_moved).style.top == "")
	{
		temp = document.getElementById(element_moved).offsetTop;	
	}	
	else
	{	
		temp = document.getElementById(element_moved).style.top;
	}
	
	toString(temp);
	len = temp.length;
	if(len > 0)
	{	
	temp = temp.slice(0,len-2);
	}
	var dis = parseInt(temp) + increment; 
	if(dis <= window_height - img_width && dis >= 6)
	{
	dis = dis + "px";
	document.getElementById(element_moved).style.top = dis;
	}
}
// Keyboard input with customisable repeat (set to 0 for no key repeat)
//
function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    var timers= {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};
// Arrow key movement. Repeat key five times a second
//
KeyboardController({
    //37: function() { Move(-1, 0); },
    38: function() { Move(0, -player_speed); },
    //39: function() { Move(1, 0); },
    40: function() { Move(0, player_speed); }
}, 20);
function Move(right,up)
{
	move_up_1("player",(up*player_boost));
	//move_right_1("moving_div",(right*5))
}