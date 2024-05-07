import { HTML5Backend } from 'react-dnd-html5-backend';
import { MouseTransition, TouchTransition } from 'react-dnd-multi-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

export const HTML5toTouch = {
	backends: [
		{
			id: 'html5',
			backend: HTML5Backend,
			transition: MouseTransition,
		},
		{
			id: 'touch',
			backend: TouchBackend,
			options: { enableMouseEvents: true },
			preview: true,
			transition: TouchTransition,
		},
	],
};

export const DATA = [
	{
		id: 'dd540381-90be-4d95-a441-2a18181f2378',
		title: 'Column Test 1',
		rows: [
			{
				id: '874585d7-e613-4977-9f27-d5591d7cff27',
				title: 'Row Test 1',
			},
		],
	},
	{
		id: 'b010149b-0cb2-40df-bce7-ba24109f2a74',
		title: 'Column Test 2',
		rows: [
			{
				id: '26724825-4d0d-4a03-85be-c4a114f2a531',
				title: 'Row Test 2',
			},
		],
	},
	{
		id: '31955062-ed95-4734-b1d2-5938136e1b00',
		title: 'Column Test 3',
		rows: [
			{
				id: '68819633-b7ce-4c55-8e46-69676ca4f18d',
				title: 'Row Test 3',
			},
			{
				id: 'fb597268-ad3b-44ae-83ad-2f0055f96ea4',
				title: 'Row Test 4',
			},
		],
	},
	{
		id: '91fbc092-95f7-494b-87c7-e71440a5a2ef',
		title: 'Column Test 4',
		rows: [
			{
				id: '3fe2871c-7a5a-48d5-93d0-d70ca20cca72',
				title: 'Row Test 5',
			},
			{
				id: '0d85b3d4-0cda-48a3-8538-031265dab9a7',
				title: 'Row Test 6',
			},
			{
				id: '3b018870-7a5f-466a-ac33-4c213088acc2',
				title: 'Row Test 7',
			},
		],
	},
	{
		id: '679b7148-04f3-4909-8284-4ddf4f6b80aa',
		title: 'Column Test 5',
		rows: [
			{
				id: '8bf64294-8d7a-42c2-aa20-d5889190789d',
				title: 'Row Test 8',
			},
			{
				id: '393d1d1a-530c-4e89-bd1f-aaa408bee265',
				title: 'Row Test 9',
			},
		],
	},
	{
		id: '608cbdf3-7e80-47a2-b9e4-51c8a37612a6',
		title: 'Column Test 6',
		rows: [
			{
				id: 'ee15e9c8-b5a6-450e-b546-c1a8e8f19e45',
				title: 'Row Test 10',
			},
		],
	},
];
