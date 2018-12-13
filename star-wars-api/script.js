

const getPerson = async () => {

    let person = document.querySelector(".person");
    person.innerHTML = "loading";
    let response = await fetch(`https://swapi.co/api/people/${getRandomInt(87)}/`);
    let data = await response.json();
    person.innerHTML = "";

    person.insertAdjacentHTML("afterbegin",
        `<h2>${data.name}<h2>`
    );

    console.log({ data })
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

getPerson();