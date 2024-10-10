using Microsoft.AspNetCore.Mvc;
using ContainerFlow.Models;
using ContainerFlow.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContainerFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;

        private readonly IUserProfileRepository _userProfileRepository;

        public TagController(ITagRepository tagRepository, IUserProfileRepository userProfileRepository)
        {
            _tagRepository = tagRepository;
            _userProfileRepository = userProfileRepository;
        }

        // GET: api/<TagController>
        [HttpGet("GetAllUserTags/{id}")]
        public IActionResult GetUserTags(int id)
        {
            var user = _userProfileRepository.GetUserById(id);

            return user == null ? NotFound() : Ok(_tagRepository.GetAllUserTags(id));
        }

        // GET api/<TagController>/5
        [HttpGet("GetTagById/{id}")]
        public IActionResult Get(int id)
        {
            var tag = _tagRepository.GetTagById(id);
            if (tag == null)
            {
               return NotFound();
            }
            return Ok(tag);
        }

        // POST api/<TagController>
        [HttpPost]
        public IActionResult Post([FromBody] Tag tag)
        {
            _tagRepository.Add(tag);
            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }

        // PUT api/<TagController>/5
        [HttpPut("Edit/{id}")]
        public IActionResult Edit(int id, [FromBody] Tag tag)
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }
            _tagRepository.Update(tag);
            return NoContent();
        }

        // DELETE api/<TagController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tagRepository.Delete(id);
            return NoContent();
        }
    }
}
