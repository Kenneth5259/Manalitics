using System.Collections.Generic;

namespace ManalyticsBackend.Models 
{
    public class Card
    {
        // indentifying PKI
        public int CardId {get; set;}
        // Title of the Card
        public string Title {get; set;}
        // Primary Typing of the Card
        public List<PrimaryType> PrimaryTypes {get; set;}
        // Sub Typing of the Card
        public List<SubType> SubTypes {get; set;}
        // Color Identity of the Card
        public ColorIdentity ColorIdentity {get; set;}
        // Total Casting Cost of the Card
        public string ManaCost {get; set;}
        // Converted Mana Cost for the given card
        public int CMC {get; set;}
        // Name of the artist for the card
        public string Artist {get; set;}
        // Flavor Text on the given revision for the card
        public string FlavorText {get; set;}
        // Set which contains the given set
        public Set ContainingSet {get; set;}
        
        
    }
}