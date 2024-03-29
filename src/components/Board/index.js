import React from 'react';
import { loadLists } from '../../services/api'


import { Container } from './styles';

import List from './../List/index';

const lists = loadLists();

const Board = () => {
    return (
        <Container>
            {
                lists.map(list => <List key={list.title} data={list} />)
            }
        </Container>
    );
};

export default Board;