import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Login } from "../components/login/login";
import styles from "../components/login/login.style";
import { ScreenHeaderBtn } from "../components";
import { useState } from "react";

function LoginPage() {
  const [searchTerm, setSearchTerm] = useState();
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    router.push("/home")
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerBackVisible: false
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <View style={styles.container}>
            <Text style={styles.userName}>Hi there,</Text>
            <Text style={styles.welcomeMessage}>Please log into DRS</Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                // Handle password input value
              />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchBtn} onPress={handleLogin}>
              <Text style={styles.searchBtnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginPage;
