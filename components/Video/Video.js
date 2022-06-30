import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from "react-native-orientation-locker"


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const VideoPlayer = () => {

    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    // Seek function
    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };


    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    // Pause function
    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    // Replay function
    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);


    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };

    const handleFullscreen = () => {
        if (!isFullScreen) {
            Orientation.lockToLandscape();
        } else {
            if (Platform.OS === "ios") {
                Orientation.lockToPortrait();
            }
            Orientation.lockToPortrait();
        }
        setIsFullScreen(!isFullScreen)

    }

    return (
        <View>
            <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                resizeMode={'cover'}
                source={{ uri: "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/25+Years+of+Artistic+Yoga.mp4" }}
                style={styles.backgroundVideo}
            />
            <MediaControls
                isFullScreen={isFullScreen}
                duration={duration}
                isLoading={isLoading}
                progress={currentTime}
                onFullScreen={handleFullscreen}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                mainColor={"#2196F3"}
                playerState={playerState}
                style={isFullScreen ? styles.backgroundVideoFullscreen : styles.backgroundVideo}
                sliderStyle={isFullScreen ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 250,
        width: '100%',
        backgroundColor: "#3d3d3d"
    },
    mediaControls: {
        width: screenHeight - 170,
        height: "100%",
        flex: 1,
        alignSelf: Platform.OS === "android" ? screenHeight < 800 ? 'center' : "flex-start" : "center",
    },
    backgroundVideoFullscreen: {
        height: screenHeight,
        width: screenWidth
    }
});

export default VideoPlayer;