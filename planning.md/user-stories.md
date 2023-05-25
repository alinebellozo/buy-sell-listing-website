### User Stories
* As a buyer, I can see featured mugs on the main page, because I would like to buy mugs.
* As a buyer, I can filter mugs by price, because I would like to narrow my search.
* As a buyer, I can favourite mugs, because I would like to check up on them later.
* As a logged in buyer, I can message sellers, because I would like to ask questions about the mugs.
* As a seller, I can post mugs, because I would like to sell mugs.
* As a seller, I can remove mugs, because I don't want unavailable mugs seen by users.
* As a seller, I can mark mugs as sold, because they have been purchased.
* As a seller, I can send the buyer a message, because I would like to inform the user/answer questions about the mug.

### Pick out the nouns
-buyers (PK id, name, email, phone number, city, province, country, postal code)
-sellers (PK id, name, email, phone number, city , province, country, postal code)
-orders (buyer_id, seller_id, mug_id, total_price, total_quantity)
-favourites (PK id, FK mug_id, buyer_id)
-mugs (PK id, FK seller_id, price, name, quantity)
