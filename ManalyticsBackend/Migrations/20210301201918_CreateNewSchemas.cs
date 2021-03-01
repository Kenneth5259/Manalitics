using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ManalyticsBackend.Migrations
{
    public partial class CreateNewSchemas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sets",
                columns: table => new
                {
                    SetId = table.Column<string>(type: "varchar(255)", nullable: false),
                    Title = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sets", x => x.SetId);
                });

            migrationBuilder.CreateTable(
                name: "Cards",
                columns: table => new
                {
                    CardId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "longtext", nullable: true),
                    ColorIdentity = table.Column<string>(type: "longtext", nullable: true),
                    ManaCost = table.Column<string>(type: "longtext", nullable: true),
                    CMC = table.Column<int>(type: "int", nullable: false),
                    Artist = table.Column<string>(type: "longtext", nullable: true),
                    FlavorText = table.Column<string>(type: "longtext", nullable: true),
                    ContainingSetSetId = table.Column<string>(type: "varchar(255)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cards", x => x.CardId);
                    table.ForeignKey(
                        name: "FK_Cards_Sets_ContainingSetSetId",
                        column: x => x.ContainingSetSetId,
                        principalTable: "Sets",
                        principalColumn: "SetId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PrimaryType",
                columns: table => new
                {
                    PrimaryTypeId = table.Column<int>(type: "int", nullable: false),
                    CardId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrimaryType", x => x.PrimaryTypeId);
                    table.ForeignKey(
                        name: "FK_PrimaryType_Cards_CardId",
                        column: x => x.CardId,
                        principalTable: "Cards",
                        principalColumn: "CardId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SubType",
                columns: table => new
                {
                    SubTypeId = table.Column<string>(type: "varchar(255)", nullable: false),
                    CardId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubType", x => x.SubTypeId);
                    table.ForeignKey(
                        name: "FK_SubType_Cards_CardId",
                        column: x => x.CardId,
                        principalTable: "Cards",
                        principalColumn: "CardId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_ContainingSetSetId",
                table: "Cards",
                column: "ContainingSetSetId");

            migrationBuilder.CreateIndex(
                name: "IX_PrimaryType_CardId",
                table: "PrimaryType",
                column: "CardId");

            migrationBuilder.CreateIndex(
                name: "IX_SubType_CardId",
                table: "SubType",
                column: "CardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PrimaryType");

            migrationBuilder.DropTable(
                name: "SubType");

            migrationBuilder.DropTable(
                name: "Cards");

            migrationBuilder.DropTable(
                name: "Sets");
        }
    }
}
