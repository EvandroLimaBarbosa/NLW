import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 30,
    height: 30
  },
  banner: {
    width: 311,
    height: 190,
    borderRadius: 8,
    marginTop: 32
  }

});