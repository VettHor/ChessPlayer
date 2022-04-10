using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using lab_5.Models.Entities;
using lab_5.Models.Request;
using lab_5.DBContext;
using System.Linq;
using System.Net;

namespace lab_5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        static MyDBRepo myDBRepo = new MyDBRepo();

        [HttpGet]
        [Route("get_players")]
        public async Task<IActionResult> GetPlayers()
        {
            return myDBRepo.GetPlayers().Any() is true ? Ok(myDBRepo.GetPlayers()) : NoContent();
        }

        [HttpGet]
        [Route("get_player/{id}")]
        public async Task<IActionResult> GetPlayerById(int id)
        {
            PlayerDb player = myDBRepo.GetPlayerById(id);
            return player is not null ? Ok(player) : NotFound();
        }

        [HttpPost]
        [Route("add_player")]
        public async Task<IActionResult> AddPlayer(ChangeablePlayer insertedPlayer)
        {
            myDBRepo.AddPlayer(insertedPlayer);
            return Ok(new { 
                Message = "Succesfully added new player!", 
                Status = (int)HttpStatusCode.Created,
                Player = insertedPlayer
            });
        }

        [Route("update_player/{id}")]
        [HttpPut]
        public async Task<IActionResult> UpdatePlayer(ChangeablePlayer editedPlayer, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            PlayerDb player = myDBRepo.GetPlayerById(id);
            if (player is null)
                return NotFound();
            myDBRepo.UpdatePlayer(player, editedPlayer);
            return Ok(new {
                Message = "Succesfully updated a player information!",
                Status = (int)HttpStatusCode.OK
            });
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeletePlayer(int id)
        {
            PlayerDb player = myDBRepo.GetPlayerById(id);
            if (player is null)
                return NotFound();
            myDBRepo.DeletePlayer(player);
            return Ok(new {
                Message = "Succesfully deleted a player!",
                Status = (int)HttpStatusCode.OK,
            });
        }
    }
}
