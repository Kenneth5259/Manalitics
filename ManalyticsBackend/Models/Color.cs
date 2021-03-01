using System.Collections.Generic;

namespace ManalyticsBackend.Models
{
    public enum Color
    {
        // Single Colors
        W = 1,
        U = 2,
        B = 3,
        R = 4,
        G = 5,

        // Colorless
        A = 6,

        // Dual Colors
        WU = 7,
        WB = 8,
        WR = 9,
        WG = 10,
        UB = 11,
        UR = 12,
        UG = 13,
        BR = 14,
        BG = 15,
        RG = 16

        // Tri Colors

        WUB = 17,
        UBR = 18,
        BRG = 19,
        RGU = 20,
        GWU = 21,
        WBG = 22,
        URW = 23,
        BGU = 24,
        RWB = 25,
        GUR = 26

        // 4 Color
        WUBR = 27,
        UBGR = 28,
        BRGW = 29,
        RGWU = 30,
        GWUB = 31,

        // 5 color
        WUBRG = 32
    }
    public class ColorIdentity
    {
        public Color ColorIdentityId {get; set;}
    }
}