import React from 'react';
import { Button, Header, Image, Modal, Form, Message } from 'semantic-ui-react';
import AccordionExampleStyled from './CourseRegistration';

const Registration = () => (
	<Modal trigger={<Button color="blue">Course Registration</Button>} centered={false} style={{ height: '50%' }}>
		<Modal.Header>
			<h1>Course Registration</h1>
			<h3>Please choose the class you like to register for</h3>
		</Modal.Header>
		<Modal.Content image>
			<div>
				<AccordionExampleStyled />
			</div>
		</Modal.Content>
	</Modal>
);

export default Registration;
