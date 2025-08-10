using AutoMapper;
using Disqueteira.Data;
using Disqueteira.Data.Dtos;
using Disqueteira.Data.Dtos.RecordDtos;
using Disqueteira.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Disqueteira.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController : ControllerBase
{
    private DisqueteiraContext _context;
    private IMapper _mapper;

    public RecordController(DisqueteiraContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AddRecord([FromBody] CreateRecordDto recordDto)
    {
        Record record = _mapper.Map<Record>(recordDto);
        _context.Records.Add(record);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetRecordById), new { id = record.Id }, record);
    }

    [HttpGet]
    public IEnumerable<ReadRecordDto> GetRecords([FromQuery] int skip = 0, [FromQuery] int take = 5)
    {
        return _mapper.Map<List<ReadRecordDto>>(_context.Records.Skip(skip).Take(take));
    }

    [HttpGet("{id}")]
    public IActionResult GetRecordById(int id)
    {
        var record = _context.Records.FirstOrDefault(record => record.Id == id);
        if (record == null) return NotFound();
        var recordDto = _mapper.Map<ReadRecordDto>(record);
        return Ok(recordDto);
    }

    [HttpGet("/GetRecordByArtistId/{id}")]
    public async Task<IActionResult> GetRecordByArtistId(int id)
    {
        var queryRecord = from record in _context.Records
            join artist in _context.Artists on record.ArtistId equals artist.Id
            where artist.Id == id
            select new
            {
                recordName = record.Name,
                artistName = artist.Name,
                year = record.Year,
            };

        var results = await queryRecord.ToListAsync();

        return Ok(results);
    }


    // [HttpPatch("{id}")]
    // public IActionResult RenameRecord(int id, JsonPatchDocument<UpdateRecordDto> patch)
    // {
    //     var record = _context.Records.FirstOrDefault(record => record.Id == id);
    //     if (record == null) return NotFound();
    //
    //     var recordToBeRenamed = _mapper.Map<UpdateRecordDto>(record);
    //
    //     patch.ApplyTo(recordToBeRenamed, ModelState);
    //
    //     if (!TryValidateModel(recordToBeRenamed))
    //     {
    //         return ValidationProblem(ModelState);
    //     }
    //
    //     _mapper.Map(recordToBeRenamed, record);
    //     _context.SaveChanges();
    //     return NoContent();
    // }

    [HttpDelete("{id}")]
    public IActionResult DeleteRecord(int id)
    {
        var record = _context.Records.FirstOrDefault(record => record.Id == id);
        if (record == null) return NotFound();

        _context.Records.Remove(record);
        _context.SaveChanges();
        return NoContent();
    }
}