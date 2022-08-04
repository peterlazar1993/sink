import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Text, View } from "react-native";

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
];

const colors = ['red', 'green', 'yellow', 'purple', 'pink']

export const MyList = () => {
    return (
        <FlashList
            data={DATA}
            renderItem={({ item, index }) =><View style={{ height: 100, backgroundColor: colors[index % colors.length] }}><Text>{item.title}</Text></View>}
            estimatedItemSize={200}
        />
    );
};