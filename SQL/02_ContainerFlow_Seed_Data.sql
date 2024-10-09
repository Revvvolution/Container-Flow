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

set identity_insert [Item] on
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (1, 'Action Figure', 'Popular superhero action figure for kids', 6, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (2, 'Mystery Novel', 'A gripping mystery novel with unexpected twists', 7, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (3, 'Christmas Lights', 'Bright and colorful lights for holiday decoration', 4, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (4, 'Acrylic Paint Set', 'Vibrant colors for all your craft projects', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (5, 'Non-stick Pan', 'Perfect for cooking without sticking', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (6, 'Building Blocks', 'Creative building blocks for children', 6, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (7, 'Knitting Yarn', 'Soft and durable yarn for knitting projects', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (8, 'Winter Jacket', 'Warm and stylish jacket for cold weather', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (9, 'Science Fiction Book', 'Exciting science fiction story set in the future', 7, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (10, 'Craft Glue', 'Strong adhesive for all your craft needs', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (11, 'Ornament Set', 'Beautiful ornaments for holiday decoration', 4, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (12, 'Spatula', 'Heat-resistant spatula for cooking', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (13, 'Notebook', 'Lined notebook for taking notes', 2, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (14, 'Glue Gun', 'Hot glue gun for craft projects', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (15, 'Halloween Costume', 'Spooky costume for Halloween', 4, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (16, 'Raincoat', 'Waterproof raincoat for wet weather', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (17, 'Puzzle', 'Challenging puzzle for kids', 6, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (18, 'Cookbook', 'Recipe book with delicious dishes', 7, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (19, 'Blender', 'Powerful blender for smoothies', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (20, 'Desk Organizer', 'Organizer for office supplies', 2, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (21, 'Paint Brushes', 'Set of brushes for painting', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (22, 'Easter Eggs', 'Colorful eggs for Easter decoration', 4, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (23, 'Winter Gloves', 'Warm gloves for winter', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (24, 'Mixing Bowl', 'Large bowl for mixing ingredients', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (25, 'Stapler', 'Heavy-duty stapler for office use', 2, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (26, 'Glue Sticks', 'Pack of glue sticks for crafting', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (27, 'Halloween Mask', 'Scary mask for Halloween', 4, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (28, 'Summer Hat', 'Lightweight hat for summer', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (29, 'Toy Car', 'Miniature car for kids', 6, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (30, 'Fantasy Novel', 'Engaging fantasy novel', 7, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (31, 'Dish Soap', 'Effective for cleaning dishes and utensils', 10, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (32, 'Smartphone', 'Latest model with advanced features', 8, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (33, 'All-Purpose Cleaner', 'Versatile cleaner for various surfaces', 10, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (34, 'Hammer', 'Durable hammer for construction and repairs', 9, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (35, 'Laptop', 'High-performance laptop for work', 8, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (36, 'Screwdriver Set', 'Set of screwdrivers for various tasks', 9, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (37, 'Mop', 'Efficient mop for cleaning floors', 10, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (38, 'Basketball', 'Durable basketball for outdoor play', 11, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (39, 'Dog Leash', 'Strong leash for walking dogs', 12, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (40, 'Garden Shovel', 'Sturdy shovel for gardening', 13, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (41, 'Hiking Boots', 'Comfortable boots for hiking', 14, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (42, 'Shampoo', 'Gentle shampoo for daily use', 15, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (43, 'Tablet', 'Portable tablet for entertainment', 8, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (44, 'Wrench Set', 'Set of wrenches for repairs', 9, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (45, 'Window Cleaner', 'Effective cleaner for windows', 10, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (46, 'Tennis Racket', 'Racket for playing tennis', 11, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (47, 'Cat Toy', 'Interactive toy for cats', 12, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (48, 'Pruning Shears', 'Shears for pruning plants', 13, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (49, 'Hiking Backpack', 'Durable backpack for hiking', 14, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (50, 'Body Lotion', 'Moisturizing lotion for skin care', 15, 2);
set identity_insert [Item] off

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

set identity_insert [ContainerItem] on
insert into ContainerItem (Id, ContainerId, ItemId) values (1, 1, 5);  -- Non-stick Pan in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (2, 1, 12); -- Spatula in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (3, 1, 19); -- Blender in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (4, 1, 24); -- Mixing Bowl in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (5, 2, 1);  -- Action Figure in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (6, 2, 6);  -- Building Blocks in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (7, 2, 17); -- Puzzle in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (8, 2, 29); -- Toy Car in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (9, 3, 2);  -- Mystery Novel in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (10, 3, 9); -- Science Fiction Book in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (11, 3, 18); -- Cookbook in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (12, 3, 30); -- Fantasy Novel in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (13, 4, 13); -- Notebook in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (14, 8, 4);  -- Acrylic Paint Set in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (15, 8, 14); -- Glue Gun in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (16, 4, 43); -- Tablet in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (17, 5, 3);  -- Christmas Lights in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (18, 5, 11); -- Ornament Set in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (19, 5, 15); -- Halloween Costume in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (20, 5, 22); -- Easter Eggs in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (21, 5, 27); -- Halloween Mask in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (22, 9, 16); -- Raincoat in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (23, 9, 23); -- Winter Gloves in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (24, 9, 28); -- Summer Hat in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (25, 8, 7);  -- Knitting Yarn in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (26, 8, 10); -- Craft Glue in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (27, 8, 14); -- Glue Gun in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (28, 9, 8);  -- Winter Jacket in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (29, 8, 21); -- Paint Brushes in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (30, 8, 26); -- Glue Sticks in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (31, 19, 31); -- Dish Soap in Cleaning Supplies Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (32, 12, 40); -- Garden Shovel in Gardening Tools Shed
insert into ContainerItem (Id, ContainerId, ItemId) values (33, 12, 48); -- Pruning Shears in Gardening Tools Shed
insert into ContainerItem (Id, ContainerId, ItemId) values (34, 13, 41); -- Hiking Boots in Hiking Gear Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (35, 13, 49); -- Hiking Backpack in Hiking Gear Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (36, 14, 42); -- Shampoo in Personal Care Cabinet
insert into ContainerItem (Id, ContainerId, ItemId) values (37, 14, 50); -- Body Lotion in Personal Care Cabinet
insert into ContainerItem (Id, ContainerId, ItemId) values (38, 15, 35); -- Laptop in Office Supplies Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (39, 17, 32); -- Smartphone in Electronics Box
insert into ContainerItem (Id, ContainerId, ItemId) values (40, 17, 43); -- Tablet in Electronics Box
insert into ContainerItem (Id, ContainerId, ItemId) values (41, 19, 33); -- All-Purpose Cleaner in Cleaning Supplies Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (42, 20, 34); -- Hammer in Electronics Box
insert into ContainerItem (Id, ContainerId, ItemId) values (43, 20, 36); -- Screwdriver Set in Tool Box
insert into ContainerItem (Id, ContainerId, ItemId) values (44, 20, 44); -- Wrench Set in Tool Box
insert into ContainerItem (Id, ContainerId, ItemId) values (45, 19, 37); -- Mop in Cleaning Supplies Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (46, 19, 45); -- Window Cleaner in Cleaning Supplies Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (47, 21, 38); -- Basketball in Sports Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (48, 21, 46); -- Tennis Racket in Sports Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (49, 11, 39); -- Dog Leash in Pet Supplies Basket
insert into ContainerItem (Id, ContainerId, ItemId) values (50, 11, 47); -- Cat Toy in Pet Supplies Basket
set identity_insert [ContainerItem] off