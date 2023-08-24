let p = fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")

p.then((res) => {
    return res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            
            temp += `<tr> 
                <td>${itemData.name}</td>
                <td>${itemData.office}</td>
                <td>${itemData.position}</td>
                <td>${itemData.salary}</td>
                </tr> `
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)
