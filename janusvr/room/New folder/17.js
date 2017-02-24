
room.onMouseDown = function(){
    var tempname = player.cursor_object;
    if(tempname=="JsIdOfBook"){
       room.playSound("JsIdOfSound");}else if(tempname=="JsIdMask"){
       room.objects["JsIdMask"].pos.y = -1000;
       room.objects["JsIdScaryMask"].pos.y = 0;
    }else if(tempname=="JsIdScaryMask"){
       room.objects["JsIdMask"].pos.y = 0;
       room.objects["JsIdScaryMask"].pos.y = -1000;
    }else if(tempname=="JsIdButton"){
       print("you pushed the button!");
    }
}