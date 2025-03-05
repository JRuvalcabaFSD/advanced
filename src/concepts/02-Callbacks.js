import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
	findHero('5d86371fd55e2e2a30fe1cc', (err, hero) => {
		// element.innerHTML = hero?.name || 'No hay heroe';
		if (err) {
			element.innerHTML = err;
			return;
		}
		element.innerHTML = hero.name;
	});
};

/**
 *
 * @param {String} id
 * @param {(error:String|null,hero:Object)=>void} callback
 */
const findHero = (id, callback) => {
	const hero = heroes.find((hero) => hero.id === id);

	if (!hero) {
		callback(`Herro width id ${id} not found.`);
		return;
	}

	callback(null, hero);
};
