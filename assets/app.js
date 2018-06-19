const inputText = document.querySelector("input")
const containerTitle = document.getElementById("title")
const containerYear = document.getElementById("year")
const containerRuntime = document.getElementById("runtime")
const containerImage = document.getElementById("img")

//enviar mensaje con enter
inputText.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;//wish y keycode son eventos del teclado. Esto tb puede ser el parametro de if, pero aqui creo la variable y en el if solo llamo como parametro a la variable.
    if(key === 13) {//13 es el numero asci de tecla enter
        let movie = inputText.value;
        inputText.value = ""; //limpiar input

        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=ecb14c18`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
})
const renderInfo = data => {
    containerTitle.innerHTML = data.Title;
    containerYear.innerHTML = data.Year;
    containerRuntime.innerHTML = data.Runtime;
    containerImage.innerHTML = `<img src="${data.Poster}">`;

}