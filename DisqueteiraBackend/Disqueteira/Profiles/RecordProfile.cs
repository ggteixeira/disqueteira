using AutoMapper;
using Disqueteira.Data.Dtos;
using Disqueteira.Data.Dtos.RecordDtos;
using Disqueteira.Models;

namespace Disqueteira.Profiles;

public class RecordProfile : Profile
{
    public RecordProfile()
    {
        CreateMap<CreateRecordDto, Record>();
        // CreateMap<UpdateRecordDto, Record>();
        // CreateMap<Record, UpdateRecordDto>();
        CreateMap<Record, ReadRecordDto>();
    }
}