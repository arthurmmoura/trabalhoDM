import React from 'react';
import { TouchableOpacity } from 'react-native';
import {ViewItem, LineText, FakeImage, Text, TexT} from '../styles/styles';

const ContentItem = (props) => {
    const {name, img, desc, quantidade, marca, id, onPress} = props;

    function renderImg(img) {
        if (img) {
            return <FakeImage source={{uri: img}}/>
        } else {
            return <FakeImage/>
        }
    }    

    return (
        <TouchableOpacity onPress={()=>onPress()}>
            <ViewItem>
                {renderImg(img)}
               <LineText fontSize="20px">{ name }</LineText>
               
               <TexT fontSize="10px" align= "right"
               >         Quantidade: { quantidade }</TexT>
               <TexT fontSize="10px"  align= "right"
               >     Marca: { marca }</TexT>
            </ViewItem>
        </TouchableOpacity>
    )
}

export default ContentItem;