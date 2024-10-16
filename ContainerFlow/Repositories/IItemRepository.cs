﻿using ContainerFlow.Models;

namespace ContainerFlow.Repositories
{
    public interface IItemRepository
    {
        List<Item> GetAllUserItems(int userId);
        Item GetItemById(int id);
        List<Item> GetLooseItemsByUserId(int userId);
        List<Item> GetItemsByContainerId(int containerId);
        public void Add(Item item);
        public void Update(Item item);
        public void Delete(int itemId);
    }
}