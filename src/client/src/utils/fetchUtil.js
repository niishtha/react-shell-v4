function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
	return response.json();
}

export default function fetchData(url, callback) {
	return fetch(url).then(function(response) {
		return response.json();
	}).then(function(res) {
		console.log('Request successful', res);
		return res
	//   })
	//   .catch(function(error) {
	//     log('Request failed', error)
	});
}
