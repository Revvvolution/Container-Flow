using Microsoft.AspNetCore.Mvc;
using ContainerFlow.Models;
using ContainerFlow.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContainerFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContainerController : ControllerBase
    {
        private readonly IContainerRepository _containerRepository;

        private readonly IUserProfileRepository _userProfileRepository;

        public ContainerController(IContainerRepository containerRepository, IUserProfileRepository userProfileRepository)
        {
            _containerRepository = containerRepository;
            _userProfileRepository = userProfileRepository;
        }

        // GET: api/<ContainerController>
        [HttpGet("GetAllUserContainers/{id}")]
        public IActionResult GetUserContainers(int id)
        {
            var user = _userProfileRepository.GetUserById(id);

            return user == null ? NotFound() : Ok(_containerRepository.GetAllUserContainers(id));
        }

        // GET api/<ContainerController>/5
        [HttpGet("GetContainerById/{id}")]
        public IActionResult Get(int id)
        {
            var container = _containerRepository.GetContainerById(id);
            if (container == null)
            {
                return NotFound();
            }
            return Ok(container);
        }

        // POST api/<ContainerController>
        [HttpPost]
        public IActionResult Post([FromBody] Container container)
        {
            _containerRepository.Add(container);
            return CreatedAtAction("Get", new { id = container.Id }, container);
        }

        // PUT api/<ContainerController>/5
        [HttpPut("Edit/{id}")]
        public IActionResult Edit(int id, [FromBody] Container container)
        {
            if (id != container.Id)
            {
                return BadRequest();
            }
            _containerRepository.Update(container);
            return NoContent();
        }

        // DELETE api/<ContainerController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _containerRepository.Delete(id);
            return NoContent();
        }
    }
}
