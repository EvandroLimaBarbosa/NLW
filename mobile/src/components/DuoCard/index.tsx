import { TouchableOpacity, View, Text } from "react-native";
import { GameController } from 'phosphor-react-native';
import { Duoinfo } from "../Duo info";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface DuoCardProps {
  hourEnd: string,
  hourStart: string,
  id: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number,
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({data}: Props) {
  return (
    <View style={styles.container}>
      <Duoinfo label="Nome" value={data.name} />
      <Duoinfo label="Tempo de Jogo" value={`${data.yearsPlaying} anos`} />
      <Duoinfo label="Disponibilidade" value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} /> 
      <Duoinfo label="Chamada de áudio?" value={data.useVoiceChannel ? "Sim" : "Não"} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}/>

      <TouchableOpacity style={styles.button}>
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>

    </View>
  );
}
