import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import React, { useState } from 'react';
import Card from "../components/Card/Card"

const Posts = () => {
    const width = Dimensions.get("screen").width
    const [currentindex, setIndex] = useState(0)
    const data = [
        {
            image: 'https://source.unsplash.com/random/200x200?sig=1',
            type: 1,
        },

        {
            image: 'https://source.unsplash.com/random/200x200?sig=2',
            type: 1,
        },
        {
            image:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            type: 2,
        },
        {
            image: 'https://source.unsplash.com/random/200x200?sig=3',
            type: 1,
        },

        {
            image: 'https://source.unsplash.com/random/200x200?sig=4',
            type: 1,
        },

        {
            image: 'https://source.unsplash.com/random/200x200?sig=5',
            type: 1,
        },
    ];

    // On scroll event 
    const onScroll = (event) => {
        const totalWidth = event.nativeEvent.layoutMeasurement.width
        const xpos = event.nativeEvent.contentOffset.x
        const current = Math.floor(xpos / totalWidth);
        setIndex(current)
    }
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                bounces={false}
                decelerationRate="fast"
                onScroll={onScroll}
                onEndReachedThreshold={0.1}
                renderItem={({ item, index }) => (
                    <>
                        {currentindex == 2 ? (
                            <Video
                                source={{ uri: item.image }}

                                posterResizeMode={'cover'}
                                resizeMode={'cover'}
                                style={{ width: width, height: 250, backgroundColor: "#3d3d3d" }}
                            />
                        ) : (
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: width, height: 250 }}
                            />
                        )}
                    </>
                )}
            />
            {/* Pagination dots */}
            <View style={{ width: width, flexDirection: "row", marginTop: 10, justifyContent: "center" }}>
                {data.map((_, index) => (
                    <View key={index} style={[styles.pagination, (currentindex === index ? styles.paginationSelected : null)]}>

                    </View>
                ))}
            </View>

        </View>
    );
};
const styles = StyleSheet.create({

    pagination: {
        borderRadius: 12,
        width: 12,
        height: 12,
        margin: 5,
        backgroundColor: "#000000",

    },
    paginationSelected: {
        backgroundColor: "#2196F3"
    }

});
export default Posts;