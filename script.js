const table = document.querySelector("table");
const headers = [];

fetch("https://sb-cats.herokuapp.com/api/show")
    .then(res => res.json())
    .then(dataJSON => {
        if (dataJSON.mesage ==="ok") {
            let innerHTML = "";

            innerHTML += "<tr>";
            for (key of Object.keys(dataJSON.data[0])) {
                if (key !== "__v" && key !== "_id"){
                    headers.push(key)
                    innerHTML +=`<th>${key}</th>`
                }
            }
            innerHTML += "</tr>"

            dataJSON.data.forEach(cat => {
                innerHTML += "<tr>"
                headers.forEach(title =>
                    innerHTML += `<td>${cat[title]? cat[title]: ""}</td>`
                    )
                    innerHTML += "</tr>"
            })
            table.innerHTML = innerHTML;
        }
    }) 