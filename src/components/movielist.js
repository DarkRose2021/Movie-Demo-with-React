import React from "react";

//generates html showing a list of movies
//parent will pass an array via props
const Movielist = (props) => {
	return (
		<div>
			<h2>Movie Results</h2>
			<ol>
				{
          props.movieData?.map((movie) =>(
            <li key={movie.imdbTD}>
              {movie.title}
            </li>
          ))
        }
			</ol>
		</div>
	);
};

export default Movielist;
