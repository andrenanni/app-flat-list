import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Produtos from "../data/Produtos";

const getProdutoPorId = (id) => {
    return Produtos.find(p => p.id == id)
}

export default ({router, navigation}) => {
    const [produto, setProduto] = useState(getProdutoPorId(router.params.id))

    return (
        <View>
            <Card>
                <Card.Cover source={{uri: produto.urlImagem}} />
                <Card.Title title={produto.titulo} />
                <Card.Content>
                    <Text variant="bobyMedium">{produto.descricao}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}