/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent2 = async (element) => {
	console.time('start');
	// const v1 = await slowPromise();
	// const v2 = await mediumPromise();
	// const v3 = await fastPromise();

	const [v1, v2, v3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()]);
	console.timeEnd('start');

	element.innerHTML = `
    Value1: ${v1} <br/>
    Value2: ${v2} <br/>
    Value3: ${v3} <br/>

  `;
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
