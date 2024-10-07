USE [master]

IF db_id('ContainerFlow') IS NULL
  CREATE DATABASE [ContainerFlow]
GO

USE [ContainerFlow]
GO


DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Tag];
DROP TABLE IF EXISTS [Item];
DROP TABLE IF EXISTS [Container];
DROP TABLE IF EXISTS [ContainerItem];
GO


CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [DisplayName] nvarchar(50) NOT NULL,
)

CREATE TABLE [Tag] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL
)

CREATE TABLE [Item] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [TagId] integer,
  [UserProfileId] integer NOT NULL,

  CONSTRAINT [FK_Item_Tag] FOREIGN KEY ([TagId])
	REFERENCES [Tag] ([Id]),

  CONSTRAINT [FK_Item_UserProfile] FOREIGN KEY ([UserProfileId])
	REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [Container] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [UserProfileId] integer NOT NULL,

  CONSTRAINT [FK_Container_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [ContainerItem] (
  [id] integer PRIMARY KEY IDENTITY,
  [ContainerId] integer NOT NULL,
  [ItemId] integer NOT NULL,

  CONSTRAINT [FK_ContainerItem_Container] FOREIGN KEY ([ContainerId]) REFERENCES [Container] ([Id]),
  CONSTRAINT [FK_ContainerItem_Item] FOREIGN KEY ([ItemId]) REFERENCES [Item] ([Id])
)
GO