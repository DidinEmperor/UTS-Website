document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        { title: "Anime 1", image: "solo leveling.jpg", description: "Solo Leveling -ReAwakened-" },
        { title: "Anime 2", image: "girls band cry.jpg", description: "Girls Band Cry" },
        { title: "Anime 3", image: "tower of god.jpg", description: "Tower Of God -workshop Battle-" },
        { title: "Anime 4", image: "dan da dan.jpg", description: "Dan Da Dan" },
        { title: "Anime 5", image: "demon lord.jpg", description: "Demon Lord Retry! R" },
        { title: "Anime 6", image: "nina the starry bride.jpg", description: "Nina the Starry Bride" },
        { title: "Anime 7", image: "365 days to the wedding.jpg", description: "365 Days To The Wedding " },
        { title: "Anime 8", image: "demon lord 2099.jpg", description: "Demon Lord 2099" },
        { title: "Anime 9", image: "blue exorcist.jpg", description: "Blue Exorcist" },
        { title: "Anime 10", image: "haikyuu.jpg", description: "HAIKYU!! The Dumpster Battle" },
    
    ];

    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
        `;

        movieList.appendChild(movieCard);
    });
});
