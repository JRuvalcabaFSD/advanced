/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesRaceComponent = (element) => {
	element.innerHTML = 'Loding...';
	const renderValue = (value) => {
		element.innerHTML = value;
	};

	Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(renderValue);
};

const slowPromise = () =>
	new Promise((res) => {
		setTimeout(() => {
			res('Slow Promise');
		}, 2000);
	});
const mediumPromise = () =>
	new Promise((res) => {
		setTimeout(() => {
			res('Medium Promise');
		}, 1500);
	});
const fastPromise = () =>
	new Promise((res) => {
		setTimeout(() => {
			res('fast Promise');
		}, 1000);
	});
