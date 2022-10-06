//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('ul').innerHTML = localStorage.getItem('books')
const li = document.createElement('li')
function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)

        if(!localStorage.getItem('books')){
          localStorage.setItem("books", data.title)
          
         
          document.querySelector("ul").innerHTML = localStorage.getItem("books" /n)

        }

      else{

        let mauj = localStorage.getItem('books')+ " ; " + data.title
        localStorage.setItem('books', mauj)
       

        
        document.querySelector('ul').innerHTML = localStorage.getItem('books' /n)

      }

        
        
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

