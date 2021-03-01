namespace ManalyticsBackend.Models
{
    public enum Rarity 
    {
        // common 
        C = 1,
        // uncommon
        U = 2,
        // Rare
        R = 3,
        //Mythic
        M = 4

    }

    public class CardRarity
    {
        public Rarity CardRarityId {get; set;}
    }
}