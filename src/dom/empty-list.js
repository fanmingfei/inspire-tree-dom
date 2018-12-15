import { Component } from 'inferno';

export default class EmptyList extends Component {
    render() {
        const clz = {
            title: true,
            icon: true,
            'icon-file-empty': !this.props.isFolder,
            empty: true
        }
        console.log(clz)
        return (<ol><li className='leaf'>
            <span className={clz}>{ this.props.text }</span>
        </li></ol>);
    }
}
