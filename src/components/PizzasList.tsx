import { FC } from 'react'
import styles from '../styles/pizzas-list.module.css'
import Pizza from '../models/Pizza'
import PizzaItem from './PizzaItem'

interface PizzasListProps {
	pizzas: Pizza[]
	updatePizza: (pizza: Pizza) => void
	deletePizza: (id: number) => void
}

const PizzasList: FC<PizzasListProps> = ({
	pizzas,
	updatePizza,
	deletePizza,
}) => {
	return (
		<div className={styles.pizzasList}>
			{pizzas.map((pizza) => (
				<PizzaItem
					pizza={pizza}
					updatePizza={updatePizza}
          deletePizza={deletePizza}
					key={pizza.id}
				/>
			))}
		</div>
	)
}

export default PizzasList
