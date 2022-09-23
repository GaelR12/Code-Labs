


fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

   
    console.log(data.setup);
    let setupElement = document.getElementById('setup')
    setupElement.innerText=data.setup
    
  });