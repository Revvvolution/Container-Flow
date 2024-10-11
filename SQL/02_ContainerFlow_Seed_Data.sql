USE [ContainerFlow];
GO

set identity_insert [UserProfile] on
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (1, 'Alex', 'Smith', 'asmith0', 'alex.j@example.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (2, 'Taylor', 'Johnson', 'tjohnson1', 'taylor.s@example.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (3, 'Fionnula', 'Puleston', 'fpuleston2', 'fpuleston2@scribd.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (4, 'Adel', 'Peplay', 'apeplay8', 'apeplay8@wired.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (5, 'Ring', 'Pryer', 'rpryer9', 'rpryer9@shinystat.com');

set identity_insert [UserProfile] off

set identity_insert [Tag] on
insert into Tag (Id, [Name], UserProfileId) values (1, 'Kitchen supplies', 1);
insert into Tag (Id, [Name], UserProfileId) values (2, 'Office Supplies', 1);
insert into Tag (Id, [Name], UserProfileId) values (3, 'Craft Materials', 1);
insert into Tag (Id, [Name], UserProfileId) values (4, 'Holiday Decorations', 1);
insert into Tag (Id, [Name], UserProfileId) values (5, 'Seasonal Clothing', 1);
insert into Tag (Id, [Name], UserProfileId) values (6, 'Toys', 1);
insert into Tag (Id, [Name], UserProfileId) values (7, 'Books', 1);
insert into Tag (Id, [Name], UserProfileId) values (8, 'Electronics', 2);
insert into Tag (Id, [Name], UserProfileId) values (9, 'Tools', 2);
insert into Tag (Id, [Name], UserProfileId) values (10, 'Cleaning Supplies', 2);
insert into Tag (Id, [Name], UserProfileId) values (11, 'Sports Equipment', 2);
insert into Tag (Id, [Name], UserProfileId) values (12, 'Pet Supplies', 2);
insert into Tag (Id, [Name], UserProfileId) values (13, 'Gardening Tools', 2);
insert into Tag (Id, [Name], UserProfileId) values (14, 'Hiking Gear', 2);
insert into Tag (Id, [Name], UserProfileId) values (15, 'Personal Care Items', 2);
set identity_insert [Tag] off

set identity_insert [Container] on
insert into Container (Id, [Name], [Description], UserProfileId) values (1, 'Kitchen Storage Box', 'Large box for storing kitchen supplies', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (2, 'Toy Bin', 'Colorful bin for organizing toys', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (3, 'Book Shelf', 'Sturdy shelf for holding books', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (4, 'Electronics Drawer', 'Drawer for keeping electronic gadgets', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (5, 'Holiday Decoration Box', 'Box for storing holiday decorations', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (6, 'Cleaning Supplies Caddy', 'Portable caddy for cleaning supplies', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (7, 'Tool Chest', 'Chest for organizing tools', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (8, 'Craft Organizer', 'Organizer for craft materials', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (9, 'Seasonal Clothing Bin', 'Bin for storing seasonal clothing', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (10, 'Sports Equipment Rack', 'Rack for holding sports equipment', 1);
insert into Container (Id, [Name], [Description], UserProfileId) values (11, 'Pet Supplies Basket', 'Basket for pet supplies', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (12, 'Gardening Tools Shed', 'Shed for storing gardening tools', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (13, 'Hiking Gear Closet', 'Closet for organizing hiking gear', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (14, 'Personal Care Cabinet', 'Cabinet for personal care items', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (15, 'Office Supplies Drawer', 'Drawer for office supplies', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (16, 'Craft Box', 'Box for storing craft supplies', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (17, 'Electronics Box', 'Box for keeping electronics', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (18, 'Holiday Decoration Bin', 'Bin for holiday decorations', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (19, 'Cleaning Supplies Bin', 'Bin for cleaning supplies', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (20, 'Tool Box', 'Box for organizing tools', 2);
insert into Container (Id, [Name], [Description], UserProfileId) values (21, 'Sports Closet', 'Closet full of sports equipment', 2);
set identity_insert [Container] off

set identity_insert [Item] on
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (1, 'Action Figure', 'Popular superhero action figure for kids', 6, 1, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (2, 'Mystery Novel', 'A gripping mystery novel with unexpected twists', 7, 1, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (3, 'Christmas Lights', 'Bright and colorful lights for holiday decoration', 4, 1, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (4, 'Acrylic Paint Set', 'Vibrant colors for all your craft projects', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (5, 'Non-stick Pan', 'Perfect for cooking without sticking', 1, 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (6, 'Building Blocks', 'Creative building blocks for children', 6, 1, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (7, 'Knitting Yarn', 'Soft and durable yarn for knitting projects', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (8, 'Winter Jacket', 'Warm and stylish jacket for cold weather', 5, 1, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (9, 'Science Fiction Book', 'Exciting science fiction story set in the future', 7, 1, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (10, 'Craft Glue', 'Strong adhesive for all your craft needs', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (11, 'Ornament Set', 'Beautiful ornaments for holiday decoration', 4, 1, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (12, 'Spatula', 'Heat-resistant spatula for cooking', 1, 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (13, 'Notebook', 'Lined notebook for taking notes', 2, 1, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (14, 'Glue Gun', 'Hot glue gun for craft projects', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (15, 'Halloween Costume', 'Spooky costume for Halloween', 4, 1, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (16, 'Raincoat', 'Waterproof raincoat for wet weather', 5, 1, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (17, 'Puzzle', 'Challenging puzzle for kids', 6, 1, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (18, 'Cookbook', 'Recipe book with delicious dishes', 7, 1, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (19, 'Blender', 'Powerful blender for smoothies', 1, 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (20, 'Desk Organizer', 'Organizer for office supplies', 2, 2, 15);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (21, 'Paint Brushes', 'Set of brushes for painting', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (22, 'Easter Eggs', 'Colorful eggs for Easter decoration', 4, 1, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (23, 'Winter Gloves', 'Warm gloves for winter', 5, 1, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (24, 'Mixing Bowl', 'Large bowl for mixing ingredients', 1, 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (25, 'Stapler', 'Heavy-duty stapler for office use', 2, 2, 15);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (26, 'Glue Sticks', 'Pack of glue sticks for crafting', 3, 1, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (27, 'Halloween Mask', 'Scary mask for Halloween', 4, 1, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (28, 'Summer Hat', 'Lightweight hat for summer', 5, 1, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (29, 'Toy Car', 'Miniature car for kids', 6, 1, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (30, 'Fantasy Novel', 'Engaging fantasy novel', 7, 1, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (31, 'Dish Soap', 'Effective for cleaning dishes and utensils', 10, 2, 19);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (32, 'Smartphone', 'Latest model with advanced features', 8, 2, 17);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (33, 'All-Purpose Cleaner', 'Versatile cleaner for various surfaces', 10, 2, 19);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (34, 'Hammer', 'Durable hammer for construction and repairs', 9, 2, 20);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (35, 'Laptop', 'High-performance laptop for work', 8, 2, 15);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (36, 'Screwdriver Set', 'Set of screwdrivers for various tasks', 9, 2, 20);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (37, 'Mop', 'Efficient mop for cleaning floors', 10, 2, 19);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (38, 'Basketball', 'Durable basketball for outdoor play', 11, 2, 21);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (39, 'Dog Leash', 'Strong leash for walking dogs', 12, 2, 11);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (40, 'Garden Shovel', 'Sturdy shovel for gardening', 13, 2, 12);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (41, 'Hiking Boots', 'Comfortable boots for hiking', 14, 2, 13);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (42, 'Shampoo', 'Gentle shampoo for daily use', 15, 2, 14);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (43, 'Tablet', 'Portable tablet for entertainment', 8, 2, 17);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (44, 'Wrench Set', 'Set of wrenches for repairs', 9, 2, 20);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (45, 'Window Cleaner', 'Effective cleaner for windows', 10, 2, 19);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (46, 'Tennis Racket', 'Racket for playing tennis', 11, 2, 21);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (47, 'Cat Toy', 'Interactive toy for cats', 12, 2, 11);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (48, 'Pruning Shears', 'Shears for pruning plants', 13, 2, 12);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (49, 'Hiking Backpack', 'Durable backpack for hiking', 14, 2, 13);
insert into Item (Id, [Name], [Description], TagId, UserProfileId, ContainerId) values (50, 'Body Lotion', 'Moisturizing lotion for skin care', 15, 2, 14);
set identity_insert [Item] off

