import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { THEME } from "../../theme/index";
import { styles } from "./styles";

import { GameParams } from "../../@types/navigation";

import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { Ip } from "../Home";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`http://${Ip}:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={30}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
        source={{uri: game.bannerUrl}}
        style={styles.banner}
        resizeMode="cover"/>

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
        data={duos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DuoCard data={item}
          onConnect={() => {}}/>
        
        )}
        horizontal
        contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
        showsHorizontalScrollIndicator={false}
        style={styles.containerList}  
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anúncios publicados ainda.
          </Text>
        )}
        />
      </SafeAreaView>
    </Background>
  );
}
