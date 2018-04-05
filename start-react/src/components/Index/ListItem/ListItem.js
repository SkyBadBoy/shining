import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;
class ListItem extends Component {
    render() {
        return (
           <li>
               <Card
                   hoverable
                   style={{ width: 240}}
                   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ height: 150 }} />}
               >
                   <Meta
                       title="Europe Street beat"
                       description="www.instagram.com"
                   />
               </Card>
           </li>
        )
    }
}

export default ListItem