exports.handler = async function (event) {
  const apiKey = process.env.API_KEY;
  const query = event.queryStringParameters.query;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}`,
    options
  );
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
