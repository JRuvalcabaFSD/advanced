import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent = async (element) => {
	const heroGenerator = getHeroGenerator();
	let isFinish = false;
	do {
		const { value, done } = await heroGenerator.next();
		isFinish = done;
		if (isFinish) break;
		element.innerHTML = value;
	} while (!isFinish);
};

async function* getHeroGenerator() {
	for (const hero of heroes) {
		await sleep();
		yield hero.name;
	}
	return 'No hay mas heroes';
}

const sleep = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 500);
	});
};
