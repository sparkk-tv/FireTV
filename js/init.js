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
                type: "playlist",
                id: ["PL4A79YBwLx9fwSIgktWfJLKr0KpFPz1Bj"],
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
                type: "playlist",
                id: ["PL4A79YBwLx9cBIs3QJYYSRHIUbfnYCgsF"],
                title: "BrothAhood"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9epmy6DlD1JuZeIgQRyTAxo"],
                title: "BTS On The Road"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dfHbSKua9orok6hmNFhdwt"],
                title: "Caledonia"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fvCCH7uh-9XYeTrwehW8hg"],
                title: "Cheerleader Karate School"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dFVxs6Byf58lmOBeMyv0YB"],
                title: "Clean Livin"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9ekYq5REzUAS02kQP8MxbEO"],
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
                title: "Downtown Girls"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fTpu8iX5Bdncp6extd1JyY"],
                title: "Drifter"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fOCTG-O6GAuukmfXD4S2wK"],
                title: "Eris"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dqMJVdHnuiGkzdNyuFOSkj"],
                title: "Ex-Factor"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fgR9RYyG8rdp7ITcPj-ZXx"],
                title: "Falling Apart"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cP7FZ8hx837AQGXY_LM2e8"],
                title: "Flicks"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9d7CEEcHAmagzlqrqqy4B5s"],
                title: "Frontier Guard"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e0PYuhgIrrJZKAoaROvVkl"],
                title: "Geez Louise"
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
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "     - Season 2"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "     - Season 3"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dIb7H-2QiCsQyDddWy9Dc9"],
                title: "How I Seize It (Season 4)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "How I Seize It (Season 5)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "How I Seize It (Season 6)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9e2WGPjvIvHjJhjerlfCd8r"],
                title: "How I Seize It (Season 7)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dDDiWIr2dSpgtQITu3KTno"],
                title: "How I Seize It (Season 8)"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dZ5Ir6Ew1fpTsyQeNkURnw"],
                title: "I Am Tim"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cvNvTFyvafQoFDBywU0J3o"],
                title: "Oh, Inverted World"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9fqEy_42F4qdyyQYGaolsEA"],
                title: "The Sentinel Chronicles"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
