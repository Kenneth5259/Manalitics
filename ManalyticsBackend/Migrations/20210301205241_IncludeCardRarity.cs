using Microsoft.EntityFrameworkCore.Migrations;

namespace ManalyticsBackend.Migrations
{
    public partial class IncludeCardRarity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CRarityCardRarityId",
                table: "Cards",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CardRarity",
                columns: table => new
                {
                    CardRarityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardRarity", x => x.CardRarityId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_CRarityCardRarityId",
                table: "Cards",
                column: "CRarityCardRarityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardRarity_CRarityCardRarityId",
                table: "Cards",
                column: "CRarityCardRarityId",
                principalTable: "CardRarity",
                principalColumn: "CardRarityId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardRarity_CRarityCardRarityId",
                table: "Cards");

            migrationBuilder.DropTable(
                name: "CardRarity");

            migrationBuilder.DropIndex(
                name: "IX_Cards_CRarityCardRarityId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "CRarityCardRarityId",
                table: "Cards");
        }
    }
}
