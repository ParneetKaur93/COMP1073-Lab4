let URL = 'https://parneetkaur93.github.io/COMP1073-Lab4/';
let request = new XMLHttpRequest();
request.open('GET',URL+'main.json');
request.responseType = 'json';
request.send();

request.onload = function(){
    let product = request.response;
    strangeProducts(product);
};

function strangeProducts(jsonObj) {
    let strangeProducts = jsonObj.Products;
    for(let i = 0; i<strangeProducts.length; i++){
        let articleElement = document.createElement('article');
        let h2Element = document.createElement('h2');
        let imgElement = document.createElement('img');
        let h4Element = document.createElement('h4Element');
        let pElement = document.createElement('p');

        let section = document.querySelector('section');
        imgElement.setAttribute('src',URL+'images/' + strangeProducts[i].image);
        imgElement.setAttribute('alt', strangeProducts[i].image);
		imgElement.setAttribute('height', '100px');
		imgElement.setAttribute('width', '100px')
        h2Element.textContent = strangeProducts[i].name;
        h4Element.textContent = 'Price : ' + strangeProducts[i].price;
        pElement.textContent = 'Description : ' + strangeProducts[i].description;
        let br1Element = document.createElement('br');
        let br2Element = document.createElement('br');
        let br3Element = document.createElement('br');
        articleElement.appendChild(h2Element);
		articleElement.appendChild(br1Element);
        articleElement.appendChild(imgElement);
		articleElement.appendChild(br2Element);
        articleElement.appendChild(h4Element);
		articleElement.appendChild(br3Element);
        articleElement.appendChild(pElement);
        section.appendChild(articleElement);
    }

}