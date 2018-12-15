import { Component } from 'inferno';
import blankNode from '../lib/blank-node';

export default class EditToolbar extends Component {
    shouldComponentUpdate() {
        return false;
    }

    add(isFolder, event) {
        console.log(event)
        console.log(isFolder)
        event.stopPropagation();
        this.props.node.addChild(blankNode(isFolder));
        this.props.node.expand();
    }

    edit(event) {

        event.stopPropagation();

        this.props.node.toggleEditing();
    }

    remove(event) {
        event.stopPropagation();

        this.props.node.remove();
    }

    render() {
        let buttons = [];

        if (this.props.dom._tree.config.editing.edit) {
            buttons.push(<a className='btn icon icon-pencil' onclick={this.edit.bind(this)} title='Edit this node'></a>);
        }

        if (this.props.node.isFolder && this.props.dom._tree.config.editing.add) {
            buttons.push(<a className='btn icon icon-folder' onclick={this.add.bind(this, true)} title='Add a folder node'></a>);
            buttons.push(<a className='btn icon icon-plus' onclick={this.add.bind(this, false)} title='Add a file node'></a>);
        }

        if (this.props.dom._tree.config.editing.remove) {
            buttons.push(<a className='btn icon icon-minus' onclick={this.remove.bind(this)} title='Remove this node'></a>);
        }

        return <span className='btn-group'>{ buttons }</span>;
    }
}
