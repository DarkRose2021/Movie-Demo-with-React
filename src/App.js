import "./App.css";
import { useState } from "react";
import Movielist from "./components/movielist";


function App() {
	//let searchTerm = ""
	const [searchTerm, setSearchTerm] = useState("");

	const movies = [
		{
			title: "title",
			year: "year",
			genre: "genre",
      imdbTD: "1"
		},
		{
			title: "title2",
			year: "year2",
			genre: "genre2",
      imdbTD: "12"
		},
	];
	const handleSearch = (event) => {
		event.preventDefault();
		console.log("user entered " + searchTerm);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h1>Mr.Fox's Movie Demo List</h1>
			</header>
			<section>
				<form onSubmit={handleSearch}>
					<label></label>
					{/* wire up the input box to a local var  */}
					<input type="text"	placeholder="move title"	value={searchTerm}	onChange={(evt) => setSearchTerm(evt.target.value)}></input>
					<button type="submit">Go</button>
				</form>
			</section>
      <section>
        <Movielist movieData={movies} />
      </section>
			<footer>&copy; Copyright - Katie King - 2023</footer>
		</div>
	);
}

export default App;
