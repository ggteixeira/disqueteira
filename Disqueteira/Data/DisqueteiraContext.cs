using Disqueteira.Models;
using Microsoft.EntityFrameworkCore;

namespace Disqueteira.Data;

public class DisqueteiraContext : DbContext
{
    public DisqueteiraContext(DbContextOptions<DisqueteiraContext> opts) : base(opts)
    {
    }


    public DbSet<Artist> Artists { get; set; }
    public DbSet<Record> Records { get; set; }

    // public DbSet<Filme> Filmes { get; set; }
    // public DbSet<Cinema> Cinemas { get; set; }
    // public DbSet<Endereco> Enderecos { get; set; }
    // public DbSet<Sessao> Sessoes { get; set; }
}