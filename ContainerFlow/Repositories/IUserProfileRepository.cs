using ContainerFlow.Models;

namespace ContainerFlow.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByEmail(string email);
        UserProfile GetUserById(int id);
        public void Add(UserProfile userProfile);
    }
}