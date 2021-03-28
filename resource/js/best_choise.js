const bestChoiseJSON = `
[
    {
        "id": "1",
        "title": "Citrus Wreath",
        "image": "christmas_wreath_1.png",
        "description": "Add some spice to your Christmas! This wreath features pine branches mixed in with brown pinecones, cotton flowers, red beads, and bright dried orange slices!",
        "price": 89.00
    },
    {
        "id": "2",
        "title": "Snowman",
        "image": "snowman.png",
        "description": "This funny snowman can be used as home decor. Just put it on any surface, and you will feel the winter magic at that very moment!",
        "price": 10.00
    },
    {
        "id": "3",
        "title": "Wreath With Pine Cons",
        "image": "wreath_with_pine_ons.png",
        "description": "This wreath features pine and cedar branches, pine cones with a silver finish, and red shiny beads. All the elements of the wreath are artificial.",
        "price": 98.00
    },
    {
        "id": "4",
        "title": "White Deer",
        "image": "white_deer.png",
        "description": "A cute white deer with a red scarf will fit perfectly into your interior. Put it on your office table, on the shelf, etc. The deer is made of plastic with artificial pile.",
        "price": 12.00
    }
]`

function renderProducts(bestChoise) {
    const productsContainer = document.querySelector('.best_choise_products');
    for (const product of bestChoise) {
        productsContainer.innerHTML += `
        <article class="product_article">
            <a href="#"> <img  src="resource/img/${product.image}" class="product_img" alt="${product.title}"></a>
            <h4 class="product_name"><a href="#">${product.title}</a></h4>
            <p class="product_price">$${product.price}USD</p>
            <button class="produtc_btn">Ad to card</button>
        </article>`
    }
}

renderProducts(JSON.parse(bestChoiseJSON));
