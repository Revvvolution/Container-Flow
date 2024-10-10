using Microsoft.Data.SqlClient;
using ContainerFlow.Models;
using ContainerFlow.Utils;

namespace ContainerFlow.Repositories
{
    public class ItemRepository : BaseRepository, IItemRepository
    {
        public ItemRepository(IConfiguration config) : base(config) { }

        public List<Item> GetAllUserItems(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name], [Description], TagId, UserProfileId FROM Item
                                        WHERE UserProfileId = @userProfileId
                                        ORDER BY Name ASC";

                    DbUtils.AddParameter(cmd, "@userProfileId", userId);

                    var reader = cmd.ExecuteReader();

                    var items = new List<Item>();

                    while (reader.Read())
                    {
                        items.Add(new Item()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
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
                    cmd.CommandText = @"
                        SELECT Id, [Name], [Description], TagId, UserProfileId
                        FROM Item
                        WHERE Id = @id
                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Item item = new Item()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Description = DbUtils.GetString(reader, "Description"),
                            TagId = DbUtils.GetNullableInt(reader, "TagId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
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

        public void Add(Item item)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Item (Name, [Description], TagId, UserProfileId)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @description, @tagId, @userProfileId)";

                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@tagId", item.TagId);
                    DbUtils.AddParameter(cmd, "@userProfileId", item.UserProfileId);

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
                               TagId = @tagId
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@tagId", item.TagId);
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
