import React, { Component } from 'react';
import { Form, Container, Button, Card, Divider } from "semantic-ui-react"
import a from "./assets/videochat/1.jpg"
import b from "./assets/videochat/2.jpg"
import c from "./assets/videochat/3.jpg"
import d from "./assets/videochat/4.jpg"
import e from "./assets/videochat/5.jpg"
import f from "./assets/videochat/6.jpg"
import g from "./assets/videochat/7.jpg"
import h from "./assets/videochat/8.jpg"
import i from "./assets/videochat/9.jpg"
import j from "./assets/videochat/10.jpg"
import k from "./assets/videochat/11.jpg"
import l from "./assets/videochat/12.jpg"
import SectionWork from "./components/ui/sections/SectionWork"


class Groupchat extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length - 1]}`
		} else {
			var urll = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${urll}`
		}
	}

	render() {
		return (
			<>
			<Divider horizontal section>We do not meet people by accident. They are meant to cross our path for a reason</Divider>
				<Container>
					<Card.Group itemsPerRow={4}>
						<Card color='red' image={a} />
						<Card color='orange' image={b} />
						<Card color='yellow' image={c} />
						<Card color='olive' image={d} />
						<Card color='green' image={e} />
						<Card color='teal' image={f} />
						<Card color='blue' image={g} />
						<Card color='violet' image={h} />
						<Card color='purple' image={i} />
						<Card color='pink' image={j} />
						<Card color='brown' image={k} />
						<Card color='grey' image={l} />
					</Card.Group>
				</Container>
				<Container>
				<div>
					<h1>Hello World!</h1>
					<p>Please insert your invitation link or start new meeting </p>
				</div>

				<div>
					<p>Start or join a meeting</p>
					<Form>
					<Form.Input color = "red" placeholder="paste invitation URL or Start new meetings " onChange={e => this.handleChange(e)} />
					</Form>
					<Divider></Divider>
					<Button color = "green" onClick={this.join}>Start New VideoChats</Button>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<Divider horizontal>Share your concerns with Support</Divider>
				<SectionWork/>
				</Container>
				
			</>
		)
	}
}

export default Groupchat;