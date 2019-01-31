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
                id: ["PL4A79YBwLx9cbPFzIqnzlfy3x7Zya-70I"],
                title: "All About Manos"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "All That Shabaz"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Among Friends"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Aurora: Chronicles Of A Hero"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Battle Jar"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Best Friend Dad"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Body Jumpers"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Body Jumpers: Resurrection"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Boost"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "BrothAhood"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "BTS On The Road"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Caledonia"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Cheerleader Karate School"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Clean Livin"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Color Blind"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Consequences"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Davey's Diary"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Dawn"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Death's Door"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Downtown Girls"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Drifter"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Eris"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Ex-Factor"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Falling Apart"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Flicks"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Frontier Guard"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Geez Louise"
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
