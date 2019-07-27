import React from 'react';
import { Button, Header, Icon, Modal, Form, Message } from 'semantic-ui-react';

// const LoginModal = () => (
// 	<Modal trigger={<Button>LogIn</Button>} centered={false}>
// 		<Modal.Header>
// 			<h1>Student Login</h1>
// 			<h3>Please enter your email and password to login</h3>
// 		</Modal.Header>
// 		<Modal.Content image>
// 			<Form>
// 				<Form.Input label="Email" placeholder="joe@schmoe.com" />
// 				<Form.Field>
// 					<label>Password</label>
// 					<input placeholder="Password" />
// 				</Form.Field>

// 				<Button type="submit">Submit</Button>
// 			</Form>
// 		</Modal.Content>
// 	</Modal>
// );

// export default LoginModal;

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showModal: false
    };
  }

  handleChangeForms = (e, { value }) => {
    this.setState({ password: value });
  };
  handleChangeForm = (e, { value }) => {
    this.setState({ email: value });
  };

  handleCloseButton(evt) {
    evt.preventDefault();
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { password, email, showModal } = this.state;

    return (
      <Modal
        centered={false}
        closeIcon
        onClose={this.closeModal}
        open={showModal}
        trigger={
          <Button onClick={() => this.setState({ showModal: true })}>
            <Icon className="paper plane" />
            Submit
          </Button>
        }
      >
        <Modal.Header>
          <h1>Student Login</h1>
          <p>Please enter your email and password to login</p>
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Password"
              placeholder="Password"
              value={password}
              onChange={this.handleChangeForms}
            />
            <Form.Input
              label="Email"
              placeholder="Email"
              value={email}
              onChange={this.handleChangeForm}
            />
            <Button onClick={evt => this.handleCloseButton(evt)}>
              Submit
              <Icon className="paper plane" style={{ paddingLeft: '7px' }} />
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default LoginModal;
