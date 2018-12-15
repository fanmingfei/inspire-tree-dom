/**
 * Helper method to create an object for a new node.
 *
 * @private
 * @return {void}
 */

let i = 1
export default function blankNode(isFolder) {
    i++
    return {
        text: 'untitled' + i,
        itree: {
            state: {
                editing: true,
                focused: true
            }
        },
        isFolder: !!isFolder
    };
}
