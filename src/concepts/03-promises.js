import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {
	const renderHero = (hero) => {
		element.innerHTML = hero.name;
	};
	const renderTwoHero = (hero1, hero2) => {
		element.innerHTML = `
      <h3>${hero1.name}</h3>
      <h3>${hero2.name}</h3>
    `;
	};
	const renderError = (err) => {
		element.innerHTML = `<h1>Error:</h1><h3>${err}</h3>`;
	};

	const id1 = '5d86371f1efebc31def272e2';
	const id2 = '5d86371f25a058e5b1c8a65e';

	//! Forma1
	// findHerro(id1)
	// 	.then((h1) => {
	// 		findHerro(id2)
	// 			.then((h2) => {
	// 				renderTwoHero(h1, h2);
	// 			})
	// 			.catch(renderError);
	// 	})
	// 	.catch(renderError);

	//! Forma2
	// findHerro(id1)
	// 	.then((hero) => {
	// 		h1 = hero;
	// 		return findHerro(id2);
	// 	})
	// 	.then((hero) => {
	// 		renderTwoHero(h1, hero);
	// 	})
	// 	.catch(renderError);

	//! Promise All
	Promise.all([findHerro(id1), findHerro(id2)])
		.then(([h1, h2]) => {
			renderTwoHero(h1, h2);
		})
		.catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHerro = (id) => {
	return new Promise((res, rej) => {
		const hero = heroes.find((hero) => hero.id === id);
		if (hero) {
			res(hero);
			return;
		}
		rej(`Hero by id ${id} not found`);
	});
};
