
document.addEventListener('DOMContentLoaded', function(){

    const displaydate = document.getElementById('displaydate');
    var d = '';
    switch(new Date().getDay()){
        case 0: 
        d = 'Sunday';
        break;

        case 1:
        d = 'Monday';
        break;

        case 2:
        d = 'Tuesday';
        break;

        case 3:
        d = 'Wednesday';
        break;

        case 4:
        d = 'Thursday';
        break;
        
        case 5:
        d = 'Friday';
        break;
        
        case 6: 
        d = 'Saturday';
        
    }

    document.getElementById('displaydate').innerHTML = d;
    
    const list = document.getElementById('list');
    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete'){
            const child = e.target.parentElement;
            child.parentNode.removeChild(child);
        }
    });

    const forms = document.forms;
    const addForm = forms['add_movie'];
          addForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // create element
            const value = addForm.querySelector('input[type="text"]').value;
            if(value == ''){
                return false;
            }

            const li = document.createElement('li');
            const moviename = document.createElement('span');
            const deleteBtn = document.createElement('span');


            // add text content
            moviename.textContent = value;
            deleteBtn.textContent = 'Delete';


            // add classes
            moviename.classList.add('name');
            deleteBtn.classList.add('delete');

            // append to DOM
            li.appendChild(moviename);
            li.appendChild(deleteBtn);
            list.appendChild(li);
    });
    
});

setInterval(function(){
    let d = '';
    switch(new Date().getDay()){
        case 0:
            d = 'Sunday';
        break;
        case 1:
            d = 'Monday';
        break;
        case 2:
            d = 'Tuesday';
        break;
        case 3:
            d = 'Wednesday';
        break;
        case 4:
            d = 'Thursday';
        break;
        case 5:
            d = 'Friday';
        break;
        case 6:
            d = 'Saturday';
    }
    document.getElementById('demo').innerHTML = d + 
    new Date().getHours() + ' : ' + new Date().getMinutes() +
     ' : ' + new Date().getSeconds();
}, 1000);






