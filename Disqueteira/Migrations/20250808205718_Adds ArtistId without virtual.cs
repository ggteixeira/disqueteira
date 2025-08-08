using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Disqueteira.Migrations
{
    /// <inheritdoc />
    public partial class AddsArtistIdwithoutvirtual : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Artist",
                table: "Records",
                newName: "ArtistId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ArtistId",
                table: "Records",
                newName: "Artist");
        }
    }
}
