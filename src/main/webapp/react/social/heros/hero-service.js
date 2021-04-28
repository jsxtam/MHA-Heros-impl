const HEROS_URL = "http://localhost:8080/api/heros"

// retrieve all heros from the server
export const findAllHeros = () =>
    fetch(HEROS_URL)
    .then(response => response.json())

// retrieve a single hero by their ID
export const findHeroById = (id) =>
    fetch(`${HEROS_URL}/${id}`)
    .then(response => response.json())

// delete a hero by their ID
export const deleteHero = (id) =>
    fetch(`${HEROS_URL}/${id}`, {
      method: "DELETE"
    })

// create a new hero
export const createHero = (hero) =>
    fetch(HEROS_URL, {
      method: 'POST',
      body: JSON.stringify(hero),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// update a hero by their ID
export const updateHero = (id, hero) =>
    fetch(`${HEROS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(hero),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllHeros,
  findHeroById,
  deleteHero,
  createHero,
  updateHero
}
