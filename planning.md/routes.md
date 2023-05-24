### Routes to interact with resources
### Browse Read Edit Add Delete

B GET /buyers
R GET /buyers/:id
E POST /buyers/:id
A POST /buyers
D POST /buyers/:id/delete

<!-- B GET /sellers  -->
R GET /sellers/:id
E POST /sellers/:id
A POST /sellers
D POST /sellers/:id/delete

B GET /orders
R GET /orders/:id
E POST /orders/:id
A POST /orders
D POST /orders/:id/delete

B GET /favourites
R GET /favourites/:id

A POST /favourites
D POST /favourites/:id/delete

B GET /mugs
R GET /mugs/:id
E POST /mugs/:id
A POST /mugs
D POST /mugs/:id/delete
