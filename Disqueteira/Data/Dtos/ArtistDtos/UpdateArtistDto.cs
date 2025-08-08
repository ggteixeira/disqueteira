using System.ComponentModel.DataAnnotations;

namespace Disqueteira.Data.Dtos;

public class UpdateArtistDto
{
    [Required(ErrorMessage = "Artist name is required")]
    public string Name { get; set; }
}