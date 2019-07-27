import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './App.css';
import { Container, Dropdown, Button, NavItem } from 'react-materialize';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import FormExampleForm from './Semantic.js';
import ModalSignup from './Modal.js';
import 'semantic-ui-css/semantic.min.css';
import LoginModal from './LoginModal.js';
import CourseModal from './CourseModal';

import TPortal from './TPortal.js';
import { Accordion, Icon } from 'semantic-ui-react';
import AccordionExampleStyled from './CourseRegistration.js';
import Registration from './Registration';

import ButtonAppBar from './Pages/LandingPage.js';
import MenuExampleTabularOnLeft from './SideNav.js';
import StickyFooter from './StickyFooter.js';
import Dashboard from './SelectingTheme.js';

var array1 = [ 'a', 'b', 'c', 'd' ];

const divStyle = {
	display: 'flex',
	flexDirection: 'column'
};

class App extends Component {
	render() {
		return (
			<div>
				<Dashboard />
				{/* <ButtonAppBar />
				<Container>
					<div>
						<MenuExampleTabularOnLeft />
					</div>
					<div>
						<Registration />
					</div>
					<div style={{ marginTop: '25px' }}>
						<ModalSignup />
						<AccordionExampleStyled />
					</div>
					<div style={{ marginTop: '25px' }}>
						<LoginModal />
					</div>
					<div style={{ marginTop: '25px' }}>
						<CourseModal />
					</div>
				</Container> */}
			</div>
		);
	}
}

export default App;
