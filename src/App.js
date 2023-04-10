import "./App.css";
import { useState } from "react";
import Movielist from "./components/movielist";

function App() {
	//let searchTerm = ""
	const [searchTerm, setSearchTerm] = useState("");
	const apiKey = e09dfec3
	const [movies, setMovies] = useState([])

	const movieApiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
	// const movies = [
	// 	{
	// 		title: "title",
	// 		year: "year",
	// 		genre: "genre",
	// 		imdbTD: "1",
	// 	},
	// 	{
	// 		title: "title2",
	// 		year: "year2",
	// 		genre: "genre2",
	// 		imdbTD: "12",
	// 	},
	// ];
	const handleSearch = (event) => {
		event.preventDefault();
		console.log("user entered " + searchTerm);
		
		setMovies([]);
		if(searchTerm && searchTerm != ""){
			loadMovies();
		}
	};

	//call api
	//if/when pizza gets back tell react
	const loadMovies = () =>{
		fetch(movieApiUrl)
			.then(resp => resp.json())
			.then(data =>{
				console.log(data)
				setMovies(data.Search)
			})
			.catch(err => console.log(err))
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Mr.Fox's Movie Demo List</h1>
			</header>
			<section>
				<form onSubmit={handleSearch}>
					<label></label>
					{/* wire up the input box to a local var  */}
					<input
						type="text"
						placeholder="move title"
						value={searchTerm}
						onChange={(evt) => setSearchTerm(evt.target.value)}
					></input>
					<button type="submit">Go</button>
				</form>
			</section>
			<section>
				{
					//ternary bool ? if true : false
					movies && movies.length > 0? <Movielist movieData={movies} />: <div>No movies found. You must enter a valid search term</div>
				}
				
			</section>
			<footer>&copy; Copyright - Katie King - 2023</footer>
		</div>
	);
}

export default App;
