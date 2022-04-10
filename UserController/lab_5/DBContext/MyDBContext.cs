using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using lab_5.Models.Entities;

namespace lab_5.DBContext
{
    public class MyDBContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private static readonly string _connectionString = "Data Source=DESKTOP-JM82IU2;Initial Catalog=PlayerDB;Integrated Security=True";
        public MyDBContext() { }
        public Microsoft.EntityFrameworkCore.DbSet<PlayerDb> PlayerDb { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(_connectionString);
            base.OnConfiguring(builder);
        }
    }
}
