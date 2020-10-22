const INITIAL_STATE = {
	sections: [
		{
			title: 'living',
			imageUrl: 'https://i.ibb.co/PCwyDDS/living.png',
			id: 1,
			linkUrl: 'shop/living',
		},
		{
			title: 'eating',
			imageUrl: 'https://i.ibb.co/Wn2Y8KK/eating.png',
			id: 2,
			linkUrl: 'shop/eating',
		},
		{
			title: 'sleeping',
			imageUrl: 'https://i.ibb.co/h9RBZgg/sleeping.png',
			id: 3,
			linkUrl: 'shop/sleeping',
		},
		{
			title: 'working',
			imageUrl: 'https://i.ibb.co/FYPcp3B/working.png',
			// size: 'large',
			id: 4,
			linkUrl: 'shop/working',
		},
		{
			title: 'outdoor',
			imageUrl: 'https://i.ibb.co/ZmyWkgY/outdoor-living.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/outdoor',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
