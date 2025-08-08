using AutoMapper;
using Disqueteira.Data;
using Disqueteira.Data.Dtos;
using Disqueteira.Models;
using Microsoft.AspNetCore.Mvc;

namespace Disqueteira.Controllers;

[ApiController]
[Route("[controller]")]
public class ArtistController : ControllerBase
{
    private DisqueteiraContext _context;
    private IMapper _mapper;

    public ArtistController(DisqueteiraContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }


    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AddArtist([FromBody] CreateArtistDto artistDto)
    {
        Artist artist = _mapper.Map<Artist>(artistDto);

        _context.Artists.Add(artist);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetArtistById), new { id = artist.Id }, artist);
    }


    [HttpGet]
    public IEnumerable<ReadArtistDto> GetArtists([FromQuery] int skip = 0, [FromQuery] int take = 5)
    {
        return _mapper.Map<List<ReadArtistDto>>(_context.Artists.Skip(skip).Take(take));
    }


    [HttpGet("{id}")]
    public IActionResult GetArtistById(int id)
    {
        var artist = _context.Artists.FirstOrDefault(artist => artist.Id == id);
        if (artist == null) return NotFound();
        var artistDto = _mapper.Map<ReadArtistDto>(artist);
        return Ok(artistDto);
    }
}
