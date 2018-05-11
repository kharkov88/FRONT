import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const mock = {
	users: [
		{
			foto: '/face1.jpg',
			name: 'Bob234'
		},
		{
			foto: '/face2.jpg',
			name: 'Martin234'
		},
		{
			foto: '/face3.jpg',
			name: 'Saul34'
		},
		{
			foto: '/face3.jpg',
			name: 'Saul34'
		}
	]
}

export const Search = () => (
  <div id='content-people'>
  	{
  		mock.users.map((item, i) => {
  			return <User {...item} key={i}/>
  		})
  	}
  </div>
)

const User = ({foto, name}) => {
	return (
		<Col xs={12} sm={4}>
			<Link to={`/people/${name}`}>
				<div><Image src="/static/thumbnail.png" rounded /></div>
				<div>{name}</div>
			</Link>
		</Col>
	)
}