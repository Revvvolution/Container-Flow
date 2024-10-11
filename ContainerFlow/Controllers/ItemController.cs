using Microsoft.AspNetCore.Mvc;
using ContainerFlow.Models;
using ContainerFlow.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContainerFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _itemRepository;

        private readonly IUserProfileRepository _userProfileRepository;

        private readonly IContainerRepository _containerRepository;

        private readonly ITagRepository _tagRepository;

        public ItemController(IItemRepository itemRepository, 
                              IUserProfileRepository userProfileRepository,
                              IContainerRepository containerRepository,
                              ITagRepository tagRepository)
        {
            _itemRepository = itemRepository;
            _userProfileRepository = userProfileRepository;
            _containerRepository = containerRepository;
            _tagRepository = tagRepository;
        }

        // GET: api/<ItemController>
        [HttpGet("GetAllUserItems/{id}")]
        public IActionResult GetUserItems(int id)
        {
            var user = _userProfileRepository.GetUserById(id);

            return user == null ? NotFound() : Ok(_itemRepository.GetAllUserItems(id));
        }

        // GET api/<ItemController>/5
        [HttpGet("GetItemById/{id}")]
        public IActionResult Get(int id)
        {
            var item = _itemRepository.GetItemById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // GET: api/<ItemController>
        [HttpGet("GetLooseItemsByUserId/{id}")]
        public IActionResult GetItemsWithNoContainer(int id)
        {
            var user = _userProfileRepository.GetUserById(id);

            return user == null ? NotFound() : Ok(_itemRepository.GetLooseItemsByUserId(id));
        }

        // GET api/<ItemController>/5
        [HttpGet("GetItemsByContainerId/{id}")]
        public IActionResult GetByContainerId(int id)
        {
            var container = _containerRepository.GetContainerById(id);

            var items = _itemRepository.GetItemsByContainerId(id);
            if (items == null || container == null)
            {
                return NotFound();
            }
            return Ok(items);
        }

        // POST api/<ItemController>
        [HttpPost]
        public IActionResult Post([FromBody] Item item)
        {
            _itemRepository.Add(item);
            return CreatedAtAction("Get", new { id = item.Id }, item);
        }

        // PUT api/<ItemController>/5
        [HttpPut("Edit/{id}")]
        public IActionResult Edit(int id, [FromBody] Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _itemRepository.Update(item);
            return NoContent();
        }

        // DELETE api/<ItemController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _itemRepository.Delete(id);
            return NoContent();
        }
    }
}
