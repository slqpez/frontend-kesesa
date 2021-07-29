
export function getInfoCountries(country) {
  return fetch(`https://travelbriefing.org/${country}?format=json`)
    .then((res) => res.json())
    .then((data) => data);
}
