import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../../components/customButton";

const HomeScreen = () => {
  const onEncomendarPress = () => {
    console.warn("onEncomendarPress");
  };

  const onPhonenumberPress = () => {
    console.warn("onPhonenumberPress");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Bem-vindo,</Text>
        <Text style={styles.textHeader}>António Costa</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText1}>Farmácia de servico</Text>
        <Text style={styles.bodyText2}>Almeida</Text>
        <Text style={styles.bodyText3}>Avenida Carvalho {"\n"}araujo,45</Text>
        <View style={styles.bodyPhoneNumber}>
          <CustomButton
            text="259 333 888"
            type="SECONDARY"
            onPress={onPhonenumberPress}
            bgColor="white"
          />
        </View>
        <Image style={styles.map} source={require("../../../assets/map.png")} />
      </View>
      <View style={styles.footer}>
        <CustomButton
          text="Encomendar"
          type="PRIMARY"
          onPress={onEncomendarPress}
          bgColor="grey"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
  header: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  body: {
    width: "100%",
    paddingTop: 30,
    flex: 9,
    backgroundColor: "darkorange",
  },
  footer: {
    flex: 3,
    backgroundColor: "green",
    alignContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 35,
    fontWeight: "bold",
  },
  bodyText1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText2: {
    fontSize: 25,
  },
  bodyText3: {
    fontSize: 20,
  },
  bodyPhoneNumber: {
    position: "relative",
    top: -59,
    left: 190,
    backgroundColor: "red",
  },
  map: {
    borderColor: "black",
    borderWidth: 2,
    height: 250,
    width: 350,
    top: -150,
  },
});

export default HomeScreen;
