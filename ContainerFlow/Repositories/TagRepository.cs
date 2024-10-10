using Microsoft.Data.SqlClient;
using ContainerFlow.Models;
using ContainerFlow.Utils;

namespace ContainerFlow.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration config) : base(config) { }

        public List<Tag> GetAllUserTags(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name], UserProfileId FROM Tag
                                        WHERE UserProfileId = @userProfileId
                                        ORDER BY Name ASC";

                    DbUtils.AddParameter(cmd, "@userProfileId", userId);

                    var reader = cmd.ExecuteReader();

                    var tags = new List<Tag>();

                    while (reader.Read())
                    {
                        tags.Add(new Tag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
                    }

                    reader.Close();

                    return tags;
                }
            }
        }

        public Tag GetTagById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], UserProfileId
                        FROM Tag
                        WHERE Id = @id
                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Tag tag = new Tag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        };

                        reader.Close();
                        return tag;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public void Add(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Tag (Name, UserProfileId)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @userProfileId)";

                    DbUtils.AddParameter(cmd, "@name", tag.Name);
                    DbUtils.AddParameter(cmd, "@userProfileId", tag.UserProfileId);

                    int id = (int)cmd.ExecuteScalar();

                    tag.Id = id;
                }
            }
        }

        public void Update(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Tag
                            SET 
                                [Name] = @name
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@name", tag.Name);
                    DbUtils.AddParameter(cmd, "@id", tag.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int tagId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Tag
                            WHERE Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", tagId);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
