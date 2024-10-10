using ContainerFlow.Models;

namespace ContainerFlow.Repositories
{
    public interface IContainerRepository
    {
        List<Container> GetAllUserContainers(int userId);
        Container GetContainerById(int id);
        public void Add(Container container);
        public void Update(Container container);
        public void Delete(int containerId);
    }
}