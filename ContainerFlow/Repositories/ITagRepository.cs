using ContainerFlow.Models;

namespace ContainerFlow.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAllUserTags(int userId);
        Tag GetTagById(int id);
        public void Add(Tag tag);
        public void Update(Tag tag);
        public void Delete(int tagId);
    }
}