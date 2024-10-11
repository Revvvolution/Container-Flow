using Microsoft.Data.SqlClient;
using ContainerFlow.Models;
using ContainerFlow.Utils;

namespace ContainerFlow.Repositories
{

    public class ItemRepository : BaseRepository, IItemRepository
    {
        public ItemRepository(IConfiguration config) : base(config) { }

    // Method for query SElECT data to help replace redundancy
    private string ItemSelect()
    {
        var itemQuery = @"SELECT 
                            i.Id AS ItemId,
                            i.[Name] AS ItemName,
                            i.Description,
                            i.TagId,
                            t.[Name] AS TagName,
                            i.UserProfileId,
                            i.ContainerId
                        FROM 
                            Item i
                        LEFT JOIN 
                            Tag t ON i.TagId = t.Id ";

        return itemQuery;
    }
        public List<Item> GetAllUserItems(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = ItemSelect() + @"WHERE i.UserProfileId = @userProfileId
                                        ORDER BY i.[Name] ASC;";

                    DbUtils.AddParameter(cmd, "@userProfileId", userId);

                    var reader = cmd.ExecuteReader();

                    var items = new List<Item>();

                    while (reader.Read())
                    {
                        var item = new Item()
                        {
                            Id = DbUtils.GetInt(reader, "ItemId"),
                            Name = DbUtils.GetString(reader, "ItemName"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            ContainerId = DbUtils.GetNullableInt(reader, "ContainerId"),
                            Tag = reader.IsDBNull(reader.GetOrdinal("TagId")) ? null : new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            },
                        };

                        items.Add(item);
                    }

                    reader.Close();

                    return items;
                }
            }
        }

        public Item GetItemById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = ItemSelect() + "WHERE i.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Item item = new Item()
                        {
                            Id = DbUtils.GetInt(reader, "ItemId"),
                            Name = DbUtils.GetString(reader, "ItemName"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            ContainerId = DbUtils.GetNullableInt(reader, "ContainerId"),
                            Tag = reader.IsDBNull(reader.GetOrdinal("TagId")) ? null : new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            },
                        };

                        reader.Close();
                        return item;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public List<Item> GetLooseItemsByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = ItemSelect() + @"WHERE i.UserProfileId = @userProfileId 
                                                         AND i.ContainerId IS NULL
                                                    ORDER BY i.[Name] ASC;";

                    DbUtils.AddParameter(cmd, "@userProfileId", userId);

                    var reader = cmd.ExecuteReader();

                    var items = new List<Item>();

                    while (reader.Read())
                    {
                        var item = new Item()
                        {
                            Id = DbUtils.GetInt(reader, "ItemId"),
                            Name = DbUtils.GetString(reader, "ItemName"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            ContainerId = DbUtils.GetNullableInt(reader, "ContainerId"),
                            Tag = reader.IsDBNull(reader.GetOrdinal("TagId")) ? null : new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            },
                        };

                        items.Add(item);
                    }

                    reader.Close();

                    return items;
                }
            }
        }

        public List<Item> GetItemsByContainerId(int containerId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = ItemSelect() + @"WHERE ContainerId = @containerId
                                      ORDER BY i.[Name] ASC;";

                    DbUtils.AddParameter(cmd, "@containerId", containerId);

                    var reader = cmd.ExecuteReader();

                    var items = new List<Item>();

                    while (reader.Read())
                    {
                        var item = new Item()
                        {
                            Id = DbUtils.GetInt(reader, "ItemId"),
                            Name = DbUtils.GetString(reader, "ItemName"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            ContainerId = DbUtils.GetNullableInt(reader, "ContainerId"),
                            Tag = reader.IsDBNull(reader.GetOrdinal("TagId")) ? null : new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            },
                        };

                        items.Add(item);
                    }

                    reader.Close();

                    return items;
                }
            }
        }

        public void Add(Item item)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Item (Name, [Description], TagId, UserProfileId, ContainerId)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @description, @tagId, @userProfileId, @containerId)";

                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@tagId", item.TagId);
                    DbUtils.AddParameter(cmd, "@userProfileId", item.UserProfileId);
                    DbUtils.AddParameter(cmd, "@containerId", item.ContainerId);

                    int id = (int)cmd.ExecuteScalar();

                    item.Id = id;
                }
            }
        }

        public void Update(Item item)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Item
                            SET 
                              [Name] = @name,
                       [Description] = @description,
                               TagId = @tagId,
                         ContainerId = @containerId
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@tagId", item.TagId);
                    DbUtils.AddParameter(cmd, "@containerId", item.ContainerId);
                    DbUtils.AddParameter(cmd, "@id", item.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int itemId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Item
                            WHERE Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", itemId);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
