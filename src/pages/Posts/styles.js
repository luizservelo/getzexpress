import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    postsContainer: {
        padding: 10,
        backgroundColor: '#191919'
    },
    postCard: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
    },

    postImage: {
        width: 64,
        height: 64,
        marginRight: 10
    },
    postContents: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',

    },
    postTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        flex: 1
    },

});

export default styles;