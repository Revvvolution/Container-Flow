using ContainerFlow.Models;

namespace ContainerFlow.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByEmail(string email);
        public void Add(UserProfile userProfile);
    }
}