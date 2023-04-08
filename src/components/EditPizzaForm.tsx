import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from '../styles/edit-pizza-form.module.css'
import CreatePizza from '../models/CreatePizza'
import Pizza from '../models/Pizza'

interface EditPizzaFormProps {
	data: Pizza
	updatePizza: (pizza: Pizza) => void
	handleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
	data,
	updatePizza,
	handleEdit,
}) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setEditPizza({
			...editPizza,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { title, price, img } = editPizza

		if (title && price && img) {
			updatePizza(editPizza)
			handleEdit()
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='text'
				value={editPizza.title}
				name='title'
				placeholder='Title'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				value={editPizza.price}
				name='price'
				placeholder='Price'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				value={editPizza.img}
				name='img'
				placeholder='Image'
				onChange={handleChange}
			/>
			<button className={styles.button} type='submit'>
				Accept
			</button>
		</form>
	)
}

export default EditPizzaForm
