import React from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import FormExampleForm from './Semantic.js';

const ModalSignup = () => (
	<Modal trigger={<Button>signUp</Button>} centered={false}>
		<Modal.Header>
			<h1>Student Signup</h1>
			<h3>Please enter required information to signup.</h3>
		</Modal.Header>
		<Modal.Content image>
			<Form>
				<Form.Field>
					<label>First Name</label>
					<input placeholder="First Name" />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder="Last Name" />
				</Form.Field>
				<Form.Input label="Email" placeholder="joe@schmoe.com" />
				<Form.Field>
					<label>Password</label>
					<input placeholder="Password" />
				</Form.Field>

				<Button type="submit">Submit</Button>
			</Form>
		</Modal.Content>
	</Modal>
);

export default ModalSignup;
