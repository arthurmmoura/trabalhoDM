import React from 'react';
import { ActivityIndicator, ScrollView} from 'react-native';
//import firebase from '../database/Firebase';
import {View, Text} from 'react-native';
import { Fab, TexT, VieW } from "../styles/styles";
import ContentItem from '../components/ContentItem';
import {useNavigation} from '@react-navigation/native';
import Sqlite from '../database/Sqlite';

const db = new Sqlite();
let database;

class ContentScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            contents: [],
            isLoading: true,
        }
    }

    componentDidMount() {
    

        database = db.initDB();
        const { navigation } = this.props;
        navigation.addListener('focus', ()=>{
            this.contentUpdate();
        });
    } 

    contentUpdate() {
        console.log('ContentUpdate');
        let contents = [];

        db.listContents(database).then((data) => {
            console.log("data", data);
            contents = data;
            this.setState({
                contents,
                isLoading: false,
            });
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        })
    }

    renderActivityIndicator() {

        if(this.state.isLoading) {
            return(
                <VieW>
                    <ActivityIndicator size="large"/>
                </VieW>
            )
        }
    }

    render() {


        this.renderActivityIndicator() 

        const { contents } = this.state;
        const { navigation } = this.props;

        const items = contents.map((content, index) =>
            <ContentItem name={content.name}
                quantidade={content.quantidade}
                img={content.img}
                marca={content.marca}
                id={content.id}
                onPress={()=>navigation.navigate('ContentDetailScreen',
                ({id: content.id, quantidade: content.quantidade, marca: content.marca, name: content.name, img: content.img, database: database})
                )}/>
        );

        return(
            <VieW>
                <ScrollView>
                    {items}
                </ScrollView>
                <Fab onPress={()=> navigation.navigate('SecondScreen', ({ database: database})) }>
                    
                <TexT>+</TexT></Fab>
                
            </VieW>
        )
    } 
}

export default function(props) {
    const navigation = useNavigation();
    return <ContentScreen {...props} navigation={navigation} />
}