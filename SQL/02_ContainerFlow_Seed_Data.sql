USE [ContainerFlow];
GO

set identity_insert [UserProfile] on
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (1, 'Alex', 'Smith', 'asmith0', 'alex.j@example.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (2, 'Taylor', 'Johnson', 'tjohnson1', 'taylor.s@example.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (3, 'Fionnula', 'Puleston', 'fpuleston2', 'fpuleston2@scribd.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (4, 'Harwilll', 'Manktelow', 'hmanktelow3', 'hmanktelow3@woothemes.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (5, 'Harwell', 'Helliker', 'hhelliker4', 'hhelliker4@facebook.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (6, 'Hermann', 'Biasioni', 'hbiasioni5', 'hbiasioni5@edublogs.org');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (7, 'Susette', 'Cherry', 'scherry6', 'scherry6@nbcnews.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (8, 'Roarke', 'Hicken', 'rhicken7', 'rhicken7@google.fr');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (9, 'Adel', 'Peplay', 'apeplay8', 'apeplay8@wired.com');
insert into UserProfile (Id, FirstName, LastName, DisplayName, Email) values (10, 'Ring', 'Pryer', 'rpryer9', 'rpryer9@shinystat.com');
set identity_insert [UserProfile] off

set identity_insert [Item] on
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (1, 'Dish Soap', 'Effective for cleaning dishes and utensils', 10, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (2, 'Action Figure', 'Popular superhero action figure for kids', 6, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (3, 'Mystery Novel', 'A gripping mystery novel with unexpected twists', 7, 4);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (4, 'Smartphone', 'Latest model with advanced features', 8, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (5, 'Christmas Lights', 'Bright and colorful lights for holiday decoration', 4, 10);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (6, 'All-Purpose Cleaner', 'Versatile cleaner for various surfaces', 10, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (7, 'Hammer', 'Durable hammer for construction and repairs', 9, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (8, 'Acrylic Paint Set', 'Vibrant colors for all your craft projects', 3, 10);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (9, 'Non-stick Pan', 'Perfect for cooking without sticking', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (10, 'Building Blocks', 'Creative building blocks for children', 6, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (11, 'Knitting Yarn', 'Soft and durable yarn for knitting projects', 3, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (12, 'Winter Jacket', 'Warm and stylish jacket for cold weather', 5, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (13, 'Science Fiction Book', 'Exciting science fiction story set in the future', 7, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (14, 'Craft Glue', 'Strong adhesive for all your craft needs', 3, 10);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (15, 'Ornament Set', 'Beautiful ornaments for holiday decoration', 4, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (16, 'Spatula', 'Heat-resistant spatula for cooking', 1, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (17, 'Notebook', 'Lined notebook for taking notes', 2, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (18, 'Glue Gun', 'Hot glue gun for craft projects', 3, 4);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (19, 'Halloween Costume', 'Spooky costume for Halloween', 4, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (20, 'Raincoat', 'Waterproof raincoat for wet weather', 5, 6);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (21, 'Puzzle', 'Challenging puzzle for kids', 6, 7);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (22, 'Cookbook', 'Recipe book with delicious dishes', 7, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (23, 'Laptop', 'High-performance laptop for work', 8, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (24, 'Screwdriver Set', 'Set of screwdrivers for various tasks', 9, 10);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (25, 'Mop', 'Efficient mop for cleaning floors', 10, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (26, 'Basketball', 'Durable basketball for outdoor play', 11, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (27, 'Dog Leash', 'Strong leash for walking dogs', 12, 3);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (28, 'Garden Shovel', 'Sturdy shovel for gardening', 13, 4);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (29, 'Hiking Boots', 'Comfortable boots for hiking', 14, 5);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (30, 'Shampoo', 'Gentle shampoo for daily use', 15, 6);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (31, 'Blender', 'Powerful blender for smoothies', 1, 7);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (32, 'Desk Organizer', 'Organizer for office supplies', 2, 8);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (33, 'Paint Brushes', 'Set of brushes for painting', 3, 9);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (34, 'Easter Eggs', 'Colorful eggs for Easter decoration', 4, 10);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (35, 'Winter Gloves', 'Warm gloves for winter', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (36, 'Mixing Bowl', 'Large bowl for mixing ingredients', 1, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (37, 'Stapler', 'Heavy-duty stapler for office use', 2, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (38, 'Glue Sticks', 'Pack of glue sticks for crafting', 3, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (39, 'Halloween Mask', 'Scary mask for Halloween', 4, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (40, 'Summer Hat', 'Lightweight hat for summer', 5, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (41, 'Toy Car', 'Miniature car for kids', 6, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (42, 'Fantasy Novel', 'Engaging fantasy novel', 7, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (43, 'Tablet', 'Portable tablet for entertainment', 8, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (44, 'Wrench Set', 'Set of wrenches for repairs', 9, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (45, 'Window Cleaner', 'Effective cleaner for windows', 10, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (46, 'Tennis Racket', 'Racket for playing tennis', 11, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (47, 'Cat Toy', 'Interactive toy for cats', 12, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (48, 'Pruning Shears', 'Shears for pruning plants', 13, 1);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (49, 'Hiking Backpack', 'Durable backpack for hiking', 14, 2);
insert into Item (Id, [Name], [Description], TagId, UserProfileId) values (50, 'Body Lotion', 'Moisturizing lotion for skin care', 15, 1);
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
set identity_insert [Container] off

set identity_insert [Tag] on
insert into Tag (Id, [Name]) values (1, 'Kitchen supplies');
insert into Tag (Id, [Name]) values (2, 'Office Supplies');
insert into Tag (Id, [Name]) values (3, 'Craft Materials');
insert into Tag (Id, [Name]) values (4, 'Holiday Decorations');
insert into Tag (Id, [Name]) values (5, 'Seasonal Clothing');
insert into Tag (Id, [Name]) values (6, 'Toys');
insert into Tag (Id, [Name]) values (7, 'Books');
insert into Tag (Id, [Name]) values (8, 'Electronics');
insert into Tag (Id, [Name]) values (9, 'Tools');
insert into Tag (Id, [Name]) values (10, 'Cleaning Supplies');
insert into Tag (Id, [Name]) values (11, 'Sports Equipment');
insert into Tag (Id, [Name]) values (12, 'Pet Supplies');
insert into Tag (Id, [Name]) values (13, 'Gardening Tools');
insert into Tag (Id, [Name]) values (14, 'Hiking Gear');
insert into Tag (Id, [Name]) values (15, 'Personal Care Items');
set identity_insert [Tag] off


set identity_insert [ContainerItem] on
insert into ContainerItem (Id, ContainerId, ItemId) values (1, 1, 9);  -- Non-stick Pan in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (2, 2, 2);  -- Action Figure in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (3, 3, 3);  -- Mystery Novel in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (4, 4, 4);  -- Smartphone in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (5, 5, 5);  -- Christmas Lights in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (6, 6, 1);  -- Dish Soap in Cleaning Supplies Caddy
insert into ContainerItem (Id, ContainerId, ItemId) values (7, 7, 7);  -- Hammer in Tool Chest
insert into ContainerItem (Id, ContainerId, ItemId) values (8, 8, 8);  -- Acrylic Paint Set in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (9, 9, 12); -- Winter Jacket in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (10, 10, 26); -- Basketball in Sports Equipment Rack
insert into ContainerItem (Id, ContainerId, ItemId) values (11, 11, 27); -- Dog Leash in Pet Supplies Basket
insert into ContainerItem (Id, ContainerId, ItemId) values (12, 12, 28); -- Garden Shovel in Gardening Tools Shed
insert into ContainerItem (Id, ContainerId, ItemId) values (13, 13, 29); -- Hiking Boots in Hiking Gear Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (14, 14, 30); -- Shampoo in Personal Care Cabinet
insert into ContainerItem (Id, ContainerId, ItemId) values (15, 15, 17); -- Notebook in Office Supplies Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (16, 16, 18); -- Glue Gun in Craft Box
insert into ContainerItem (Id, ContainerId, ItemId) values (17, 17, 23); -- Laptop in Electronics Box
insert into ContainerItem (Id, ContainerId, ItemId) values (18, 18, 34); -- Easter Eggs in Holiday Decoration Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (19, 19, 25); -- Mop in Cleaning Supplies Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (20, 20, 24); -- Screwdriver Set in Tool Box
insert into ContainerItem (Id, ContainerId, ItemId) values (21, 1, 16); -- Spatula in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (22, 2, 21); -- Puzzle in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (23, 3, 22); -- Cookbook in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (24, 4, 31); -- Blender in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (25, 5, 19); -- Halloween Costume in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (26, 6, 6);  -- All-Purpose Cleaner in Cleaning Supplies Caddy
insert into ContainerItem (Id, ContainerId, ItemId) values (27, 8, 33); -- Paint Brushes in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (28, 9, 35); -- Winter Gloves in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (29, 10, 10); -- Building Blocks in Sports Equipment Rack
insert into ContainerItem (Id, ContainerId, ItemId) values (30, 11, 11); -- Knitting Yarn in Pet Supplies Basket
insert into ContainerItem (Id, ContainerId, ItemId) values (31, 12, 13); -- Science Fiction Book in Gardening Tools Shed
insert into ContainerItem (Id, ContainerId, ItemId) values (32, 13, 14); -- Craft Glue in Hiking Gear Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (33, 14, 15); -- Ornament Set in Personal Care Cabinet
insert into ContainerItem (Id, ContainerId, ItemId) values (34, 15, 20); -- Raincoat in Office Supplies Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (35, 16, 32); -- Desk Organizer in Craft Box
insert into ContainerItem (Id, ContainerId, ItemId) values (36, 1, 36); -- Mixing Bowl in Kitchen Storage Box
insert into ContainerItem (Id, ContainerId, ItemId) values (37, 2, 41); -- Toy Car in Toy Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (38, 3, 42); -- Fantasy Novel in Book Shelf
insert into ContainerItem (Id, ContainerId, ItemId) values (39, 4, 43); -- Tablet in Electronics Drawer
insert into ContainerItem (Id, ContainerId, ItemId) values (40, 5, 39); -- Halloween Mask in Holiday Decoration Box
insert into ContainerItem (Id, ContainerId, ItemId) values (41, 6, 45); -- Window Cleaner in Cleaning Supplies Caddy
insert into ContainerItem (Id, ContainerId, ItemId) values (42, 7, 44); -- Wrench Set in Tool Chest
insert into ContainerItem (Id, ContainerId, ItemId) values (43, 8, 38); -- Glue Sticks in Craft Organizer
insert into ContainerItem (Id, ContainerId, ItemId) values (44, 9, 40); -- Summer Hat in Seasonal Clothing Bin
insert into ContainerItem (Id, ContainerId, ItemId) values (45, 10, 46); -- Tennis Racket in Sports Equipment Rack
insert into ContainerItem (Id, ContainerId, ItemId) values (46, 11, 47); -- Cat Toy in Pet Supplies Basket
insert into ContainerItem (Id, ContainerId, ItemId) values (47, 12, 48); -- Pruning Shears in Gardening Tools Shed
insert into ContainerItem (Id, ContainerId, ItemId) values (48, 13, 49); -- Hiking Backpack in Hiking Gear Closet
insert into ContainerItem (Id, ContainerId, ItemId) values (49, 14, 50); -- Body Lotion in Personal Care Cabinet
insert into ContainerItem (Id, ContainerId, ItemId) values (50, 15, 37); -- Stapler in Office Supplies Drawer
set identity_insert [ContainerItem] off