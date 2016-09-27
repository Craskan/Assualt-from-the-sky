var player_speed = 1;
var player_boost = 5;
var img_height = document.getElementById("player").height;
var img_width = document.getElementById("player").width;
var big_brother = [];
var units_tracked = 0;

function close_menu(){
	document.getElementById("menu").style.zIndex="-1";
	start_game();
	
}
function start_game(){

}
function update_x_location(element){
	if(element.dogtag === undefined)
	{
		create_tracker(element);
	}
	else
	{
		element.x_pos = get_x_value(element);
		//element.y_pos = get_y_value(element);		
	}
}
function update_y_location(element){
	if(element.dogtag === undefined)
	{
		create_tracker(element);
	}
	else
	{
		//element.x_pos = get_x_value(element);
		element.y_pos = get_y_value(element);		
	}
}
function create_tracker(element)
{
	//element = document.getElementById(element_moved);
	element.dogtag=units_tracked;
	units_tracked++;
	element.x_pos = get_x_value(element);
	element.y_pos = get_y_value(element);
}
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
function get_x_value(element){
	var temp = 0;
	//element = document.getElementById(element_moved);

	if(element.style.left == "")
	{
		temp = element.offsetLeft;	
	}	
	else
	{	
		temp = element.style.left;
	}
	
	return temp;
}
function get_y_value(element){
	var temp = 0;
	//element = document.getElementById(element_moved);
	
	if(element.style.top == "")
	{
		temp = element.offsetTop;	
	}	
	else
	{	
		temp = element.style.top;
	}

	return temp;
}
function Move(right,up)
{
	move_up_1("player",(up*player_boost));
	move_right_1("player",(right*player_boost))
}

function move_up_1(element_moved, increment){
	
	var temp = 0;
	element = document.getElementById(element_moved);
	
	
	var dis = parseInt(cut_off_px(get_y_value(element))) + increment; 
	if(dis <= window.innerHeight - img_height && dis >= 0)
	{
	dis = dis + "px";
	element.style.top = dis;
	}
	update_y_location(element);
}
function move_right_1(element_moved,increment){
	

	var temp = 0;
	element = document.getElementById(element_moved);

	var dis = parseInt(cut_off_px(get_x_value(element))) + increment;

	if(dis <= window.innerWidth - img_width && dis >= 0)
	{
	dis = dis + "px";
	element.style.left = dis;
	}
	update_x_location(element);

}
function cut_off_px(value)
{
	len = value.length;
	if(len > 0)
	{	
	value = value.slice(0,len-2);
	}
	return value;
}
function where_are_you(){
	element = document.getElementById("player");
	alert("x " + element.x_pos + " y " + element.y_pos);
	alert(element.dogtag)
}


// Arrow key movement. Repeat key five times a second
//
KeyboardController({
    37: function() { Move(-player_speed, 0); },
    38: function() { Move(0, -player_speed); },
    39: function() { Move(player_speed, 0); },
    40: function() { Move(0, player_speed); }
}, 20);


