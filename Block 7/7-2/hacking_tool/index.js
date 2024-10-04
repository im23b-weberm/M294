function send()
{
    let ip = document.getElementById("serveip");
    let cmnt = document.getElementById("cmnt");
    let uname = document.getElementById("uname");
    fetch("http://"+ip.value+"/challenges/1",{
        method:"POST"
    }).then((resp)=>{
        console.log(resp.headers);
        let token = resp.headers.get("authorization");
        console.log(token);
        fetch("http://"+ip.value+"/comments",{
            method:"POST",
            headers:{
                "Authorization": token,
                'content-type': 'application/json'
              },
              body:JSON.stringify({"username": uname.value,"message": cmnt.value})
        }).then((respa)=>{
            console.log(respa);
        });
    });
}