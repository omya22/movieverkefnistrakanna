let movies = document.getElementById('main-content')

function getGenreName(id) {
    return genres.filter(function(item) { return item.id == id; })[0].name
}

function getDirectorName(item) {
    return moviecrew.filter(function(item) { return item.id == id; })[0].job;
}

class MovieDB {
    constructor(api_key, base_uri) {
        this.api_key = "3c2e3323fb6685239c36ee9312c7bcb0",
        this.base_uri = "http://api.themoviedb.org/3/",
        this.images_uri = "http://image.tmdb.org/t/p/"
    }
};

class Genre extends MovieDB {
    constructor(api_key, base_uri) {
        super(api_key, base_uri)
    }
    getById(id) {
        let v = new XMLHttpRequest();
        console.log(this.base_uri + "genre/" +id+ "/movies?api_key=" +this.api_key);
        v.open("GET", this.base_uri + "genre/" +id+ "/movies?api_key=" +this.api_key, true);
        v.onload = function (e) {
          if (v.readyState != 4 || v.status != 200) return;
          let response = JSON.parse(v.responseText);

          let PopularSection = document.createElement("section");
             document.body.appendChild(PopularSection);

             let heading = document.createElement("h1");
             heading.className += "genreHeading";
             heading.innerHTML = getGenreName(id);
             PopularSection.appendChild(heading);

            let ActionDiv = document.createElement("div");
            ActionDiv.className += "responsive";
            PopularSection.appendChild(ActionDiv);
            movies.appendChild(PopularSection);



          for (var i = 0; i < response.results.length; i++) {
              let imgDiv = document.createElement("div");
              let img = document.createElement("img");
              img.id = response.results[i].id;
              img.className += "slideImg";
              img.src = "http://image.tmdb.org/t/p/original" + response.results[i].poster_path;
            //   if (response.results[i].poster_path = "") {
            //       imgDiv.style.display = "none";
            //   }
              imgDiv.appendChild(img);
              ActionDiv.appendChild(imgDiv);

              let img_voteAverage = document.createElement("div");
              img_voteAverage.className += "vote-circle";
              let img_movieVoteSpan = document.createElement("span");
              img_voteAverage.appendChild(img_movieVoteSpan);
              img_movieVoteSpan.innerHTML = +response.results[i].vote_average;
              imgDiv.appendChild(img_voteAverage);

              let infoBox = document.createElement("div");
              infoBox.className += "infoBox";
              let infoTitle = document.createElement("h3");
              infoBox.appendChild(infoTitle);
              imgDiv.appendChild(infoBox);

              infoTitle.innerHTML = response.results[i].original_title;

              let infoActors = document.createElement("p");
              infoBox.appendChild(infoActors);
              infoActors.innerHTML = "Actors";
          }

          $(ActionDiv).slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true
          });

            $(".slideImg").hover(
                function() {
                    $(this).siblings(".infoBox").css("height", "30%");
                    $(this).siblings(".infoBox").css("display", "block");
           },   function() {
                    $(this).siblings(".infoBox").css("height", "0%");
                    $(this).siblings(".infoBox").css("display", "none");
              }
          );

          $(".infoBox").hover(
              function() {
                  $(this).css("height", "30%");
              }
          );



          $(".slideImg").click(function() {
              getMovie($(this).attr("id"));
          })
        };
        v.send();
      }
};

