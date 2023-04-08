import { FC, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import styles from '../styles/pizza-item.module.css'
import Pizza from '../models/Pizza'
import EditPizzaForm from './EditPizzaForm'

interface PizzaItemProps {
	pizza: Pizza
	updatePizza: (pizza: Pizza) => void
	deletePizza: (id: number) => void
}

const PizzaItem: FC<PizzaItemProps> = ({
	pizza,
	updatePizza,
	deletePizza,
}) => {
	const [edit, setEdit] = useState<boolean>(false)

	const handleEdit = () => {
		setEdit(!edit)
	}

	const handleDelete = () => {
		deletePizza(pizza.id)
	}

	return (
		<div className={styles.pizzaItem}>
			<img
				className={styles.img}
				src={`images/${pizza.img}.png`}
				alt={pizza.img}
			/>
			<h4 className={styles.title}>{pizza.title}</h4>
			<span className={styles.price}>{`${pizza.price} rub.`}</span>
			<div className={styles.controls}>
				<button onClick={handleEdit}>
					<AiFillEdit />
				</button>
				<button onClick={handleDelete}>
					<AiFillDelete />
				</button>
			</div>

			{edit && (
				<EditPizzaForm
					data={pizza}
					updatePizza={updatePizza}
					handleEdit={handleEdit}
				/>
			)}
		</div>
	)
}

export default PizzaItem
