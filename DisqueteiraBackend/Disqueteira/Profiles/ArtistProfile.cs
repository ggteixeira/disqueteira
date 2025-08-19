using AutoMapper;
using Disqueteira.Data.Dtos.ArtistDtos;
using Disqueteira.Models;

namespace Disqueteira.Profiles;

public class ArtistProfile : Profile
{
    public ArtistProfile()
    {
        CreateMap<CreateArtistDto, Artist>();
        CreateMap<UpdateArtistDto, Artist>();
        CreateMap<Artist, UpdateArtistDto>();
        CreateMap<Artist, ReadArtistDto>();
    }
}