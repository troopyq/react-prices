function NumPrice({ removePrice, id, el }) {
	return (
		<div onClick={() => removePrice(el.id)} className='num'>
			{el.val}
		</div>
	);
}

export default NumPrice;
