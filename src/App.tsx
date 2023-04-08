import { FC, useState } from 'react'
import styles from './styles/app.module.css'
import Pizza from './models/Pizza'
import AddPizzaForm from './components/AddPizzaForm'
import PizzasList from './components/PizzasList'

const App: FC = () => {
	const [pizzas, setPizzas] = useState<Pizza[]>([])

	const addPizza = (pizza: Pizza) => {
		setPizzas([...pizzas, pizza])
	}

	const updatePizza = (pizza: Pizza) => {
		setPizzas(pizzas.map((item) => (item.id === pizza.id ? pizza : item)))
	}

	const deletePizza = (id: number) => {
		setPizzas(pizzas.filter((pizza) => pizza.id !== id))
	}

	console.log(pizzas)

	return (
		<div className={styles.app}>
			<div className={styles.wapper}>
				<h1 className={styles.title}>Pizzas</h1>
				<AddPizzaForm addPizza={addPizza} />
				<PizzasList
					pizzas={pizzas}
					updatePizza={updatePizza}
					deletePizza={deletePizza}
				/>
			</div>
		</div>
	)
}

export default App
