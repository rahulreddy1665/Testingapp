import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import AudioFile from '../components/Audio/Audio';
import Card from '../components/Card/Card';
import VideoPlayer from '../components/Video/Video';

const FirstRoute = () => (

    <View style={{ flex: 1, }}>
        <AudioFile />
    </View>
);

const SecondRoute = () => (
    <Card>
        <VideoPlayer />
    </Card>
);

const renderScene = SceneMap({
    Audio: FirstRoute,
    Video: SecondRoute,
});

export default function Home() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
        { key: 'Audio', title: 'Audio' },
        { key: 'Video', title: 'Video' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}