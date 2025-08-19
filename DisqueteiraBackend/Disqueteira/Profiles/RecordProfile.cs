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
        CreateMap<Record, RecordsWithArtistsDto>()
            .ForMember(recordDto => recordDto.ArtistName,
                opt =>
                    opt.MapFrom(record => record.Artist.Name))
            .ForMember(recordDto => recordDto.RecordName,
                opt =>
                    opt.MapFrom(record => record.Name))
            .ForMember(recordDto => recordDto.RecordYear,
                opt =>
                    opt.MapFrom(record => record.Year));
    }
}