import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import res from "../../../utils/data"
import buildingsdata from "../../../state/buildingsdata"

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Spots</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          buildingsdata.features?.filter((item) => item.properties.ward === "Ward:highridge").map((job,index) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${index}`}
              handleNavigate={() => router.push(`/job-details/${index}`)}
            />
          ))
        }
      </View>
    </View>
  );
};

export default Nearbyjobs;
