DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  seller_id INTEGER REFERENCES sellers(id) ON DELETE CASCADE,
  mug_id INTEGER REFERENCES mugs(id) ON DELETE CASCADE,
  total_price INTEGER  NOT NULL DEFAULT 0,
  total_quantity INTEGER  NOT NULL DEFAULT 0,
  purchase_date DATE
);
