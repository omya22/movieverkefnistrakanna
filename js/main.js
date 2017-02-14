let genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];

// console.log(genres.filter(function(item) { return item.id == id; })[0]);

let action = new Genre();
action.getById(28);


let western = new Genre();
western.getById(37);
// genres.pop(getGenreName(37));

let war = new Genre();
war.getById(10752);
// genres.pop(getGenreName(10752));

$("#seeMore").click(function() {

    console.log(genres.length);

    for (var i = 0; i < 1; i++) {
        let randomNumber = Math.floor(Math.random() * (genres.length - 0)) + 0;
        let newGenre = new Genre();
        newGenre.getById(genres[randomNumber].id);
        genres.pop(genres[randomNumber]);
    }

    console.log(genres)

    if (genres.length < 2) {
        $("#seeMore").css("display", "none");
    }
});

$("#playClick").click(function() {
    let trailerDiv = document.createElement("div");
    trailerDiv.className += "reveal-modal large";
    trailerDiv.id = "videoModal";
    document.body.appendChild(trailerDiv);
});
