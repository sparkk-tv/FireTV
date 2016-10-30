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
                id: ["PL4A79YBwLx9cijP5V4FnYL51Ys5jUy__s"],
                title: "Above The Fold"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9dftxTfDKQkFDUI1Z1kI01A"],
                title: "Aidan 5"
            },
            {
                type: "playlist",
                id: ["PL4A79YBwLx9cbPFzIqnzlfy3x7Zya-70I"],
                title: "Alexander Reese"
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
