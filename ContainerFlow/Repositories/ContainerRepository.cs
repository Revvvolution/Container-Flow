using Microsoft.Data.SqlClient;
using ContainerFlow.Models;
using ContainerFlow.Utils;

namespace ContainerFlow.Repositories
{
    public class ContainerRepository : BaseRepository, IContainerRepository
    {
        public ContainerRepository(IConfiguration config) : base(config) { }

        public List<Container> GetAllUserContainers(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name], [Description], UserProfileId FROM Container
                                        WHERE UserProfileId = @userProfileId
                                        ORDER BY Name ASC";

                    DbUtils.AddParameter(cmd, "@userProfileId", userId);

                    var reader = cmd.ExecuteReader();

                    var containers = new List<Container>();

                    while (reader.Read())
                    {
                        containers.Add(new Container()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Description = DbUtils.GetString(reader, "Description"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
                    }

                    reader.Close();

                    return containers;
                }
            }
        }

        public Container GetContainerById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], [Description], UserProfileId
                        FROM Container
                        WHERE Id = @id
                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Container container = new Container()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Description = DbUtils.GetString(reader, "Description"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        };

                        reader.Close();
                        return container;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public void Add(Container container)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Container (Name, [Description], UserProfileId)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @description, @userProfileId)";

                    DbUtils.AddParameter(cmd, "@name", container.Name);
                    DbUtils.AddParameter(cmd, "@description", container.Description);
                    DbUtils.AddParameter(cmd, "@userProfileId", container.UserProfileId);

                    int id = (int)cmd.ExecuteScalar();

                    container.Id = id;
                }
            }
        }

        public void Update(Container container)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Container
                            SET 
                                [Name] = @name,
                         [Description] = @description
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", container.Name);
                    DbUtils.AddParameter(cmd, "@description", container.Description);
                    DbUtils.AddParameter(cmd, "@id", container.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int containerId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Container
                            WHERE Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", containerId);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
