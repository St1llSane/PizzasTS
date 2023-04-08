import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from '../styles/add-pizza-form.module.css'
import CreatePizza from '../models/CreatePizza'
import Pizza from '../models/Pizza'

interface AddPizzaFormProps {
	addPizza: (pizza: Pizza) => void
}

const initialState = {
	title: '',
	price: '',
	img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
	const [pizza, setPizza] = useState<CreatePizza>(initialState)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setPizza({
			...pizza,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { title, price, img } = pizza

		if (title && price && img) {
			addPizza({
				id: Date.now(),
				title,
				price: Number(price),
				img,
			})
			setPizza(initialState)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='text'
				value={pizza.title}
				name='title'
				placeholder='Title'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				value={pizza.price}
				name='price'
				placeholder='Price'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				value={pizza.img}
				name='img'
				placeholder='Image'
				onChange={handleChange}
			/>
			<button className={styles.button} type='submit'>
				Add Pizza
			</button>
		</form>
	)
}

export default AddPizzaForm
