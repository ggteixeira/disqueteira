using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Disqueteira.Data.Dtos;

public class CreateArtistDto
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id;

    [Required(ErrorMessage = "Artist name is required")]
    public string Name { get; set; }
}