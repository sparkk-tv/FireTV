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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dftxTfDKQkFDUI1Z1kI01A",
                      "PL4A79YBwLx9fe4xLz2XMBJCuC_CXicocb"],
                title: "Aidan 5"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fwSIgktWfJLKr0KpFPz1Bj",
                      "PL4A79YBwLx9dgScZdo0yfxYSSMd29lVei"],
                title: "Body Jumpers"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9cBIs3QJYYSRHIUbfnYCgsF",
                      "PL4A79YBwLx9e47gxH_sZOYSY2V4yBpKJD"],
                title: "BrothAhood"
            },
            {
                type: "mutliPlaylists",
                ids: ["PL4A79YBwLx9epmy6DlD1JuZeIgQRyTAxo",
                      "PL4A79YBwLx9eVscj_WaUodYnbT4sFqxmz",
                      "PL4A79YBwLx9fVKf-bjV-PM-kvohRFFmct"],
                title: "BTS On The Road"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dfHbSKua9orok6hmNFhdwt",
                      "PL4A79YBwLx9fNQqA1ZTt6xuvmtrfnnvmE"],
                title: "Caledonia"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fvCCH7uh-9XYeTrwehW8hg"],
                title: "Cheerleader Karate School"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dFVxs6Byf58lmOBeMyv0YB",
                     "PL4A79YBwLx9dGOcYVlJ_RISmGl3jc7iCp"],
                title: "Clean Livin"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9ekYq5REzUAS02kQP8MxbEO",
                      "PL4A79YBwLx9eb73ZiVVal7zjCPxBjWE4M"],
                title: "Color Blind"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9e_zVF_iu0AXxzrSaFwVLlc",
                      "PL4A79YBwLx9eRTxZZAyY_u2v-2aFr0FYS"],
                title: "Dawn"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cHvg1J6cK_12LLXXPmCX6W"],
                title: "Death's Door"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9clyeB5Xwl0xLcCa7JUm6mu",
                      "PL4A79YBwLx9d8a71n5l7ZIgY_Yxizbirt"],
                title: "Downtown Girls"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fTpu8iX5Bdncp6extd1JyY",
                      "PL4A79YBwLx9cnIkefmbMfTVRKIZOEcdiz"],
                title: "Drifter"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fOCTG-O6GAuukmfXD4S2wK"],
                title: "Eris"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dqMJVdHnuiGkzdNyuFOSkj",
                      "PL4A79YBwLx9c6Oglr2qFB1xyQBdWHlu7O"],
                title: "Ex-Factor"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9e0PYuhgIrrJZKAoaROvVkl",
                      "PL4A79YBwLx9cP7FZ8hx837AQGXY_LM2e8"],
                title: "Geez Louise"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9c98d_D0qgx0ep0N535wtTU"],
                title: "Genesis"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9eggiyMEX_ntQ6StmDy36WF",
                      "PL4A79YBwLx9d47hZcC_fEEVDecaly4dvh"],
                title: "Horse Mask"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r",
                      "PL4A79YBwLx9fPDPZOqzwFOXgt4_-9JodW",
                      "PL4A79YBwLx9dKz_e3N8brfMsCS-T0xrSu",
                      "PL4A79YBwLx9dIb7H-2QiCsQyDddWy9Dc9",
                      "PL4A79YBwLx9fKNpxf0WtIFyjndda_F9GH",
                      "PL4A79YBwLx9eHDh5wjADMDgJ2kW_pHhmB",
                      "PL4A79YBwLx9dDDiWIr2dSpgtQITu3KTno",
                      "PL4A79YBwLx9fGaH-sd8r9Ey-6Dw2zJk6y"],
                title: "How I Seize It"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dZ5Ir6Ew1fpTsyQeNkURnw",
                      "PL4A79YBwLx9drNvwvuxxYImnK1ITsSz3E",
                      "PL4A79YBwLx9f6f8ug9YAh4mYOWTlZ2d4U"],
                title: "I Am Tim"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9d-iZCu-jIc86d1Hjm0MPeR",
                      "PL4A79YBwLx9clsnXVIwZqogvpew0otP4-",
                      "PL4A79YBwLx9damR6kbbrxelWHHFTU0l8T",
                      "PL4A79YBwLx9f02HG35jBdWgMqUKntz0iz",
                      "PL4A79YBwLx9dZDUgVc4pWBtiFpa3Qp27l"],
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9chVTNoZODvN5ziLnH79q9q",
                      "PL4A79YBwLx9f7Kj4EojNSdhXUcCihMNhh"],
                title: "LOL"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9doUySO7si7soJ1qVIxObgw"],
                title: "Long Distance"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9cXiMwbWnDPiyUnrAog18xf",
                      "PL4A79YBwLx9caj4E5-c7Hdv40X6bfPHLb",
                      "PL4A79YBwLx9fyOB7miIAEd0BVjQPx0pit"],
                title: "Love Kabob"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9cwnrNePJNzu5MUNf0g2-nP",
                      "PL4A79YBwLx9e4pObFJ8UqQgIQ0s7s35fh",
                      "PL4A79YBwLx9deaC4VIdnGXUTLqdjKXSBh"],
                title: "Lover's Lane"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fJZedzQXDd6SKgU4ZqykHr",
                      "PL4A79YBwLx9cC78eG39VXxJce1vqg7C5v"],
                title: "Nate & Jamie"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9c_1IXQLPXfSL_UPoDUh2DG",
                      "PL4A79YBwLx9d4tI4vOZRQg6SOnQqEyL6r",
                      "PL4A79YBwLx9e2vfSKFEtTN8UgUN5qT3Zn"],
                title: "Or So The Story Goes"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dW6lreSxEJm6XkBVGE0K2c",
                      "PL4A79YBwLx9dulYHslHDeiIJsU87TzV3K"],
                title: "Party Girl"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fYNVwReqm2MwS_36F8uNWY",
                      "PL4A79YBwLx9cteXTo31bGeIntdMFvTSwW"],
                title: "Phobia"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fEQEUkMoBtmNwfP5RcixTk",
                      "PL4A79YBwLx9cTPq8fKhJg75dPmJ88SC8v"],
                title: "Pieces"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fSu86TeufkaByuF8kN__n7",
                      "PL4A79YBwLx9e6l4wF-xJqYeDMUjjL968B",
                      "PL4A79YBwLx9ehbCEXkLwc4yfX1WD447Yk"],
                title: "Real Adult Feelings"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9d2LUmGOC_CBLj5e7oFQrMg",
                      "PL4A79YBwLx9eAeU1HZ5ciKcSXJUeUo8eJ",
                      "PL4A79YBwLx9cn1iBfhISUB5HpmXSCmqp6"],
                title: "Sons Of The Brotherhood"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9eWfVNjdJ2wbGWGUi1vR3vb"],
                title: "Soulgrinder"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fSaDhZgsYrYTiGn6buEQBM",
                      "PL4A79YBwLx9dFcVK5EkLk-Mvxu7Nt5N_d",
                      "PL4A79YBwLx9cW-AaDEOURbHIjQKHVLCCm",
                      "PL4A79YBwLx9fLIA666qFsn9TZvGKHUO-e",
                      "PL4A79YBwLx9epGPnW3OCMN3kcO41Uyzua",
                      "PL4A79YBwLx9c1rWStqzv2N52mOCqNkhpF"],
                title: "The Lyons Den"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9dT9S1oOEnNoHMNcUarS9eI",
                      "PL4A79YBwLx9fSkgwgl5jvEB4R7d5UcDFr"],
                title: "The Nanny Interviews"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fm7_-O97KwfeW32SGLlO4q"],
                title: "The Newtown Girls"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9epSw5yvpHWr3-oFuPrbkok",
                      "PL4A79YBwLx9cUvs7cW_0TM31sgAv9WAU5"],
                title: "The People That Touch Your Food"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9ftyCviJvGXzb1Ib9EvL_3f",
                      "PL4A79YBwLx9c6IBGmZUHdarkEsYXGBY8s"],
                title: "The Stranger"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fF0oEoEWj8zIlhT6J3kNvM",
                      "PL4A79YBwLx9c6jd1mlS6zZPK-zYRqTkhu"],
                title: "The Wig People"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2yJjO99hEFWAsmsMbRaFX"],
                title: "Thick & Thin"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9d0a8BKYr14wDokReNc91bW",
                      "PL4A79YBwLx9erYiABqJC2_X1WALSXozU1",
                      "PL4A79YBwLx9cEGpdMusfoEKM-c2R3hBYc"],
                title: "Things & Stuff"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fFpHOwYlsi4efIl02QiIgX"],
                title: "Three Guys & A Witch"
            },
            {
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9fjbDZgz9mSC7YPYDblW35_",
                      "PL4A79YBwLx9cUwJElPqwKe15eUSBdi9wR",
                      "PL4A79YBwLx9f5rHbvFpD3A0-y23et9obl"],
                title: "Thurston"
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
                type: "multiPlaylists",
                ids: ["PL4A79YBwLx9cRSafkLBoFczB6gmYADEQM",
                      "PL4A79YBwLx9fkKy9gW7IClQSXPIe2kM26",
                      "PL4A79YBwLx9cZyA55M6HM9X_JW_rVduuZ",
                      "PL4A79YBwLx9c5uR83pFJhCAAsFTTJI_ZW"],
                title: "Zomblogalypse"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
