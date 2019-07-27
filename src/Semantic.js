import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Container from 'react-materialize/lib/Container';

const FormExampleForm = () => (
	<Container>
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
	</Container>
);

export default FormExampleForm;
