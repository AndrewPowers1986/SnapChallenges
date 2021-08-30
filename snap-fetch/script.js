const target = document.getElementById('target');

function handleFetchRequest() {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => {
        return response.json();
    }).then(data => {
        let allStrings = "";
        data.forEach(string => {
            allStrings += `<p>${string}</p>`;
        });
        target.innerHTML = allStrings;
    });

}