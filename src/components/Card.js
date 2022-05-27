const Cards = props => {
	return (
		<div className='card'>
			<div className='img-container'>
				<img className='img' src={props.item.imageUrl} alt='' />
			</div>
			<div className='card-info'>
				<span>
					<i className='fas fa-flag-checkered'></i>
				</span>
				<span className='location-text'>{props.item.team}</span>
				<span className='map-link'>
					<a href={props.item.stats}>View Stats</a>
				</span>

				<h2>{props.item.title}</h2>
				<span className='country'>{props.item.country}</span>
				<p>
					<span className='last-results'>Last five results:</span>{' '}
					{props.item.description}
				</p>
				<p>
					<span className='last-results'>Pts: </span> {props.item.points}
				</p>
			</div>
		</div>
	);
};

export default Cards;