function getMovie(movieid) {
        var r = new XMLHttpRequest();
        r.open("GET", "http://api.themoviedb.org/3/" + "movie/" +movieid+ "?api_key=3c2e3323fb6685239c36ee9312c7bcb0", true);
        console.log(r.open);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return;
            let response = JSON.parse(r.responseText);

            $(".banner").css("background-image", "url(http://image.tmdb.org/t/p/original" +response.backdrop_path+ ")");
            $(".banner").css("height", "90vh");
            $(".banner").css("background-size", "cover");
            $(".banner").css("box-shadow", "0px 0px 0px");
            $(".playButton").css("display", "block");
            $("#main-content").css("display", "none");
            $(".bannerText").css("display", "none");
            $(".btn").css("display", "none");
            $(".bannerPolygon").css("display", "block");
            let movieDiv = document.createElement("div");
            movieDiv.className += "movieDiv";
            let moviePoster = document.createElement("img");
            moviePoster.src = "http://image.tmdb.org/t/p/original" +response.poster_path;
            movieDiv.appendChild(moviePoster);

            let movieVoteAverage = document.createElement("div");
            movieVoteAverage.className += "vote-circle";
            let movieVoteSpan = document.createElement("span");
            movieVoteSpan.innerHTML = +response.vote_average;
            movieVoteAverage.appendChild(movieVoteSpan);
            movieDiv.appendChild(movieVoteAverage);
            document.body.appendChild(movieDiv);

            let basicInfo = document.createElement("div");
            basicInfo.className += "basicInfo medium-7 medium-offset-5 small-6 small-offset-6";

            let movieTitle = document.createElement("h1");
            movieTitle.innerHTML = response.original_title;
            basicInfo.appendChild(movieTitle);

            let movieYear = document.createElement("h3");
            movieYear.innerHTML = 2016;
            basicInfo.appendChild(movieYear);

            var c = new XMLHttpRequest();
            c.open("GET", "http://api.themoviedb.org/3/" + "movie/" +movieid+ "/credits?api_key=3c2e3323fb6685239c36ee9312c7bcb0", true);
            c.onreadystatechange = function () {
              if (r.readyState != 4 || r.status != 200) return;
              let moviecrew = JSON.parse(c.responseText);

              let movieCrew = document.createElement("ul");
              let movieDirector = document.createElement("li");
              movieDirector.innerHTML = "Director: " +moviecrew.id;
                  let movieWriters = document.createElement("li");
                  movieWriters.innerHTML = "Writers: " +moviecrew.id;
                  movieCrew.appendChild(movieDirector);
                  movieCrew.appendChild(movieWriters);
                  basicInfo.appendChild(movieCrew);
                  movieDiv.appendChild(basicInfo);




            let movieDetails = document.createElement("div");
            movieDetails.className += "movieDetails";
            let row = document.createElement("div");
            row.className += "row";
            let rowdiv1 = document.createElement("div");
            rowdiv1.className += "medium-3 small-6"

            let movieDuration = document.createElement("ul");
            let movieDurationHeading = document.createElement("li");
            movieDurationHeading.innerHTML = "Duration: "
            movieDuration.appendChild(movieDurationHeading);
            let movieDurationLi = document.createElement("li");
            movieDurationLi.innerHTML = +response.runtime;
            movieDuration.appendChild(movieDurationLi);
            rowdiv1.appendChild(movieDuration);

            let movieGenre = document.createElement("ul");
            let movieGenreHeading = document.createElement("li");
            movieGenreHeading.innerHTML = "Genre: "
            movieGenre.appendChild(movieGenreHeading);
            for (var i = 0; i < response.genres.length; i++) {
                let genre = document.createElement("li");
                genre.innerHTML = response.genres[i].name;
                movieGenre.appendChild(genre);
            }
            rowdiv1.appendChild(movieGenre);

            row.appendChild(rowdiv1);
            let rowdiv2 = document.createElement("div");
            rowdiv2.className += "medium-9 small-6"
            row.appendChild(rowdiv2);
            movieDetails.appendChild(row);
            movieDiv.appendChild(movieDetails);

            let rowDivStoryline = document.createElement("div");
            rowDivStoryline.className += "movieStoryline medium-9 small-6 medium-7 medium-offset-5 small-6 small-offset-6"
            let movieStorylineh2 = document.createElement("h2");
            movieStorylineh2.innerHTML = "Plot"
            rowDivStoryline.appendChild(movieStorylineh2);
            let movieStoryline = document.createElement("p");
            movieStoryline.innerHTML = response.overview;
            rowDivStoryline.appendChild(movieStoryline);
            movieDiv.appendChild(rowDivStoryline);

        };
        c.send();

        };
        r.send();
};

$(".logo").click(function() {
    $(".movieDiv").empty();
    window.location = "index.html";
});
