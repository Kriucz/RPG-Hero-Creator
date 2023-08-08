function Card(props) {

	const deleteHandler = () => {
		props.onDelete(props.id);
	  };

		return (
			<li className={'cards'}>
				<p>{props.name}</p>
				<p>{props.age}</p>
				<button onClick={deleteHandler} className="delete">X</button>
			</li>
		)
	
}

export default Card
