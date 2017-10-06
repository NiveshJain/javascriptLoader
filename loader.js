/*
Created By : Nivesh Jain (759883)
*/

// IIFE 
(function () {
	console.log("IIFE called");
	console.log(this);

// laoder constructor 
	this.loader = function (){
	
		console.log("loader constructor called");
		console.log(this);

		var defaultsOptions = {
			'zIndex' : 1000,
			'width': 300,
			'height': 400 
			
		}

 // Create options by extending defaults with the passed in arugments
		 if(arguments[0] && typeof arguments[0] === "object"){
		 	console.log("object passed");
		 	this.options = extendDefaults(defaultsOptions,arguments[0]);
		 	console.log(this);

		 }else{
		 	console.log("object not passed:"+arguments[0]);
		 
		 }

		
}

//private access

function startAnimation (loaderObject){
console.log(loaderObject);

}

//private access
function buildLoader() {
console.log("buildLoader called");


 // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

     // Create laoder element
var loaderElement  = document.createElement("div");
console.log("div created");
console.log(loaderElement);

var imageElement = document.createElement("img");
console.log("img created");
console.log(imageElement);

imageElement.setAttribute("src",this.options.imagePath);
imageElement.setAttribute("id","sourceImage");
imageElement.style.width = this.options.width+'%';
imageElement.style.height = this.options.height+'%';

loaderElement.setAttribute("id","imageContainer");
loaderElement.style.zIndex = this.options.zIndex;
loaderElement.style.position = 'fixed';
loaderElement.style.top = '46%';
loaderElement.style.left = '48%';
loaderElement.style.width = '100%';
loaderElement.style.height = '100%';
loaderElement.display = 'block';
loaderElement.style.backgroundColor = 'rgba(0,0,0,0.4)';

imageElement.className = "animate-opacity"

console.log("user img created");
console.log(imageElement);

loaderElement.appendChild(imageElement);

console.log("user div created");
console.log(loaderElement);

	
	 // Append modal to DocumentFragment
    docFrag.appendChild(loaderElement);

    // Append DocumentFragment to body
    document.body.insertBefore(docFrag, document.body.firstChild);
    //document.body.appendChild(docFrag);
  
    this.loaderDivElement = loaderElement;
   
}



 function extendDefaults  (source,userOptions){
		 	console.log("extendDefaults called");
		 	var property ;

		 	for(property in userOptions){
		 		if (userOptions.hasOwnProperty(property)) {
        source[property] = userOptions[property];
      }
    }
    return source;

		 	

		 }


// public access

loader.prototype.start = function(){
	console.log("start called");
	buildLoader.call(this);

}


loader.prototype.stop = function(){
	console.log("stop called");
	console.log(this);
	this.loaderDivElement.remove();


}


}());


