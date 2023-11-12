-- Creating the database
CREATE DATABASE thebradery;

-- Using the database
USE thebradery;

-- Creating the Products table
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    inventory INT NOT NULL,
    img VARCHAR(255)    
);

-- Inserting 20 sample fashion product entries
INSERT INTO Products (name, price, inventory, img) VALUES 
    ('T-shirt Blanc', 19.99, 100, "https://thebradery.com/cdn/shop/files/339_111227_null_2_Q41191_null_800x.jpg?v=1698250416"),
    ('Jean Slim Noir', 49.99, 75, "https://thebradery.com/cdn/shop/files/37013651_TN_R_800x.jpg?v=1694016559"),
    ('Chaussures de Sport', 89.99, 50, "https://thebradery.com/cdn/shop/products/caval-baskets-depareillees-green-sport-3_4_ad3bcc75-4db1-4334-bd9c-1597ad0fbabc_800x.jpg?v=1697198205"),
    ('Veste en Cuir', 199.99, 25, "https://thebradery.com/cdn/shop/products/cuir-yohan-marine-215216_800x.jpg?v=1667738218"),
    ("Robe d'Été", 29.99, 60, "https://thebradery.com/cdn/shop/products/C4409E22_ALOHA-ALOHA-6_800x.jpg?v=1698914406"),
    ('Cravate en Soie', 24.99, 40, "https://thebradery.com/cdn/shop/products/936fba1faa4fe898f715071eec1e0612_800x.jpg?v=1698923726"),
    ('Sac à Main', 59.99, 30, "https://thebradery.com/cdn/shop/files/529-67-BOISROUGE-1_50b2c415-e93f-4338-a732-d93006ea3ef3_800x.jpg?v=1698930962"),
    ('Chapeau Panama', 34.99, 20, "https://thebradery.com/cdn/shop/files/CHP22VIMA_800x.jpg?v=1699269026"),
    ('Écharpe en Laine', 29.99, 45, "https://thebradery.com/cdn/shop/files/AC161803UCJORDAN-CORAILFLUO_800x.jpg?v=1698229831"),
    ('Ceinture en Cuir', 39.99, 70, "https://thebradery.com/cdn/shop/files/products_28180707_image1_original_800x.jpg?v=1696405421"),
    ('Montre Classique', 149.99, 15, "https://thebradery.com/cdn/shop/products/646817fc30e8392d6143c1db537842da_800x.jpg?v=1698924483"),
    ('Bottes en Cuir', 99.99, 40, "https://thebradery.com/cdn/shop/files/SHEILYBORDEAUX1_800x.jpg?v=1698676762"),
    ('Lunettes de Soleil', 79.99, 50, "https://thebradery.com/cdn/shop/products/lunettes-de-soleil-jemmapes-noir-femme-819112_800x.jpg?v=1675341394"),
    ('Chemise à Carreaux', 44.99, 55, "https://thebradery.com/cdn/shop/files/HCCL24034KBLU44_C_800x.jpg?v=1697565022"),
    ('Pull-over Gris', 64.99, 35, "https://thebradery.com/cdn/shop/files/W1011_GRIS-0853_800x.jpg?v=1698336170"),
    ('Short en Jean', 39.99, 60, "https://thebradery.com/cdn/shop/products/image_3d6250fa-001f-4ff2-85ba-e8241c83c770_800x.jpg?v=1697794975"),
    ("Sandales d'Été", 49.99, 40, "https://thebradery.com/cdn/shop/products/sandales-arizona-big-buckle-vernis-femme-802290_800x.jpg?v=1667483288"),
    ('Bijoux Fantaisie', 14.99, 85, "https://thebradery.com/cdn/shop/files/6CLR000701000-1_grande.jpg?v=1697039070"),
    ('Pantalon Chino', 54.99, 50, "https://thebradery.com/cdn/shop/products/072_2020_Product007_b_800x.jpg?v=1696591165"),
    ('Blouse Florale', 39.99, 40, "https://thebradery.com/cdn/shop/products/37034034_52_B3_800x.jpg?v=1682414331");

-- Creating the Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    role INT NOT NULL
);

-- Creating the Orders table
CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateOrder DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    addressOrder VARCHAR(255) NOT NULL,
    userID INT,
    totalPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(id)
);

-- Creating the ProductOrder table
CREATE TABLE ProductOrder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idOrder INT,
    idProduct INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (idOrder) REFERENCES Orders(id),
    FOREIGN KEY (idProduct) REFERENCES Products(id)
);