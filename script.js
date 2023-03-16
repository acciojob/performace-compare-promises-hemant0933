// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchWithPromiseAll() {
			const startTime = performance.now();
			
			Promise.all(apiUrls.map(url => fetch(url)))
				.then(() => {
					const endTime = performance.now();
					const timeTaken = (endTime - startTime).toFixed(2);
					
					document.getElementById("output-all").textContent = `${timeTaken} ms`;
				})
				.catch(error => console.log(error));
		}


function fetchWithPromiseAny() {
			const startTime = performance.now();
			
			Promise.any(apiUrls.map(url => fetch(url)))
				.then(() => {
					const endTime = performance.now();
					const timeTaken = (endTime - startTime).toFixed(2);
					
					document.getElementById("output-any").textContent = `${timeTaken} ms`;
				})
				.catch(error => console.log(error));
		}

