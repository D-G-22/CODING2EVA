const url="https://masai-mock-api.herokuapp.com/coffee/menu";



async function getData()
{
    try{
        let res= await fetch(url);
        let users= await.res.json();
        append(users.data);
    }
    catch(err){
        console.log(err);
    }
}
getData();

function append(data)
{
    let container=document.getElementById("menu");
    data.foreach(function(el){
        let img=document.createElement("img");
        img.src=el.avatar;

        let div=document.createElement("div");
        div.append(img)
        container.append(div)
    })
}
