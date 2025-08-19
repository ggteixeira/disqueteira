using System.ComponentModel.DataAnnotations;

namespace Disqueteira.Models;

public class Record : BaseEntity
{
    public int Year { get; set; }
    public int? ArtistId { get; set; }
    public virtual Artist Artist { get; set; }
}