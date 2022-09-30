import { View } from "react-native";
import { Duoinfo } from "../Duo info";

import { styles } from "./styles";

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
      <Duoinfo label="Disponibilidade" value={`${data.weekDays.length} dias`} />
      <Duoinfo label="Chamada de áudio?" value="Diego Fernandes" colorValue="red"/>
    </View>
  );
}
