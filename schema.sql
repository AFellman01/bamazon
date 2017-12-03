DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT (30) NOT NULL,
  stock_quantity INT(30) NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gutenberg Bible", "Books", 15000, 2), ("Nintendo Switch", "Electronics", 290, 120), ("Spirited Away", "Entertainment", 15, 200), ("Demons don't Dream", "Books", 8, 150), ("Sega Dreamcast", "Electronics", 190, 30), ("Batman", "Entertainment", 6, 190)

SELECT * FROM products;
