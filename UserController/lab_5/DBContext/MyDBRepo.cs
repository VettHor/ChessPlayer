using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lab_5.Models.Request;
using lab_5.Models.Entities;

namespace lab_5.DBContext
{
    public class MyDBRepo
    {
        public List<PlayerDb> GetPlayers()
        {
            using (MyDBContext myDBContext = new MyDBContext())
            {
                return myDBContext.PlayerDb.ToList();
            }
        }

        public PlayerDb GetPlayerById(int id)
        {
            using (MyDBContext myDBContext = new MyDBContext())
            {
                return myDBContext.PlayerDb.FirstOrDefault(p => p.Id == id);
            }
        }

        public async void AddPlayer(ChangeablePlayer changeablePlayer)
        {
            using(MyDBContext myDBContext = new MyDBContext())
            {
                PlayerDb playerDb = new PlayerDb {
                    Name = changeablePlayer.Name,
                    Email = changeablePlayer.Email,
                    Password = changeablePlayer.Password,
                    Level = changeablePlayer.Level
                };
                myDBContext.PlayerDb.Add(playerDb);
                await myDBContext.SaveChangesAsync();
            }
        }

        public async void UpdatePlayer(PlayerDb playerDb, ChangeablePlayer changeablePlayer)
        {
            using (MyDBContext myDBContext = new MyDBContext())
            {
                playerDb.Name = changeablePlayer.Name;
                playerDb.Email = changeablePlayer.Email;
                playerDb.Password = changeablePlayer.Password;
                playerDb.Level = changeablePlayer.Level;
                myDBContext.PlayerDb.Update(playerDb);
                await myDBContext.SaveChangesAsync();
            }
        }

        public async void DeletePlayer(PlayerDb playerDb)
        {
            using (MyDBContext myDBContext = new MyDBContext())
            {
                myDBContext.PlayerDb.Remove(playerDb);
                await myDBContext.SaveChangesAsync();
            }
        }
    }
}
