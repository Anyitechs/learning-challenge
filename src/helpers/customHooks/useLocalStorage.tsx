import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
	const saved = JSON.parse(localStorage.getItem(key) || '{}');
	return saved || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
