// Olympiad File Input 
document.querySelector("#enrolmentDocs").onchange = function(){
    document.querySelector("#file-name").textContent = this.files[0].name;
}

// Practice Page Modal 
$(window).on('load', function() {
    $('#practiceModal').modal('show');
});


