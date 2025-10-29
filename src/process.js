const main = document.getElementById('main');
const carts = document.getElementById('carts')

const cigarettes =  Array.from(main.
                    firstElementChild.
                    nextElementSibling.
                    firstElementChild.
                    firstElementChild.
                    nextElementSibling.
                    children);



cigarettes.forEach((product) => {
    product.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', () =>{
    const cart = carts.
                firstElementChild.
                firstElementChild.
                nextElementSibling;


    const div = document.createElement("div");
    const cigaName = document.createElement('h5','text-justify');
    const price = document.createElement("small")
    
    cigaName.innerHTML = product.firstElementChild.innerHTML;
    
    div.classList.add('bg-gray-400', 'p-5', 'mb-3', 'rounded-lg');
    div.append(cigaName);
    console.log(div);


    cart.append(div)

    });
    
})