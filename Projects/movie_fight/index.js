const autoCompleteConfig = {
  renderOption(movie) {
    const { Poster: poster, Title: title, Year: year } = movie;

    const img = document.createElement("img");
    img.src = poster === "N/A" ? "" : poster;

    return `${img.outerHTML} ${title} (${year})`;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "fdfa5c3a",
        s: searchTerm,
      },
    });

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  },
};

createAutoComplete({
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
  ...autoCompleteConfig,
});

createAutoComplete({
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
  ...autoCompleteConfig,
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fdfa5c3a",
      i: movie.imdbID,
    },
  });

  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
    } else {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
  });
};

const movieTemplate = (movieDetails) => {
  const {
    Poster: poster,
    Title: title,
    Genre: genre,
    Plot: plot,
    Awards: awards,
    BoxOffice: boxOffice,
    Metascore: metascore,
    imdbRating,
    imdbVotes,
  } = movieDetails;

  const dollars = parseInt(boxOffice.replace(/\$/g, "").replace(/,/g, ""));
  const metaScore = parseInt(metascore);
  const imdbR = parseInt(imdbRating);
  const imdbV = parseInt(imdbVotes.replace(/,/g, ""));
  const awardsNumber = awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);

    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);

  return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${title}</h1>
                    <h4>${genre}</h4>
                    <p>${plot}</p>
                </div>
            </div>
        </article>
        <article data-value="${awardsNumber}" class="notification is-primary">
            <p class="title">${awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value="${dollars}" class="notification is-primary">
            <p class="title">${boxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value="${metaScore}" class="notification is-primary">
            <p class="title">${metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value="${imdbR}" class="notification is-primary">
            <p class="title">${imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value="${imdbV}" class="notification is-primary">
            <p class="title">${imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};
