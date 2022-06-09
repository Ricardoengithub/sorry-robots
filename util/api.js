export const url = "https://rickandmortyapi.com/graphql";

export const fetchApi = (query) => {
  const response = fetch(url, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
    body: JSON.stringify({query: query})
  });
  return response;
};

export default fetchApi;