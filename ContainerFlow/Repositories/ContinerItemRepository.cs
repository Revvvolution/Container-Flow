//using Microsoft.Data.SqlClient;
//using ContainerFlow.Models;
//using ContainerFlow.Utils;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace ContainerFlow.Repositories
//{
//    public class ContainerItemRepository : BaseRepository, IContainerItemRepository
//    {
//        public ContainerItemRepository(IConfiguration config) : base(config) { }

//        public async Task<List<ContainerItem>> GetAllAsync()
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"SELECT ci.Id, ci.ContainerId, ci.ItemId, 
//                                        c.[Name] AS ContainerName, 
//                                        i.[Name] AS ItemName, i.Description
//                                        FROM ContainerItem ci
//                                        JOIN Container c ON ci.ContainerId = c.Id
//                                        JOIN Item i ON ci.ItemId = i.Id
//                                        ORDER BY c.[Name], i.[Name] ASC";

//                    var reader = await cmd.ExecuteReaderAsync();

//                    var containerItems = new List<ContainerItem>();

//                    while (reader.Read())
//                    {
//                        containerItems.Add(new ContainerItem()
//                        {
//                            Id = DbUtils.GetInt(reader, "Id"),
//                            ContainerId = DbUtils.GetInt(reader, "ContainerId"),
//                            ItemId = DbUtils.GetInt(reader, "ItemId"),
//                            Container = new Container
//                            {
//                                Id = DbUtils.GetInt(reader, "ContainerId"),
//                                Name = DbUtils.GetString(reader, "ContainerName")
//                            },
//                            Item = new Item
//                            {
//                                Id = DbUtils.GetInt(reader, "ItemId"),
//                                Name = DbUtils.GetString(reader, "ItemName"),
//                                Description = DbUtils.GetString(reader, "Description")
//                            }
//                        });
//                    }

//                    reader.Close();

//                    return containerItems;
//                }
//            }
//        }

//        public async Task<ContainerItem> GetByIdAsync(int id)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"SELECT ci.Id, ci.ContainerId, ci.ItemId, 
//                                        c.Name AS ContainerName, 
//                                        i.Name AS ItemName, i.Description
//                                        FROM ContainerItem ci
//                                        JOIN Container c ON ci.ContainerId = c.Id
//                                        JOIN Item i ON ci.ItemId = i.Id
//                                        WHERE ci.Id = @Id";

//                    DbUtils.AddParameter(cmd, "@Id", id);

//                    var reader = await cmd.ExecuteReaderAsync();

//                    ContainerItem containerItem = null;

//                    if (reader.Read())
//                    {
//                        containerItem = new ContainerItem()
//                        {
//                            Id = DbUtils.GetInt(reader, "Id"),
//                            ContainerId = DbUtils.GetInt(reader, "ContainerId"),
//                            ItemId = DbUtils.GetInt(reader, "ItemId"),
//                            Container = new Container
//                            {
//                                Id = DbUtils.GetInt(reader, "ContainerId"),
//                                Name = DbUtils.GetString(reader, "ContainerName")
//                            },
//                            Item = new Item
//                            {
//                                Id = DbUtils.GetInt(reader, "ItemId"),
//                                Name = DbUtils.GetString(reader, "ItemName"),
//                                Description = DbUtils.GetString(reader, "Description")
//                            }
//                        };
//                    }

//                    reader.Close();

//                    return containerItem;
//                }
//            }
//        }

//        public async Task<Container> GetContainerWithItemsAsync(int containerId)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"
//                                    SELECT c.Id AS ContainerId, c.Name AS ContainerName, 
//                                    i.Id AS ItemId, i.Name AS ItemName, i.Description
//                                    FROM Container c
//                                    LEFT JOIN ContainerItem ci ON c.Id = ci.ContainerId
//                                    LEFT JOIN Item i ON ci.ItemId = i.Id
//                                    WHERE c.Id = 1
//                                    ORDER BY i.Name ASC";

//                    DbUtils.AddParameter(cmd, "@ContainerId", containerId);

//                    var reader = await cmd.ExecuteReaderAsync();

//                    Container container = null;
//                    var items = new List<Item>();

//                    while (reader.Read())
//                    {
//                        if (container == null)
//                        {
//                            container = new Container
//                            {
//                                Id = DbUtils.GetInt(reader, "ContainerId"),
//                                Name = DbUtils.GetString(reader, "ContainerName"),
//                                Items = items
//                            };
//                        }

//                        if (!reader.IsDBNull(reader.GetOrdinal("ItemId")))
//                        {
//                            items.Add(new Item
//                            {
//                                Id = DbUtils.GetInt(reader, "ItemId"),
//                                Name = DbUtils.GetString(reader, "ItemName"),
//                                Description = DbUtils.GetString(reader, "Description")
//                            });
//                        }
//                    }

//                    reader.Close();

//                    return container;
//                }
//            }
//        }

//        public async Task AddAsync(ContainerItem containerItem)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"INSERT INTO ContainerItem (ContainerId, ItemId)
//                                        OUTPUT INSERTED.Id
//                                        VALUES (@ContainerId, @ItemId)";

//                    DbUtils.AddParameter(cmd, "@ContainerId", containerItem.ContainerId);
//                    DbUtils.AddParameter(cmd, "@ItemId", containerItem.ItemId);

//                    containerItem.Id = (int)await cmd.ExecuteScalarAsync();
//                }
//            }
//        }

//        public async Task UpdateAsync(ContainerItem containerItem)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"UPDATE ContainerItem
//                                        SET ContainerId = @ContainerId, ItemId = @ItemId
//                                        WHERE Id = @Id";

//                    DbUtils.AddParameter(cmd, "@ContainerId", containerItem.ContainerId);
//                    DbUtils.AddParameter(cmd, "@ItemId", containerItem.ItemId);
//                    DbUtils.AddParameter(cmd, "@Id", containerItem.Id);

//                    await cmd.ExecuteNonQueryAsync();
//                }
//            }
//        }

//        public async Task DeleteAsync(int id)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"DELETE FROM ContainerItem WHERE Id = @Id";

//                    DbUtils.AddParameter(cmd, "@Id", id);

//                    await cmd.ExecuteNonQueryAsync();
//                }
//            }
//        }
//    }
//}
