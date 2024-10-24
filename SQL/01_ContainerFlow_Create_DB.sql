USE [master]

IF db_id('ContainerFlow') IS NULL
  CREATE DATABASE [ContainerFlow]
GO

USE [ContainerFlow]
GO


DROP TABLE IF EXISTS [ContainerItem];
DROP TABLE IF EXISTS [Container];
DROP TABLE IF EXISTS [Item];
DROP TABLE IF EXISTS [Tag];
DROP TABLE IF EXISTS [UserProfile];
GO


CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [DisplayName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL
)

CREATE TABLE [Tag] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [UserProfileId] integer NOT NULL,

  CONSTRAINT [FK_Tag_UserProfile] FOREIGN KEY ([UserProfileId])
	REFERENCES [UserProfile] 
)


CREATE TABLE [Container] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [UserProfileId] integer NOT NULL,

  CONSTRAINT [FK_Container_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)

CREATE TABLE [Item] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [TagId] integer,
  [UserProfileId] integer NOT NULL,
  [ContainerId] integer,

  CONSTRAINT [FK_Item_Tag] FOREIGN KEY ([TagId]) 
	REFERENCES [Tag] ([Id]) ON DELETE SET NULL,

  CONSTRAINT [FK_Item_UserProfile] FOREIGN KEY ([UserProfileId])
	REFERENCES [UserProfile] ([Id]),
	
  CONSTRAINT [FK_Item_Container] FOREIGN KEY ([ContainerId])
	REFERENCES [Container] ([Id]) ON DELETE SET NULL 
)
GO