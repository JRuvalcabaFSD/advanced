/**
 *
 * @param {HTMLDivElement} element
 */
export const generetionFunctionsComponent = (element) => {
	const genId = idGenerator();

	const button = document.createElement('button');
	button.innerText = 'Click me';
	element.append(button);

	const renderButton = () => {
		const { value } = genId.next();
		button.innerText = `Click ${value}`;
	};

	button.addEventListener('click', renderButton);
};

function* idGenerator() {
	let curretId = 0;
	while (true) {
		yield ++curretId;
	}
}

function* myFirstGeneretorFunction() {
	yield 'Primer valor';
	yield 'Segundo valor';
	yield 'Tercer valor';
	yield 'Cuarto valor';
	return 'Ya no hay valores';
}
