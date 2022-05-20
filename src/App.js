import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Set dùng để lọc ra tất cả các giá trị bị trùng, chỉ lấy 1
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const handleFilterCategories = (category) => {
		if (category === 'all') {
			return setMenuItems(items);
		}

		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our menu</h2>
					<div className="underline"></div>
					<Categories
						handleFilterCategories={handleFilterCategories}
						categories={categories}
					/>
					<Menu items={menuItems} />
				</div>
			</section>
		</main>
	);
}

export default App;
