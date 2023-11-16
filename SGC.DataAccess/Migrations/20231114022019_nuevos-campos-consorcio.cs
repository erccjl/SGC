using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SGC.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class nuevoscamposconsorcio : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Contenido",
                table: "Consorcios",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Encabezado",
                table: "Consorcios",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contenido",
                table: "Consorcios");

            migrationBuilder.DropColumn(
                name: "Encabezado",
                table: "Consorcios");
        }
    }
}
