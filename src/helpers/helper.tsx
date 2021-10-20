export const modifyLocalData = (data, index) => {
	for (let i = 0; i < data.length - 1; i++) {
		if (index === data.indexOf(data[i])) {
			data[i].title += ' [Viewed]';
			break;
		}
	}
	localStorage.setItem('data', JSON.stringify(data));
};

export const listenEvent = () => {
	window.addEventListener('storage', (e) => {
		console.log('from event');
		console.log(e.key, e.oldValue, e.newValue, e.url, e.storageArea);
	});
};
