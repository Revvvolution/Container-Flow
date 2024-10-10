using Microsoft.AspNetCore.Mvc;
using ContainerFlow.Models;
using ContainerFlow.Repositories;

namespace ContainerFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;

        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userProfileRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("GetById")]
        public IActionResult GetUserById(int id)
        {
            var user = _userProfileRepository.GetUserById(id);

            return user == null ? NotFound() : Ok(user);
        }

        // POST api/<UserProfileController>
        [HttpPost]
        public IActionResult Post([FromBody] UserProfile userProfile)
        {
            if (userProfile == null)
            {
                return BadRequest();
            }
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                "GetByEmail",
                new { email = userProfile.Email },
                userProfile);
        }

        // PUT api/<UserProfileController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
