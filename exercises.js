
function fetchPosts() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data); 
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  
  fetchPosts()
    .then((posts) => {
      console.log('Posts:', posts); 
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
    });
  