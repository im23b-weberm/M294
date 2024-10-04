


document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list')
    let tasking = document.forms.addTask;
    let delTask = document.forms.deleteTask
    let updateTask = document.forms.updateTask
    
    
    function authenticateUser() {
        event.preventDefault();
    
        fetch("HTTP://localhost:80/auth/jwt/sign",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": 'raiyan@gmail.com',
                "password": 'm294'
            })
        }).then((resp)=>{
            resp.json().then((data)=>
            {
                let token = data.token;
                console.log(token);
            })})

        }
        authenticateUser();
       
    function renderTask() {
        list.replaceChildren([])
        fetch("http://localhost:80/tasks",{
            method:"GET",
            
        }).then((resp) => resp.json()).then((data) => {
            data.forEach((task)=>{
            const listitem = document.createElement("li");
            const deletebutton = document.createElement("button");
            deletebutton.innerText = "Delete";
            deletebutton.onclick = () => {
               
                    let id = task.id
            
                    fetch('http://localhost:80/task/'+ id,{
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json'
                        },
                }).then(()=>{
                    renderTask();
                });
            };
            listitem.innerText = task.id + ' ' + task.title 
            listitem.append(deletebutton);

            list.appendChild(listitem)})}
    )}


    renderTask(); 
    
    tasking.addEventListener('submit', (event) =>{ 
        event.preventDefault();
        let text = tasking.elements.text.value;
        let done = tasking.elements.done.value;
        console.log(done)
        fetch("http://localhost:80/tasks",{
            method: 'POST',
            body: JSON.stringify({
                "title": text,
                "completed" :false,
            }),
            headers: {
                'Content-type': 'application/json'
            },
        }).then(()=>{
            renderTask();
        });
    })
    
    /*delTask.addEventListener('submit', (event) =>{
        event.preventDefault();
        let id = delTask.elements.id.value

        fetch('http://localhost:80/task/'+ id,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
    }).then(()=>{
        renderTask();
    });}) */


    updateTask.addEventListener('submit', (event) =>{
        event.preventDefault();
        let text = updateTask.elements.text.value;
        let id = updateTask.elements.id.value;
        fetch("http://localhost:80/tasks",{
            method: 'PUT',
            body: JSON.stringify({
                "id": id,
                "title": text,
                "completed" :false,
            }),
            headers: {
                'Content-type': 'application/json'
            },
        }).then(()=>{
            renderTask();
        });
    })

})

