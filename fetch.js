async function fetchPosts() {
    //const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  
    try {
      
      const response = await fetch('https://reqres.in/api/users',{ 
        method: 'POST',
        header : 'content/application/json',
        body:JSON.stringify({
          userId:1,
          email:"abc@gmail.com",
          title:"student_detail"
        
            
        })
      })
      const posts =  await response.json();
      console.log(posts);


    } catch (error) {

      console.error('Error fetching posts:', error);


    }
  };
      

      

  
     
  
      
  

  fetchPosts();
  

  //https://pokeapi.co/api/v2/pokemon?offset=10&limit=10̀