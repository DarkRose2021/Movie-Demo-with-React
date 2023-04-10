import React from "react";

//generates html showing a list of movies
//parent will pass an array via props
const Movielist = (props) => {
	const showMovieDetails = (movie) =>{
		console.log(movie)
	}
	return (
		<div>
			<h2>Movie Results</h2>
			<ol>
				{props.movieData?.map((movie) => (
					<li key={movie.imdbTD}><a href="#" onClick={showMovieDetails(movie)}>{movie.Title}</a></li>
				))}
			</ol>
		</div>
	);
};

export default Movielist;
