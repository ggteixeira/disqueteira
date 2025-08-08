using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Disqueteira.Data.Dtos.RecordDtos;

public class CreateRecordDto
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id;

    [Required(ErrorMessage = "Record name is required")]
    public string Name { get; set; }

    public int Year { get; set; }

    [Required] public int ArtistId { get; set; }
}