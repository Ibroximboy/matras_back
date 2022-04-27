CREATE TABLE category (
    category_id serial PRIMARY KEY,
    category_name text not null
);

CREATE TABLE products (
    products_id serial PRIMARY KEY,
    products_name text not null,
    products_kg text not null,
    products_garanty text not null,
    products_size text not null,
    products_place text not null,
    products_description text not null,
    products_price text not null,
    products_new boolean,
    products_action boolean,
    category_id int REFERENCES category(category_id)
);

SELECT * FROM category;

SELECT * FROM products;
