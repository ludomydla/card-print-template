import data from "./data.json";

// define here what data the Card will have
//type Card = unknown;
type Card = {
	
};

// process json or just generate array, that will be used to render cards
const processData = () => {
	// console.log('data', data);
	const colors = ['yellow', 'red', 'green', 'blue', 'violet'];
	const result = [];

	colors.forEach( (color) => {
		result.push(...Array(1).fill({
			color: color,
			sign: '++'
		}))
		result.push(...Array(5).fill({
			color: color,
			sign: '+'
		}))
		result.push(...Array(2).fill({
			color: color,
			sign: '-'
		}))
	})

	result.push(...Array(5).fill({color: 'rainbow', sign: '+'}));
	result.push(...Array(2).fill({color: 'rainbow', sign: '-'}));
	result.push(...Array(3).fill({color: 'rainbow', sign: '^'}));
	result.push(...Array(2).fill({color: 'rainbow', sign: '^^'}));


	
	return result;
}

export default processData;
