//Modal activation
var modal = document.getElementById("infoModal")
var span = document.getElementsByClassName("close")[0]
var slot1 = document.getElementById("slot1")
var slot2 = document.getElementById("slot2")
var slot3 = document.getElementById("slot3")
var slot4 = document.getElementById("slot4")
var slot5 = document.getElementById("slot5")

slot1.onclick = function(){
    if(GAME_STATE == 0 && TURN_COUNT>0){
        modal.style.display = "block"
<<<<<<< HEAD
        document.getElementById("modal-header-name").innerHTML = "<p>"+winnerSlots[0].content+"</p>"
        document.getElementById("modal-body-id").innerHTML = "<p>You clicked: "+winnerSlots[0].desc+"</p>"
=======
        document.getElementById("modal-body-id").innerHTML = "<p>"+winnerSlots[0].desc+"</p>"
>>>>>>> 4545dc2612b1cfd7ff7aca782b82c83a6e80e199
    }
    else if(TURN_COUNT==0){
        modal.style.display = "block"
        document.getElementById("modal-body-id").innerHTML = "<p>If you want more information, play the game first!</p>"
    }
}
slot2.onclick = function(){
    if(GAME_STATE == 0 && TURN_COUNT>0){
        modal.style.display = "block"
<<<<<<< HEAD
        document.getElementById("modal-header-name").innerHTML = "<p>"+winnerSlots[1].content+"</p>"
        document.getElementById("modal-body-id").innerHTML = "<p>You clicked: "+winnerSlots[1].desc+"</p>"
=======
        document.getElementById("modal-body-id").innerHTML = "<p>"+winnerSlots[1].desc+"</p>"
>>>>>>> 4545dc2612b1cfd7ff7aca782b82c83a6e80e199
    }
    else if(TURN_COUNT==0){
        modal.style.display = "block"
        document.getElementById("modal-body-id").innerHTML = "<p>If you want more information, play the game first!</p>"
    }
}
slot3.onclick = function(){
    if(GAME_STATE == 0 && TURN_COUNT>0){
        modal.style.display = "block"
<<<<<<< HEAD
        document.getElementById("modal-header-name").innerHTML = "<p>"+winnerSlots[2].content+"</p>"
        document.getElementById("modal-body-id").innerHTML = "<p>You clicked: "+winnerSlots[2].desc+"</p>"
=======
        document.getElementById("modal-body-id").innerHTML = "<p> "+winnerSlots[2].desc+"</p>"
>>>>>>> 4545dc2612b1cfd7ff7aca782b82c83a6e80e199
    }
    else if(TURN_COUNT==0){
        modal.style.display = "block"
        document.getElementById("modal-body-id").innerHTML = "<p>If you want more information, play the game first!</p>"
    }
}
slot4.onclick = function(){
    if(GAME_STATE == 0 && TURN_COUNT>0){
        modal.style.display = "block"
<<<<<<< HEAD
        document.getElementById("modal-header-name").innerHTML = "<p>"+winnerSlots[3].content+"</p>"
        document.getElementById("modal-body-id").innerHTML = "<p>You clicked: "+winnerSlots[3].desc+"</p>"
=======
        document.getElementById("modal-body-id").innerHTML = "<p> "+winnerSlots[3].desc+"</p>"
>>>>>>> 4545dc2612b1cfd7ff7aca782b82c83a6e80e199
    }
    else if(TURN_COUNT==0){
        modal.style.display = "block"
        document.getElementById("modal-body-id").innerHTML = "<p>If you want more information, play the game first!</p>"
    }
}
slot5.onclick = function(){
    if(GAME_STATE == 0 && TURN_COUNT>0){
        modal.style.display = "block"
<<<<<<< HEAD
        document.getElementById("modal-header-name").innerHTML = "<p>"+winnerSlots[4].content+"</p>"
        document.getElementById("modal-body-id").innerHTML = "<p>You clicked: "+winnerSlots[4].desc+"</p>"
=======
        document.getElementById("modal-body-id").innerHTML = "<p>"+winnerSlots[4].desc+"</p>"
>>>>>>> 4545dc2612b1cfd7ff7aca782b82c83a6e80e199
    }
    else if(TURN_COUNT==0){
        modal.style.display = "block"
        document.getElementById("modal-body-id").innerHTML = "<p>If you want more information, play the game first!</p>"
    }
}
span.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(event) {
    if(event.target == modal){
         modal.style.display = "none"
    }
}