import React from 'react';
import {View, TextInput, Button, Alert, Text} from 'react-native';
//import firebase from '../database/Firebase';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Fab, TexT, VieW, TextInpuT } from "../styles/styles";
import Sqlite from '../database/Sqlite';

const db = new Sqlite();

class SecondScreen extends React.Component {
   

    constructor() {
        super();
        this.state = { 
            name: '',
            quantidade: '',
            marca: '',
            img: ''
        }
    }

    onChangeTextInput(value, field) {

        const state = this.state;
        state[field] = value;
        this.setState(state);
        
    }

    saveContent() {

        const { navigation } = this.props;

        const { database } = this.props.route.params;
        const data = {
            name: this.state.name,
            quantidade: this.state.quantidade,
            marca: this.state.marca,
            img: this.state.img,
        }

        const num = parseInt(this.state.quantidade);
        if(num / num == 1) {
        if(this.state.name != "" ) {
        db.addContent(data, database);
        navigation.navigate("ContentScreen");
        } else {Alert.alert("Campos em branco","O campo Nome não pode estar em branco",
        [{text: "ok"} ])
    }
} else{Alert.alert("Quantidade inválida","Quantidade deve ser um número",
[{text: "ok"} ])}
    }

    render() {  

    return(
        <View>
            <TextInpuT placeholder="Nome"
                value={this.state.name}
                onChangeText={(value)=>this.onChangeTextInput(value, 'name')} 
                />
                <TextInpuT placeholder="Quantidade"
                 value={this.state.quantidade}
                onChangeText={(value)=>this.onChangeTextInput(value, 'quantidade')}
                />
                <TextInpuT placeholder="Marca"
                 value={this.state.marca}
                onChangeText={(value)=>this.onChangeTextInput(value, 'marca')}
                />
            <Button 
            color="#4473ba" 
            title="Salvar" 
            onPress={()=>this.saveContent()}/>
         </View>  
    )
}
}

export default function(props) {
    const navigation = useNavigation();
    const route = useRoute();
    return <SecondScreen {...props} navigation={navigation} route={route}/>
}