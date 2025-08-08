import '../styles/Categories.css'

function Categories({ setActiveCategories, categories, activeCategories }) {
	const handleChange = (e) => {
		// Récupère un tableau des catégories sélectionnées
		const selectedOptions = Array.from(e.target.selectedOptions).map(
			(option) => option.value
		)
		setActiveCategories(selectedOptions)
	}

	return (
		<div className='lmj-categories'>
			<select
				multiple
				value={activeCategories}
				onChange={handleChange}
				className='lmj-categories-select'
			>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategories([])}>Réinitialiser</button>
		</div>
	)
}


export default Categories