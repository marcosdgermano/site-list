import React from 'react';
import Item from './item';

class ShowItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    title: 'Marcos',
                    url: 'https://www.facebook.com/marcosdgermano',
                    content: 'Esse é o facebook do Marcos'
                },
                {
                    title: 'Larissa',
                    url: 'https://www.facebook.com/profile.php?id=100001656704653&ref=br_rs',
                    content: 'Esse é o facebook da Larissa'
                },
                {
                    title: 'Caio',
                    url: 'https://www.facebook.com/profile.php?id=100000205956703&ref=br_rs',
                    content: 'Esse é o facebook do Caio'
                } 
            ]
        }
    }

    render() {
        const { items } = this.state;
        console.log(this.state);

        return (
            items.map(({title, url, content}) => <Item title={title} url={url} content={content} />)
        );
    }
}

export default ShowItems;