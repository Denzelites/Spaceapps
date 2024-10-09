/** @type {import('./$types').PageLoad} */

const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

export async function load({ fetch }) {
  const planetsData = await Promise.all(
    planetNames.map(async (name) => {
      const res = await fetch(`https://planets-17f2.onrender.com/planets/getPlanet?name=${name}`);
      return res.json();  
    })
  );

  return {
    prop: { planetsData }  
  };
}
