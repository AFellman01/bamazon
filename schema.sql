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

SELECT * FROM products;
