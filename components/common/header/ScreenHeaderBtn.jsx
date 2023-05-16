import { Image, TouchableOpacity, View, Text, Button, StyleSheet, Animated } from "react-native";
import { Grid, Col } from 'react-native-easy-grid';
import { MaterialIcons } from "@expo/vector-icons"
import Modal from "react-native-modal";
import { useRouter } from "expo-router";
import { useNavigationState } from '@react-navigation/native';

import { Badge } from "@rneui/base";

import styles from "./screenheader.style";
import { useState, useRef } from "react";


const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const drawerAnimation = useRef(new Animated.Value(0)).current;

  const navigationState = useNavigationState((state) => state);

  // Access the current screen
  const currentScreen = navigationState.routes[navigationState.index].name;

  console.log("CURRENT SCREEN:", currentScreen)

  // Use the current screen as needed

  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    router.push("/login")
  };

  const openDrawer = () => {
    setModalVisible(true);
    Animated.timing(drawerAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => {
        currentScreen === "home" ? setIsModalOpen(!isModalOpen) : router.push("/home")
      }}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
      {isModalOpen && (
        <View>
          <Modal
            isVisible={isModalOpen}
            onBackdropPress={() => setIsModalOpen(false)}
            onRequestClose={() => setIsModalOpen(false)}
            animationType="slide"
            transparent
            style={stylez.modalContainer}
          >
            <View style={{ backgroundColor: 'white', padding: 36, flex: 1, width: "270px" }}>
              <MaterialIcons name="close" size={30} color="#444262" onPress={() => setIsModalOpen(false)} style={{ position: "absolute", top: 0, right: 0 }} />

              <Grid style={stylez.gridContainer}>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="notifications" size={30} color="black" />
                  <Text style={stylez.gridText}>Chat</Text>
                  <Badge
                    badgeStyle={{}}
                    containerStyle={{}}
                    onPress={() => {
                      alert("onPress");
                    }}
                    status="warning"
                    textProps={{}}
                    textStyle={{ color: "#EFE" }}
                    value="2 👋"
                    options={{}}
                  />

                </Col>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="work" size={30} color="#FF7754" />
                  <Text style={stylez.gridText}>Work Plan</Text>
                </Col>
              </Grid>

              <Grid style={stylez.gridContainer}>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="payment" size={30} color="green" />
                  <Text style={stylez.gridText}>Payments</Text>
                </Col>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="directions" size={30} color="#312651" />
                  <Text style={stylez.gridText}>Route</Text>
                </Col>
              </Grid>

              <Grid style={stylez.gridContainer}>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="note" size={30} color="orange" />
                  <Text style={stylez.gridText}>Notes</Text>
                </Col>
                <Col style={stylez.gridItem}>
                  <MaterialIcons name="settings" size={30} color="purple" />
                  <Text style={stylez.gridText}>Settings</Text>
                </Col>
              </Grid>



            </View>
            <MaterialIcons name="logout" size={30} color="#F3F4F8" onPress={handleLogin} />

          </Modal>
        </View>
      )}
    </View>
  );
};

const stylez = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: '100%',
    backgroundColor: 'white',
  },

  modalContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopRightRadius: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  gridContainer: {
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  gridText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  badgeContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
});

export default ScreenHeaderBtn;
