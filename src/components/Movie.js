import './Movie.css';

const Movie = (props) => {
	const { Title, Year, Type, Poster } = props;
	return (
		<div className="card">
			{Poster === 'N/A' ? (
				<img src={`https://via.placeholder.com/300x444.png?text=${Title}`} alt={Title} />
			) : (
				<img src={Poster} alt={Title} />
			)}

			<div>
				<h3>{Title}</h3>
				<p>
					{Year} <span>{Type}</span>
				</p>
			</div>
		</div>
	);
};

export default Movie;
