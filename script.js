document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        { title: "Anime 1", image: "solo leveling.jpg", description: "Solo Leveling -ReAwakened-", link: "https://youtu.be/BIBXA1Tpp8U?si=gr3IGmFegexFKkg0" },
        { title: "Anime 2", image: "girls band cry.jpg", description: "Girls Band Cry", link: "https://youtu.be/sDY0qXuz4BY?si=UbofRaaoRDFQug5Q" },
        { title: "Anime 3", image: "tower of god.jpg", description: "Tower Of God -workshop Battle-", link: "https://youtu.be/AAKqxicQeN8?si=z4hFIIK4Rr2r3mLl" },
        { title: "Anime 4", image: "dan da dan.jpg", description: "Dan Da Dan", link: "https://youtu.be/6Kj1hc54nu0?si=lZlXhAxBplGGS-9G" },
        { title: "Anime 5", image: "demon lord.jpg", description: "Demon Lord Retry! R", link: "https://youtu.be/LfumzgO3aXw?si=KIveKv_L3NFC9Uia" },
        { title: "Anime 6", image: "nina the starry bride.jpg", description: "Nina the Starry Bride", link: "https://youtu.be/lLHlMf4q2MU?si=0acOmWBdxeb2hl6_" },
        { title: "Anime 7", image: "365 days to the wedding.jpg", description: "365 Days To The Wedding ", link: "https://youtu.be/BV3DvCODx64?si=6QGhrmsmdWn-5X5U" },
        { title: "Anime 8", image: "demon lord 2099.jpg", description: "Demon Lord 2099", link: "https://youtu.be/xe0r9RX4YFg?si=Y1IuHsqVc9LS3FBJ" },
        { title: "Anime 9", image: "blue exorcist.jpg", description: "Blue Exorcist", link: "https://youtu.be/-R5up3H6WLc?si=Js4qaxQJxhmnF84r" },
        { title: "Anime 10", image: "haikyuu.jpg", description: "HAIKYU!! The Dumpster Battle", link: "https://youtu.be/jlU8bA9LtTM?si=R8LPcwcg8dDqYjdd" },
    
    ];

    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <a href ="${movie.link} target="_blank"> 
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
        `;

        movieList.appendChild(movieCard);
    });
});
