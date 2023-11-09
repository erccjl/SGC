using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SGC.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class sgc20v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Consorcio_Usuario_UsuarioId",
                table: "Consorcio");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcista_Persona_PersonaId",
                table: "Consorcista");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcista_Unidades_UnidadId",
                table: "Consorcista");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcista_Usuario_UsuarioId",
                table: "Consorcista");

            migrationBuilder.DropForeignKey(
                name: "FK_Persona_Usuario_UsuarioId",
                table: "Persona");

            migrationBuilder.DropForeignKey(
                name: "FK_Unidades_Consorcio_ConsorcioId",
                table: "Unidades");

            migrationBuilder.DropForeignKey(
                name: "FK_Unidades_Usuario_UsuarioId",
                table: "Unidades");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuario_Usuario_UsuarioId1",
                table: "Usuario");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Persona",
                table: "Persona");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Consorcista",
                table: "Consorcista");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Consorcio",
                table: "Consorcio");

            migrationBuilder.RenameTable(
                name: "Usuario",
                newName: "Usuarios");

            migrationBuilder.RenameTable(
                name: "Persona",
                newName: "Personas");

            migrationBuilder.RenameTable(
                name: "Consorcista",
                newName: "Consorcistas");

            migrationBuilder.RenameTable(
                name: "Consorcio",
                newName: "Consorcios");

            migrationBuilder.RenameIndex(
                name: "IX_Usuario_UsuarioId1",
                table: "Usuarios",
                newName: "IX_Usuarios_UsuarioId1");

            migrationBuilder.RenameIndex(
                name: "IX_Persona_UsuarioId",
                table: "Personas",
                newName: "IX_Personas_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcista_UsuarioId",
                table: "Consorcistas",
                newName: "IX_Consorcistas_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcista_UnidadId",
                table: "Consorcistas",
                newName: "IX_Consorcistas_UnidadId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcista_PersonaId",
                table: "Consorcistas",
                newName: "IX_Consorcistas_PersonaId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcio_UsuarioId",
                table: "Consorcios",
                newName: "IX_Consorcios_UsuarioId");

            migrationBuilder.AddColumn<string>(
                name: "Apellido",
                table: "Personas",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "CUIT",
                table: "Personas",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Personas",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Documento",
                table: "Personas",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "FechaNacimiento",
                table: "Personas",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Nombre",
                table: "Personas",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "RazonSocial",
                table: "Personas",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Personas",
                table: "Personas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consorcistas",
                table: "Consorcistas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consorcios",
                table: "Consorcios",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "TipoMovimientos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    EsSuma = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    State = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoMovimientos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TipoMovimientos_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Movimientos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nota = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Monto = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    TipoExpensa = table.Column<int>(type: "int", nullable: false),
                    TipoMovimientoId = table.Column<int>(type: "int", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    State = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movimientos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Movimientos_TipoMovimientos_TipoMovimientoId",
                        column: x => x.TipoMovimientoId,
                        principalTable: "TipoMovimientos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Movimientos_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Movimientos_TipoMovimientoId",
                table: "Movimientos",
                column: "TipoMovimientoId");

            migrationBuilder.CreateIndex(
                name: "IX_Movimientos_UsuarioId",
                table: "Movimientos",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_TipoMovimientos_UsuarioId",
                table: "TipoMovimientos",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcios_Usuarios_UsuarioId",
                table: "Consorcios",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcistas_Personas_PersonaId",
                table: "Consorcistas",
                column: "PersonaId",
                principalTable: "Personas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcistas_Unidades_UnidadId",
                table: "Consorcistas",
                column: "UnidadId",
                principalTable: "Unidades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcistas_Usuarios_UsuarioId",
                table: "Consorcistas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Personas_Usuarios_UsuarioId",
                table: "Personas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Unidades_Consorcios_ConsorcioId",
                table: "Unidades",
                column: "ConsorcioId",
                principalTable: "Consorcios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Unidades_Usuarios_UsuarioId",
                table: "Unidades",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Usuarios_UsuarioId1",
                table: "Usuarios",
                column: "UsuarioId1",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Consorcios_Usuarios_UsuarioId",
                table: "Consorcios");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcistas_Personas_PersonaId",
                table: "Consorcistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcistas_Unidades_UnidadId",
                table: "Consorcistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Consorcistas_Usuarios_UsuarioId",
                table: "Consorcistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Personas_Usuarios_UsuarioId",
                table: "Personas");

            migrationBuilder.DropForeignKey(
                name: "FK_Unidades_Consorcios_ConsorcioId",
                table: "Unidades");

            migrationBuilder.DropForeignKey(
                name: "FK_Unidades_Usuarios_UsuarioId",
                table: "Unidades");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Usuarios_UsuarioId1",
                table: "Usuarios");

            migrationBuilder.DropTable(
                name: "Movimientos");

            migrationBuilder.DropTable(
                name: "TipoMovimientos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Personas",
                table: "Personas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Consorcistas",
                table: "Consorcistas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Consorcios",
                table: "Consorcios");

            migrationBuilder.DropColumn(
                name: "Apellido",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "CUIT",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "Documento",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "FechaNacimiento",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "Nombre",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "RazonSocial",
                table: "Personas");

            migrationBuilder.RenameTable(
                name: "Usuarios",
                newName: "Usuario");

            migrationBuilder.RenameTable(
                name: "Personas",
                newName: "Persona");

            migrationBuilder.RenameTable(
                name: "Consorcistas",
                newName: "Consorcista");

            migrationBuilder.RenameTable(
                name: "Consorcios",
                newName: "Consorcio");

            migrationBuilder.RenameIndex(
                name: "IX_Usuarios_UsuarioId1",
                table: "Usuario",
                newName: "IX_Usuario_UsuarioId1");

            migrationBuilder.RenameIndex(
                name: "IX_Personas_UsuarioId",
                table: "Persona",
                newName: "IX_Persona_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcistas_UsuarioId",
                table: "Consorcista",
                newName: "IX_Consorcista_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcistas_UnidadId",
                table: "Consorcista",
                newName: "IX_Consorcista_UnidadId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcistas_PersonaId",
                table: "Consorcista",
                newName: "IX_Consorcista_PersonaId");

            migrationBuilder.RenameIndex(
                name: "IX_Consorcios_UsuarioId",
                table: "Consorcio",
                newName: "IX_Consorcio_UsuarioId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Persona",
                table: "Persona",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consorcista",
                table: "Consorcista",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Consorcio",
                table: "Consorcio",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcio_Usuario_UsuarioId",
                table: "Consorcio",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcista_Persona_PersonaId",
                table: "Consorcista",
                column: "PersonaId",
                principalTable: "Persona",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcista_Unidades_UnidadId",
                table: "Consorcista",
                column: "UnidadId",
                principalTable: "Unidades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consorcista_Usuario_UsuarioId",
                table: "Consorcista",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Persona_Usuario_UsuarioId",
                table: "Persona",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Unidades_Consorcio_ConsorcioId",
                table: "Unidades",
                column: "ConsorcioId",
                principalTable: "Consorcio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Unidades_Usuario_UsuarioId",
                table: "Unidades",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuario_Usuario_UsuarioId1",
                table: "Usuario",
                column: "UsuarioId1",
                principalTable: "Usuario",
                principalColumn: "Id");
        }
    }
}
