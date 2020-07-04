import React from 'react';
import {View, TextInput, Button, Text, Alert} from 'react-native';
//import firebase from '../database/Firebase';
import {useNavigation} from '@react-navigation/native';
import { TexT, ScrollVieW, TextInpuT } from '../styles/styles';
import {useRoute} from '@react-navigation/native';
import Sqlite from '../database/Sqlite';

const db = new Sqlite();


class ContentDetailScreen extends React.Component {
   

    constructor() {
        super();
        this.state = {
            desc: '',
            img: '',
            name: '',
            quantidade: '',
            marca: '',
        }
    }

    componentDidMount() {

        const { desc, img, name, quantidade, marca} = this.props.route.params;


        this.setState({desc});
        this.setState({img});
        this.setState({name});
        this.setState({quantidade});
        this.setState({marca});
    }

    updateContent(){
        const{ id } = this.props.route.params;
        const { navigation } = this.props;

        console.log("id a ser atualizado", id);
        const { database } = this.props.route.params;

        const data = {
            name: this.state.name,
            desc: this.state.desc,
            img: this.state.img,
            quantidade: this.state.quantidade,
            marca: this.state.marca
        }

        const num = parseInt(this.state.quantidade);
        if(num / num == 1) {
        db.updateContent(id, data, database);
        navigation.navigate('ContentScreen');
        } else {
            Alert.alert("Quantidade inválida","Quantidade deve ser um número",
        [{text: "ok"} ])
        }
        
    }

    deleteContent() {
        const { id } = this.props.route.params;
        const { navigation } = this.props;

        console.log("id a ser apagado");
        const { database } = this.props.route.params;

        db.deleteContent(id, database);
        navigation.navigate('ContentScreen');

       
    }

    onChangeTextInput(value, field) {
        const state = this.state;
        state[field] = value;
        this.setState(state);
    }

    render() {

        const {route} = this.props;

        return(
            <View>
                
                <TexT>Nome:</TexT>
                <TextInpuT value={this.state.name}
                onChangeText={(value)=>this.onChangeTextInput(value,'name')}/>
                <TexT>Quantidade:</TexT>
                <TextInpuT value={this.state.quantidade}
                onChangeText={(value)=>this.onChangeTextInput(value,'quantidade')}/>
                <TexT>Marca:</TexT>
                <TextInpuT value={this.state.marca}
                onChangeText={(value)=>this.onChangeTextInput(value,'marca')}/>
                
                
                <ScrollVieW>

                <Button color="#4473ba" title="Salvar"
            onPress={()=>this.updateContent()}
            ></Button>
            </ScrollVieW>
            <ScrollVieW>
            <Button color="#4473ba" title="Apagar"
            onPress={()=>this.deleteContent()}
            ></Button>
            </ScrollVieW>
            </View>
        )
    }
}

export default function(props) {
    const route = useRoute();
    const navigation = useNavigation();

    return <ContentDetailScreen {...props} route={route} navigation={navigation}/>;
}