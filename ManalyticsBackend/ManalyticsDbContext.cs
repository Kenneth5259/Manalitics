using Microsoft.EntityFrameworkCore;

using ManalyticsBackend.Models;
namespace ManalyticsBackend 
{
    public class ManalyticsDbContext : DbContext 
    {
        public ManalyticsDbContext(DbContextOptions<ManalyticsDbContext> options) : base(options) {}

        public DbSet<Card> Cards {get; set;}
    }
}