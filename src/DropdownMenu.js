import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
	{ key: 1, text: 'Coourse-101', value: 1 },
	{ key: 2, text: 'Coourse-102', value: 2 },
	{ key: 3, text: 'Coourse-103', value: 3 },
	{ key: 4, text: 'Coourse-104', value: 4 }
];

const DropdownExampleSimple = () => (
	<Menu compact color="blue">
		<Dropdown clearable options={options} selection placeholder="Choose your class" fluid />
	</Menu>
);

export default DropdownExampleSimple;
