// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.


const makeCard = (breed, dogUrl) => {

	const card = document.createElement('div');
	card.className = 'dog-card';

	const img = document.createElement('img');
	img.className = 'dog-image';
	img.src = dogUrl;

	const h3 = document.createElement('h3');
	h3.textContent = `Breed: ${breed}`;

	card.appendChild(img);
	card.appendChild(h3);

	return card;
};


const fetchDogs = (breed) => {

	axios.get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
		.then(response => {
			const dogList = response.data.message;

			dogList.forEach(dog => {
				const card = makeCard(breed, dog);
				dogClass.appendChild(card);
			});
		})
		.catch(error => {
			console.log('Could not fetch dogos');
			console.log(error);
		});

};



const dogClass = document.querySelector('.dogs');
const getButton = document.querySelector('#getdogs');

const getBreed = 'husky';

getButton.addEventListener('click', () => fetchDogs(getBreed) );

