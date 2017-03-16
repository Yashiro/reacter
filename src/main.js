import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import img1 from './res/image/1.jpg'

const Img=styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
`;
render(
    <div >react demo by evolify && xiachong
        <Img src={require('./res/image/img_pic.jpg')}/>
        <img src={require('./res/image/img_pic.jpg')}/>
        <Img src={img1}/>
        <img src={img1}/>
    </div>,
    document.getElementById('app')
)