import React from 'react';

const Categories = ({ handleFilterCategories, categories }) => {
	return (
		<div className="btn-container">
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						type="button"
						className="filter-btn"
						onClick={() => {
							handleFilterCategories(category);
						}}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
