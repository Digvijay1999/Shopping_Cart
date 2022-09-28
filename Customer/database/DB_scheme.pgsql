CREATE TABLE IF NOT EXISTS customer(
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(10) NOT NULL,
    address TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    product_available_quantity INTEGER DEFAULT 0
)

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY NOT NULL,
    customer_id INTEGER NOT NULL,
    order_date DATE NOT NULL
)

CREATE TABLE IF NOT EXISTS order_items (
    order_id UNIQUE INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    order_quantity INTEGER NOT NULL,
    FOREIGN KEY(customer_id) REFERENCES customer(user_id) ON DELETE CASCADE, 
    FOREIGN KEY(order_id) REFERENCES orders(order_id) ON DELETE CASCADE   
)

CREATE TABLE IF NOT EXISTS cart (
    cart_id SERIAL SERIAL PRIMARY KEY NOT NULL,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer (user_id) ON DELETE CASCADE
)

CREATE TABLE IF NOT EXISTS cart_items (
    cart_id INTEGER PRIMARY KEY NOT NULL,
    product_id UNIQUE INTEGER NOT NULL,
    product_quantity INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
)