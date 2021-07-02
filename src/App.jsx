import { useState, useRef, useEffect } from 'react';
import NumPrice from './NumPrice';

import './styles.scss';

export default function App() {
	const [price, setPrice] = useState([]);
	const [inp, setInp] = useState('');

	const refInp = useRef(null);

	function onInput(e) {
		if (e.target.value.length <= 4) {
			setInp(e.target.value);
		}
	}

	function addPrice() {
		if (!inp) return;
		console.log(price.length);
		if (price.length >= 24) return;

		setPrice((prev) => [...prev, { id: genID(), val: +inp }]);
		setInp('');
		console.log(refInp.current.focus());
	}

	function removePrice(idPrice) {
		setPrice((prev) => prev.filter((el) => el.id != idPrice));
	}

	function onPrint() {
		window.print();
	}
	function onRemove() {
		setPrice([]);
	}

	function genID() {
		return '' + Math.floor(Math.random() * 100000) + new Date().getTime().toString().slice(-5);
	}

	return (
		<div className='App'>
			<div className='head'>
				<h1>Создай ценники!</h1>
				<h3>Чтобы удалить ценник, кликни на него</h3>
				<div className='inp'>
					<input
						onKeyDown={(e) => (e.code === 'Enter' ? addPrice() : null)}
						ref={refInp}
						value={inp}
						onChange={(e) => onInput(e)}
						type='number'
					/>
					<button onClick={addPrice} className='btn btn_add'>
						+
					</button>
				</div>
				<button onClick={onPrint} className='btn btn_print'>
					Печать
				</button>
				<button onClick={onRemove} className='btn btn_print'>
					Удалить все
				</button>
			</div>

			<div className='price'>
				{price.map((el, id) => {
					return (
						<NumPrice
							removePrice={removePrice}
							el={el}
							id={id}
							key={el.id}
							// key={new Date().getTime() + 'd' + el.id + id}
						/>
					);
				})}
			</div>
		</div>
	);
}
