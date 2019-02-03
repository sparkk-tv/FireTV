(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "sparkknow",
        devKey: "AIzaSyC6xwxcq1J9lnV4UgoDfRmwJ15818RUO94",
        channels: [
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fDreOnYZxcpDm0jD9QFq5B"],
                title: "About Abby"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dftxTfDKQkFDUI1Z1kI01A"],
                title: "Aidan 5 (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fe4xLz2XMBJCuC_CXicocb"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e-5RccdoTYjcTUwW5-oQjM"],
                title: "All About Manos"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fu-qpdfQlVtsEEKtSEPFVe"],
                title: "All That Shabaz"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eadxMzJYWzkiBrWEJTe2lL"],
                title: "Among Friends"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c679PXFPysAM7472sqMevB"],
                title: "Aurora: Chronicles Of A Hero"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cEeCQS-iRr3gwwuFbg4oXE"],
                title: "Battle Jar"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fIPBLNO1U4UivKBD-GS02z"],
                title: "Best Friend Dad"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fwSIgktWfJLKr0KpFPz1Bj"],
                title: "Body Jumpers (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dgScZdo0yfxYSSMd29lVei"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9do584rdl302jaxOauSmwlm"],
                title: "Body Jumpers: Resurrection"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ekjqa4t9xjRG8-Yw9KFECT"],
                title: "Boost"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cBIs3QJYYSRHIUbfnYCgsF"],
                title: "BrothAhood"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9epmy6DlD1JuZeIgQRyTAxo"],
                title: "BTS On The Road (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eVscj_WaUodYnbT4sFqxmz"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dfHbSKua9orok6hmNFhdwt"],
                title: "Caledonia (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fNQqA1ZTt6xuvmtrfnnvmE"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fvCCH7uh-9XYeTrwehW8hg"],
                title: "Cheerleader Karate School"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dFVxs6Byf58lmOBeMyv0YB"],
                title: "Clean Livin (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dGOcYVlJ_RISmGl3jc7iCp"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ekYq5REzUAS02kQP8MxbEO"],
                title: "Color Blind (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eb73ZiVVal7zjCPxBjWE4M"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dUEkwLABElYeoAowiYNdV-"],
                title: "Consequences"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fXQ2gxplAqlZgBc59jL3kc"],
                title: "Davey's Diary"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e_zVF_iu0AXxzrSaFwVLlc"],
                title: "Dawn"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cHvg1J6cK_12LLXXPmCX6W"],
                title: "Death's Door"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9clyeB5Xwl0xLcCa7JUm6mu"],
                title: "Downtown Girls (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d8a71n5l7ZIgY_Yxizbirt"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fTpu8iX5Bdncp6extd1JyY"],
                title: "Drifter (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cnIkefmbMfTVRKIZOEcdiz"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fOCTG-O6GAuukmfXD4S2wK"],
                title: "Eris"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dqMJVdHnuiGkzdNyuFOSkj"],
                title: "Ex-Factor (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c6Oglr2qFB1xyQBdWHlu7O"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fgR9RYyG8rdp7ITcPj-ZXx"],
                title: "Falling Apart"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d7CEEcHAmagzlqrqqy4B5s"],
                title: "Frontier Guard"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e0PYuhgIrrJZKAoaROvVkl"],
                title: "Geez Louise (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cP7FZ8hx837AQGXY_LM2e8"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c98d_D0qgx0ep0N535wtTU"],
                title: "Genesis"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eggiyMEX_ntQ6StmDy36WF"],
                title: "Horse Mask"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "How I Seize It (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fPDPZOqzwFOXgt4_-9JodW"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dKz_e3N8brfMsCS-T0xrSu"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dIb7H-2QiCsQyDddWy9Dc9"],
                title: "-- Season 4"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fKNpxf0WtIFyjndda_F9GH"],
                title: "-- Season 5"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eHDh5wjADMDgJ2kW_pHhmB"],
                title: "-- Season 6"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dDDiWIr2dSpgtQITu3KTno"],
                title: "-- Season 7"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fGaH-sd8r9Ey-6Dw2zJk6y"],
                title: "-- Season 8"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dZ5Ir6Ew1fpTsyQeNkURnw"],
                title: "I Am Tim (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9drNvwvuxxYImnK1ITsSz3E"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9f6f8ug9YAh4mYOWTlZ2d4U"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eU3G_oDXAIHGsd0W4-U7iu"],
                title: "Imperfect"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9f184f8W5EOvOEY9vG2fAtp"],
                title: "Internet Famous"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e6y87mVjbOt0CBW51e5-TI"],
                title: "Is It Me?"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dY8BCmksG3zv5wecAjHrcP"],
                title: "Justice"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d-iZCu-jIc86d1Hjm0MPeR"],
                title: "Karma"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dN-k0eYpnMtwqZpevKNCe_"],
                title: "Kush Cafe"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9clA73GhEWVHjezspksNyFM"],
                title: "Lifelike"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9chVTNoZODvN5ziLnH79q9q"],
                title: "LOL"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9doUySO7si7soJ1qVIxObgw"],
                title: "Long Distance"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cXiMwbWnDPiyUnrAog18xf"],
                title: "Love Kabob (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9caj4E5-c7Hdv40X6bfPHLb"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fyOB7miIAEd0BVjQPx0pit"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cwnrNePJNzu5MUNf0g2-nP"],
                title: "Lover's Lane (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e4pObFJ8UqQgIQ0s7s35fh"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9deaC4VIdnGXUTLqdjKXSBh"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fJZedzQXDd6SKgU4ZqykHr"],
                title: "Nate & Jamie (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cC78eG39VXxJce1vqg7C5v"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9foV4HZeW0tXxVbj5VmXqUr"],
                title: "Noah's Oscars Preshow"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e62hOccEC_aAyjLgFPFPd_"],
                title: "Non-Essential Personnel"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c9-wqyb0FKh2qQIcsyFsoU"],
                title: "None In The Oven"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dyaSVP2HKCXWE4UAClOrZ3"],
                title: "Not By Choice"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cvNvTFyvafQoFDBywU0J3o"],
                title: "Oh, Inverted World"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fM_hJbaJQKaD0mbzZFxBCa"],
                title: "Once & For All"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eBSaYuO6WVWzgidr_hx2lH"],
                title: "Ordained"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c_1IXQLPXfSL_UPoDUh2DG"],
                title: "Or So The Story Goes (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d4tI4vOZRQg6SOnQqEyL6r"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2vfSKFEtTN8UgUN5qT3Zn"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dW6lreSxEJm6XkBVGE0K2c"],
                title: "Party Girl"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fYNVwReqm2MwS_36F8uNWY"],
                title: "Phobia (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cteXTo31bGeIntdMFvTSwW"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fEQEUkMoBtmNwfP5RcixTk"],
                title: "Pieces (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cTPq8fKhJg75dPmJ88SC8v"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fSu86TeufkaByuF8kN__n7"],
                title: "Real Adult Feelings (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e6l4wF-xJqYeDMUjjL968B"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ehbCEXkLwc4yfX1WD447Yk"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fyRmLZTRssWtSgLmdLURAR"],
                title: "Remembering Wednesday"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cVloc_PIQOCD2pvyRrLxJw"],
                title: "Rover's Hill"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d3Su9nYPibf7c1i570Ep9u"],
                title: "Sarah"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eRZJhcSCghZ8rlxU_qFgJh"],
                title: "Self Storage (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c838GE-94wJfcuOxhsaSFL"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9f6jgs4PdD6_9iGmNUSEY48"],
                title: "Silent Stories"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d-ZB0rsMgpSe0n5y85ThIl"],
                title: "Six Figures"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eMp1WCAseRRZt5YBgOwXMZ"],
                title: "Slightly Dramatic"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cm9gI4kmXGtL4k7VJPF2dD"],
                title: "Social Life"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d2LUmGOC_CBLj5e7oFQrMg"],
                title: "Sons Of The Brotherhood (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eAeU1HZ5ciKcSXJUeUo8eJ"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cn1iBfhISUB5HpmXSCmqp6"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e4lfJZaVfJghddpi0wC4qr"],
                title: "Squatters"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eSdxCNwwFVfbLC3TjEW06N"],
                title: "Stage Fright"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fdPX2NLSLQI-x71UN0T7vI"],
                title: "Sweet Mahogany"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eIzlF17cl0B7stY3y9FVgh"],
                title: "The Bomb Shelter"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eYZLRLZa7c7GexVRTpBGox"],
                title: "The Cold Read"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c38FMUEg4E_qjhYOqTL1Re"],
                title: "The Gauntlet"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fSaDhZgsYrYTiGn6buEQBM"],
                title: "The Lyons Den"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dT9S1oOEnNoHMNcUarS9eI"],
                title: "The Nanny Interviews (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fSkgwgl5jvEB4R7d5UcDFr"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fm7_-O97KwfeW32SGLlO4q"],
                title: "The Newtown Girls"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9epSw5yvpHWr3-oFuPrbkok"],
                title: "The People That Touch Your Food (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cUvs7cW_0TM31sgAv9WAU5"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dGbeBNbRfjNk3R5tCOnElT"],
                title: "The Real Drakoolavs"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fqEy_42F4qdyyQYGaolsEA"],
                title: "The Sentinel Chronicles"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ftyCviJvGXzb1Ib9EvL_3f"],
                title: "The Stranger (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c6IBGmZUHdarkEsYXGBY8s"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fF0oEoEWj8zIlhT6J3kNvM"],
                title: "The Wig People (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c6jd1mlS6zZPK-zYRqTkhu"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d0a8BKYr14wDokReNc91bW"],
                title: "Things & Stuff (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9erYiABqJC2_X1WALSXozU1"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cEGpdMusfoEKM-c2R3hBYc"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fFpHOwYlsi4efIl02QiIgX"],
                title: "Three Guys & A Witch"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fjbDZgz9mSC7YPYDblW35_"],
                title: "Thurston (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cUwJElPqwKe15eUSBdi9wR"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9f5rHbvFpD3A0-y23et9obl"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fvrePmhco4ZfS7I3MRiqG1"],
                title: "Trailer Made"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dDA2DPgnnD8Ig-yYCViZmg"],
                title: "Twenties"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cHhxnEb1eOahaEtKv5qofl"],
                title: "Under The Affluence"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ekois38kVCnYAiN99cgsp7"],
                title: "White Lines"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cRSafkLBoFczB6gmYADEQM"],
                title: "Zomblogalypse (Season 1)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fkKy9gW7IClQSXPIe2kM26"],
                title: "-- Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cZyA55M6HM9X_JW_rVduuZ"],
                title: "-- Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c5uR83pFJhCAAsFTTJI_ZW"],
                title: "-- Season 0"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
