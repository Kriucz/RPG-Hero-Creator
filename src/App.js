import React, { useState } from 'react'
import AddUser from './components/AddUser'
import Card from './components/Card'
function App() {
	// const [userData, setUserData] = useState([{ name: '', age: '' }])
	const [list, setList] = useState([
		{ id: '1a', name: 'Dovahkiin', age: '30' },
		{ id: '2a', name: 'Geralt of Rivia', age: '96' },
	])
	const addPersonHandler = userData => {
		if (userData.name === '') {
			alert('Add name and age')
		} else if (userData.age === 0 || userData.age < 0) {
			alert('Age must be > 0')
		} else {
			setList(initialList => {
				const updatedList = [...initialList]
				updatedList.unshift({ id: Math.random().toString(), name: userData.name, age: userData.age })
				return updatedList
			})
		}
	}

	const deleteHeroHandler = thatId => {
		setList(prevHero => {
			const updatedList = prevHero.filter(hero => hero.id !== thatId)
			return updatedList
		})
	}

	return (
		<div>
			<AddUser onSaveData={addPersonHandler} />
			<ul>
				{list.map(item => (
					<Card key={item.id} id={item.id} name={item.name} age={item.age} onDelete={deleteHeroHandler} />
				))}
			</ul>
		</div>
	)
}

export default App
