import { Component } from 'inferno';
import blankNode from '../lib/blank-node';
import List from './list';

export default class Tree extends Component {
    add(isFolder) {
        this.props.dom._tree.focused().blur();

        this.props.dom._tree.addNode(blankNode(isFolder));
    }

    renderAddLink() {
        const list = []
        if (this.props.dom._tree.config.editing.add) {
            list.push(<li><a className='btn icon icon-folder' onClick={this.add.bind(this, true)} title='Add a new folder'></a><a className='btn icon icon-plus' onClick={this.add.bind(this, false)} title='Add a new file'></a></li>)

        }
        return list
    }

    render() {
        let { dom, nodes } = this.props;
        let loading = dom.loading;
        let pagination = nodes.pagination();

        return (<List
            dom={dom}
            limit={pagination.limit}
            loading={loading}
            nodes={nodes}
            total={pagination.total}>{ this.renderAddLink() }</List>);
    }
}
