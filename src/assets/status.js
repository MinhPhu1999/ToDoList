import inprogress from './svgs/inprogress.svg';
import completed from './svgs/completed.svg';
import canceled from './svgs/canceled.svg';

const listStatus = [
	{
		icon: inprogress,
		title: 'In Progress',
	},
	{
		icon: completed,
		title: 'Completed',
	},
	{
		icon: canceled,
		title: 'Canceled',
	},
];

export default listStatus;
