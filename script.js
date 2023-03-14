function song(){
    //get the song by the id 
    //get the icon by id
    var mySong = document.getElementById("song")
    var icon = document.getElementById("icon")

    //set the icon to an onclick, so when you click on the icon/play button image it will do the following function
    icon.onclick = function(){
        //if the music is paused or not playing, the whien i click on it , it should play
        if(mySong.onpause){
            mySong.onplay
            icon.src = "imagees/pause.jpg"
        }else{
            mySong.onplay
            icon.src = "imagees/pla.png"
        }
    }
}