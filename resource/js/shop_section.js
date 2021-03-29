const interiorProductsJSON = `
[
    {
        "id": "1",
        "title": "Red Boot",
        "image": "redboot.png",
        "description": "This decor item can simultaneously serve as a vase. Place a tree branch, a bottle of wine, or something else in your Christmas boot to create a festive mood.",
        "price": 18.00
    },
    {
        "id": "2",
        "title": "White Deer",
        "image": "whitedeer.png",
        "description": "A cute white deer with a red scarf will fit perfectly into your interior. Put it on your office table, on the shelf, etc. The deer is made of plastic with artificial pile.",
        "price": 12.00
    },
    {
        "id": "3",
        "title": "Gift Box",
        "image": "giftbox.png",
        "description": "An original Christmas tree toy in the form of a gift box in classy colors. Made of felt, decorated with an artificial spruce branch.",
        "price": 12.00
    },
    {
        "id": "4",
        "title": "Snowman",
        "image": "snowman.png",
        "description": "This funny snowman can be used as home decor. Just put it on any surface, and you will feel the winter magic at that very moment!",
        "price": 10.00
    }
]`

const wreathsProductsJSON = `
[
    {
        "id": "1",
        "title": "Elegant Wreath",
        "image": "el_wreath.png",
        "description": "This quite tiny and elegant wreath is made of pine and cedar artificial branches, pine cones with a silver finish. One red branch is the perfect final touch for this wreath.",
        "price": 78.00
    },
    {
        "id": "2",
        "title": "Wreath With Pine Cons",
        "image": "wreath_wpc.png",
        "description": "This wreath features pine and cedar branches, pine cones with a silver finish, and red shiny beads. All the elements of the wreath are artificial.",
        "price": 98.00
    },
    {
        "id": "3",
        "title": "Cinnamon Wreath",
        "image": "cin_wreath.png",
        "description": "It's one of those wreaths that not only looks but also smells great! It it made of artificial pine branches, cotton flowers, and real cinnamon sticks.",
        "price": 95.00
    },
    {
        "id": "4",
        "title": "Citrus Wreath",
        "image": "cit_wreath.png",
        "description": "Add some spice to your Christmas! This wreath features pine branches mixed in with brown pinecones, cotton flowers, red beads, and bright dried orange slices!",
        "price": 95.00
    }
]`

const ballsProductsJSON = `
[
    {
        "id": "1",
        "title": "Red Christmas Balls",
        "image": "redballs.png",
        "description": "A great set of 40 baubles of different colors and diameters. Actually, you get everything you need to decorate your X-mas tree in one box. By the way, the box is excellent for further storage of the balls after Christmas.",
        "price": 20.00
    },
    {
        "id": "2",
        "title": "Silver Christmas Balls",
        "image": "silverballs.png",
        "description": "Ready set of 30 silver shiny and matt baubles made of glass and plastic. The diameter is 6-10 cm. The set comes in a nice storage box that you can use even after Christmas.",
        "price": 10.00
    },
    {
        "id": "3",
        "title": "Green Christmas Balls",
        "image": "greenballs.png",
        "description": "Premium set of 30 green baubles made of glass and plastic. The set contains shiny and matt balls in a diameter of 6-10 cm. Comes in a nice storage box that you can use even after Christmas.",
        "price": 10.00
    },
    {
        "id": "4",
        "title": "Gold Christmas Balls",
        "image": "goldballs.png",
        "description": "Set of 30 gold baubles made of glass and plastic. There are shiny and matt balls in this set with a diameter of 6-10 cm. The set comes in a nice storage box that you can use even after Christmas.",
        "price": 10.00
    }
]`

const stockingsProductsJSON = `
[
    {
        "id": "1",
        "title": "Santa Claus Stocking",
        "image": "sc_stocing.png",
        "description": "Traditional Christmas sock with funny applications. The sock is made of felt with a knitted top.",
        "price": 15.00
    },
    {
        "id": "2",
        "title": "Christmas Red Stocking",
        "image": "cr_stocing.png",
        "description": "Classic Christmas stocking in red and white, nothing extra. The stocking is made of textile, decorated with pompons, and is ready to be filled with sweets.",
        "price": 22.00
    },
    {
        "id": "3",
        "title": "Stocking With Pompons",
        "image": "sw_stocing.png",
        "description": "Knitted Christmas stocking in traditional colors. The top of the stocking is decorated with red and green pompons.",
        "price": 22.00
    },
    {
        "id": "4",
        "title": "Stocking With Balls",
        "image": "stocing_wb.png",
        "description": "Red and green stocking with colorful Christmas balls. Fill it with candles or small presents!",
        "price": 18.00
    }
]`


function renderInteriorProducts(interiorProducts) {
    const productsContainer = document.querySelector('.interior_products');
    for (const intProduct of interiorProducts) {
        productsContainer.innerHTML += `
        <article class="product_article">
            <a href="#"> <img  src="resource/img/shop/${intProduct.image}" class="product_img" alt="${intProduct.title}"></a>
            <h4 class="product_name"><a href="#">${intProduct.title}</a></h4>
            <p class="product_price">$${intProduct.price}USD</p>
            <button class="produtc_btn">Ad to card</button>
        </article>`
    }
    
}
renderInteriorProducts(JSON.parse(interiorProductsJSON));

function renderWreathsProducts( wreathsProducts ) {
    const productsContainer = document.querySelector('.wreaths_products');
    for (const wrProduct of wreathsProducts) {
        productsContainer.innerHTML += `
        <article class="product_article">
            <a href="#"> <img  src="resource/img/shop/${wrProduct.image}" class="product_img" alt="${wrProduct.title}"></a>
            <h4 class="product_name"><a href="#">${wrProduct.title}</a></h4>
            <p class="product_price">$${wrProduct.price}USD</p>
            <button class="produtc_btn">Ad to card</button>
        </article>`
    }
    
    
}
renderWreathsProducts(JSON.parse(wreathsProductsJSON));

function renderBallsProducts(ballsProducts ) {
    const productsContainer = document.querySelector('.christmas_balls_products');
    for (const blProduct of ballsProducts) {
        productsContainer.innerHTML += `
        <article class="product_article">
            <a href="#"> <img  src="resource/img/shop/${blProduct.image}" class="product_img" alt="${blProduct.title}"></a>
            <h4 class="product_name"><a href="#">${blProduct.title}</a></h4>
            <p class="product_price">$${blProduct.price}USD</p>
            <button class="produtc_btn">Ad to card</button>
        </article>`
    }
    
}
renderBallsProducts(JSON.parse(ballsProductsJSON));

function renderStockingsProducts( stockingsProducts ) {
    const productsContainer = document.querySelector('.stockings_products');
    for (const stProduct of stockingsProducts) {
        productsContainer.innerHTML += `
        <article class="product_article">
            <a href="#"> <img  src="resource/img/shop/${stProduct.image}" class="product_img" alt="${stProduct.title}"></a>
            <h4 class="product_name"><a href="#">${stProduct.title}</a></h4>
            <p class="product_price">$${stProduct.price}USD</p>
            <button class="produtc_btn">Ad to card</button>
        </article>`
    }




}

renderStockingsProducts(JSON.parse(stockingsProductsJSON));





