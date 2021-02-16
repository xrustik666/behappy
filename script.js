let posts = document.querySelector('.posts');
let postInput = document.querySelector('.post-input');
let form = document.querySelector('.todo-form');

let makeElement = function (tagName, className) {
	let element = document.createElement (tagName) ;
	element.classList.add (className) ;
	return element ;
}

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newPost = makeElement ('p', 'post') ;
  newPost.textContent = postInput.value ;
  
  posts.appendChild (newPost) ;
  postInput.value = '' ;
};