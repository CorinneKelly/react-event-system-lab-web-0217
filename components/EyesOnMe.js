import React from 'react'

class EyesOnMe extends React.Component {
	constructor(){
		super()

		this.focusing = this.focusing.bind(this)
		this.blurring = this.blurring.bind(this)
	}

	focusing(){
		console.log("Good!")
	}

	blurring(){
		console.log("Hey! Eyes on me!")
	}

	render(){
		return(
			<div>
				<button onFocus={this.focusing} onBlur={this.blurring}>IISBUTTON</button>
			</div>
		)
	}
}

module.exports = EyesOnMe