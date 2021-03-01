using Microsoft.EntityFrameworkCore.Migrations;

namespace ManalyticsBackend.Migrations
{
    public partial class CreateColorIdentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ColorIdentity",
                table: "Cards");

            migrationBuilder.AddColumn<int>(
                name: "ColorIdentityId",
                table: "Cards",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ColorIdentity",
                columns: table => new
                {
                    ColorIdentityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorIdentity", x => x.ColorIdentityId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_ColorIdentityId",
                table: "Cards",
                column: "ColorIdentityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_ColorIdentity_ColorIdentityId",
                table: "Cards",
                column: "ColorIdentityId",
                principalTable: "ColorIdentity",
                principalColumn: "ColorIdentityId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_ColorIdentity_ColorIdentityId",
                table: "Cards");

            migrationBuilder.DropTable(
                name: "ColorIdentity");

            migrationBuilder.DropIndex(
                name: "IX_Cards_ColorIdentityId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "ColorIdentityId",
                table: "Cards");

            migrationBuilder.AddColumn<string>(
                name: "ColorIdentity",
                table: "Cards",
                type: "longtext",
                nullable: true);
        }
    }
}
