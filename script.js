function send(msg) {
    let message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `
        <input type='checkbox'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
        </svg>
        <p>${msg.tittle}</p>
        <p>${msg.subject}</p>
        <p>${msg.date || 'No date provided'}</p>
    `;

    document.getElementById('messagebox').appendChild(message);

    
    document.addEventListener('DOMContentLoaded', function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            var tooltipInstance = new bootstrap.Tooltip(tooltipTriggerEl, {
                placement: 'bottom', 
            });
    
            tooltipTriggerEl.addEventListener('shown.bs.tooltip', function () {
                var tooltipElement = document.querySelector('.tooltip.show'); 
                if (tooltipElement) {
                    
                    tooltipElement.style.backgroundColor = 'black';  
                    tooltipElement.style.color = 'white'; 
                    tooltipElement.style.borderRadius = '5px'; 
                    tooltipElement.style.padding = '4px'; 
    
                    
                    var arrowElement = tooltipElement.querySelector('.tooltip-arrow');
                    if (arrowElement) {
                        arrowElement.style.borderBottomColor = 'black'; 
                    }
                }
            });
        });
    });
    
    
}

send({
    tittle: 'onlinecourses',
    subject: 'Welcome to NPTEL Online Course : Programming In Java. The assignment 0 for the course realeased',
    date:'11:11'
});

send({
    tittle: 'PayPal ',
    subject: 'Registration Confirmation | Career Academy.You have successfully completed the registration form',
    date: 'jan 8'
});

send({
    tittle: 'LinkedIn Job Alerts',
    subject: '“software engineer”: Internkaksha IT Solutions - Web Development Intern and more.30+ new jobs.',
    date: 'feb 2'
});

send({
    tittle: 'TCS Careers',
    subject: 'Deadline Extended. Last chance to register for TCS CodeVita Season 12! Act now.Register Now.',
    date: 'may 13'
});

send({
    tittle: 'Zoom',
    subject: 'Hello Nandhini G S, Thank you for registering for 30 Days Master Class on Full Stack Web Development.<no-reply@zoom.us>',
    date: 'Jul 14'
});

send({
    tittle: 'Infosys ',
    subject: 'You are Invited Daily Expert Knowledge Sessions | Nov 18 to 22, 2024 | 5:00 PM to 6:00 PM.Are you ready',
    date: 'Nov 14'
});

send({
    tittle: 'EduRev',
    subject: 'Email verification nandhinisivakumar0526@gmail.com | Welcome to EduRev.Learn and Test Yourself',
    date: 'Jul 9'
});

send({
    tittle: 'onlinecourses',
    subject: 'The lecture videos for Week (1) have been uploaded for the course (Programming In Java). video',
    date: 'Jan 11'
});

send({
    tittle: 'EduRev',
    subject: 'Email verification nandhinisivakumar0526@gmail.com | Welcome to EduRev.Learn and Test Yourself',
    date: 'Mar 10'
});

send({
    tittle: 'Infosys',
    subject: 'You are Invited Daily Expert Knowledge Sessions | Nov 18 to 22, 2024 | 5:00 PM to 6:00 PM.Are you ready',
    date: '13/05/2006'
});

var menu = document.getElementById("result");
var id = document.getElementById("id");
id.addEventListener("click", function() {
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});



var box1 = document.getElementById("result1");
var id1= document.getElementById("id1");
id1.addEventListener("click", function() {
    
    if (box1.style.display === "none" || box1.style.display === "") {
        box1.style.display = "block";
    } else {
        box1.style.display = "none";
    }
});

var read = document.getElementById("read");
var dot= document.getElementById("dot");
dot.addEventListener("click", function() {
    
    if (read.style.display === "none" || read.style.display === "") {
        read.style.display = "block";
    } else {
        read.style.display = "none";
    }
});




var set = document.getElementById("set");
var quicksetting = document.getElementById("quick-settings");
var close = document.getElementById("close-settings");


set.addEventListener("click", function() {
    
    if (quicksetting.style.display === "none" || quicksetting.style.display === "") {
        quicksetting.style.display = "block"; 
    } else {
        quicksetting.style.display = "none"; 
    }
});


if (close) {
    close.addEventListener("click", function() {
        quicksetting.style.display = "none"; 
    });
}



var check = document.getElementById("check");
var message = document.getElementById("messagebox");

check.addEventListener("click", function() {
    
    if (message.style.backgroundColor === "lightblue") {
        message.style.backgroundColor = ""; 
    } else {
        message.style.backgroundColor = "lightblue"; 
    }
});



