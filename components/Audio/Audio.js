import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import dings from '../../assets/audios/Over+the+Horizon.mp3';
import { PauseIcon } from '../../assets/icons/PauseIcon';
import { PlayIcon } from '../../assets/icons/PlayIcon';
import { HomeStyles } from '../../styles/GlobalStyles';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ding = new Sound(dings, error => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});
const AudioFile = () => {
    useEffect(() => {
        ding.setVolume(1);
        return () => {
            ding.release();
        };
    }, []);

    const [isPlaying, setIsplaying] = useState(false)

    const playPause = () => {
        if (!isPlaying) {
            ding.play()
        } else {
            ding.pause()
        }
        setIsplaying(!isPlaying)
    };
    return (
        <View style={HomeStyles.container}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Over the Horizon</Text>
            <TouchableOpacity style={HomeStyles.playBtn} onPress={playPause}>
                {isPlaying ?
                    <PauseIcon stroke={"#000000"} />
                    :
                    <PlayIcon stroke={"#000000"} />
                }

            </TouchableOpacity>
        </View>
    );
};
export default AudioFile