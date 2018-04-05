import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'
import { Link } from 'react-router-dom'
class List extends Component {
    render() {
        return (
            <ul>
                <Link to="/"><ListItem></ListItem></Link>
            </ul>
        )
    }
}
/*<Link to={`/roster/${p.number}`}>{p.name}</Link>*/
export default List