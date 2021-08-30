
function handleOnLoad () {
    fetch("https://ddc-web-student.cnm.edu/apis/")
        .then(reply => reply.json())
        .then(posts => {
            console.log(posts);
            const cards = posts.data.reduce((accumulator, post) => {
                accumulator += `
                <div class ="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                </div>
                `
                return accumulator;
            }, "");

            const grid = document.getElementById("cards-parent");
            grid.innerHTML = cards;
        })
}