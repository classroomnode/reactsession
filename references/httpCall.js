function getData()
{
    let url =
    "http://localhost:8080/api/todos";
 return  fetch(url)
    .then(data => data.json())
    .then(result => {
      console.log(result)
      return result;
    }).catch(()=>{
        return
    });
}