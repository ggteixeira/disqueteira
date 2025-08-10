using System.ComponentModel.DataAnnotations;

namespace Disqueteira.Models;

public class Artist
{
    [Key] [Required] public int Id { get; set; }

    [Required] public string Name { get; set; }
}