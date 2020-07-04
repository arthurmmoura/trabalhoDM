import styled from 'styled-components/native'

export const VieW = styled.View`
    background: #ffffff;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: ${props => props.margintop || 0};
    margin-left: ${props => props.marginLeft || 0};
    margin-right: ${props => props.marginright || 0};
    margin-bottom: ${props => props.marginbottom || 0};
`;

export const ScrollVieW = styled.ScrollView`
    padding: 10px;
`;

export const ViewItem = styled.View`
    height: 60px;
    border-bottom-width: 2px;
    border-bottom-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FakeImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 200px;
    justify-content: center;
    align-Items: center;
    background-color: #06f; 
    margin-left: ${props => props.marginLeft || 10};
`

export const TexT = styled.Text`
    font-size: ${props => props.fontSize || 30};
    
`; 

export const LineText = styled.Text`
    font-size: ${props => props.fontSize || 30};
    margin-left: ${props => props.marginLeft || 10};
    
`

export const Fab = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 200px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    justify-content: center;
    align-Items: center;
    background-color: #06f; 
`
export const TextInpuT = styled.TextInput`

display: flex;
height: 60px;
padding: 10px;
justifyContent: center;
fontSize: 20;
border-radius: 200px;
border-bottom-width: 2px;
border-bottom-color: red;
flex-direction: column;
margin-bottom: ${props => props.marginbottom || 0};
margin-top: ${props => props.margintop || 0};

`
;

