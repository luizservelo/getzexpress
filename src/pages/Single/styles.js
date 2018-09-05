import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#191919',
        padding: 0
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        color: '#ffffff'
    },
    commentBar: {
        backgroundColor: "#333",
        padding: 15
    },
    commentBarText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    commentContainer: {
        backgroundColor: '#444',
        padding: 15,
    },
    commentInput: {
        width: '100%',
        padding: 10,
        paddingTop: 11,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginBottom: 15,
        fontSize: 15,
    },
    commentButton: {
        padding: 10,
        backgroundColor: '#E75112',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    commentButtonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14
    },
    userCommentArea: {
        backgroundColor: '#fafafa',
        paddingHorizontal: 15,

    },
    userCommentContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userCircleName: {
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: '#E75112',
        borderRadius: 20
    },
    userCircleNameText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    commentContent: {
        flex: 1
    },
    commentContentAuthor: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    commentContentText: {
        color: '#333333',
        fontSize: 14,
    }




});

export default styles;