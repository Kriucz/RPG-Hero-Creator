import React, { useState } from 'react'

function AddUser(props) {
	const [nameAdd, setNameAdd] = useState('')
	const [ageAdd, setAgeAdd] = useState('')

	const createPeopleHandler = e => {
		e.preventDefault()
		const exportPersonData={
			name: nameAdd,
			age: +ageAdd
		}
		props.onSaveData(exportPersonData)
	}

	const hangeHandler = (input, value) => {
		if (input == 'Name') {
			setNameAdd(value)
		} else if (input == 'Age') {
			setAgeAdd(value)
		}
	}
	return (
		<form onSubmit={createPeopleHandler} className={'form'}>
			<h2>RPG Hero Creator</h2>
			<label htmlFor=''>
				Name:
				<input type='text' onChange={e => hangeHandler('Name', e.target.value)} />
			</label>
			<label htmlFor=''>
				Age:
				<input type='number' onChange={e => hangeHandler('Age', e.target.value)} />
			</label>
			<div className={'button-area'}>
				<button className='add-hero' type='submit'>Add Hero</button>
			</div>
				<p>version 0.1 wait for updates =D</p>
		</form>
	)
}

export default AddUser
