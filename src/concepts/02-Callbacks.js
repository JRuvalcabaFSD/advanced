import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
	const id1 = '5d86371fd55e2e2a30fe1cc3';
	const id2 = '5d86371fd55e2e2a30fe1ccb1';

	findHero(id1, (err, hero1) => {
		// element.innerHTML = hero?.name || 'No hay heroe';
		if (err) {
			element.innerHTML = err;
			return;
		}

		findHero(id2, (err, hero2) => {
			if (err) {
				element.innerHTML = err;
				return;
			}

			element.innerHTML = `${hero1.name} / ${hero2.name}`;
		});
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
