using System.ComponentModel.DataAnnotations;

namespace Disqueteira.Models;

public class Record
{
    [Key] [Required] public int Id { get; set; }

    [Required] public string Name { get; set; }

    public int Year { get; set; }

}