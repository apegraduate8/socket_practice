const socket = io();
let user;

jQuery(document).ready(function($) {
    
   
    let $userForm = $('.container > form')
    
     $userForm.on("submit", function(e){
        e.preventDefault()
        console.log("yoyo   ", $('#user').val())
        user = $('#user').val();
         $('#user').val(" ");
         
    })
    
    
      $("#form").submit(function(e){
                    e.preventDefault()
                    socket.emit("chatMessage", $('#m').val())
                    console.log(  $('#m').val())
                     $('#m').val(" ")
                    return false
                });
                socket.on('chatMessage', function(msg){
                   save(user, msg)
//                    $("<li>").append($('span').text(msg))
                    let yo = $("<p>)").text(user)
                    let sp = $("<span>)").text(msg)
                    let l = $("<li>").append(yo)
                    console.log(yo)
                    $('.messages').append(l.append(sp));
                })
    
    
    
    let grab = (id) => {
             axios.get('/api'+id)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    };
    
    let save = (userID, message) => {
                 axios.post('/api', {id: userID, message: message})
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    };
   
   
    
    
    
    

    
    console.log($userForm)
    
});