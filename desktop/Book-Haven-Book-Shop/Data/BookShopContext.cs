using Microsoft.EntityFrameworkCore;
using BookHaven.Models;

namespace BookHaven.Data
{
    public class BookShopContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>  optionsBuilder.UseSqlite("Data Source=BookShop.db");
        
    }
}