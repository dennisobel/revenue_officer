import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import details from "../../utils/details";
import Map from "../../components/map/map";
import buildingsdata from "../../utils/buildingsdata";

const tabs = ["About", "Transactions", "Visits"];

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => {
    setDetails(buildingsdata.features[params.id].properties);
  }, [params]);

  useEffect(() => {
    console.log(details);
  }, [details]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Transactions":
        return (
          <Specifics
            title="Transactions"
            points={
              [
                "11/5/2021 - 10:59AM - Kes 200.00",
                "12/8/2021 - 2:15PM - Kes 450.00",
                "3/2/2021 - 9:30AM - Kes 700.00",
                "7/11/2021 - 11:45AM - Kes 550.00",
                "4/9/2021 - 3:20PM - Kes 250.00",
                "9/7/2021 - 10:05AM - Kes 800.00",
                "6/1/2021 - 1:40PM - Kes 350.00",
                "2/12/2021 - 12:15PM - Kes 600.00",
                "10/3/2021 - 4:55PM - Kes 150.00",
                "8/4/2021 - 9:10AM - Kes 900.00",
                "5/10/2021 - 2:30PM - Kes 400.00",
                "1/6/2021 - 11:20AM - Kes 350.00",
              ] ?? ["N/A"]
            }
          />
        );

      case "About":
        return <JobAbout info={details?.description ?? "No data provided"} />;

      case "Visits":
        return (
          <Specifics
            title="Visits"
            points={
              [
                "11/5/2021 - 10:59AM",
                "12/8/2021 - 2:15PM",
                "3/2/2021 - 9:30AM",
                "7/11/2021 - 11:45AM",
                "4/9/2021 - 3:20PM",
                "9/7/2021 - 10:05AM",
                "6/1/2021 - 1:40PM",
                "2/12/2021 - 12:15PM",
                "10/3/2021 - 4:55PM",
                "8/4/2021 - 9:10AM",
                "5/10/2021 - 2:30PM",
                "1/6/2021 - 11:20AM",
              ] ?? ["N/A"]
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ padding: SIZES.xxLarge, paddingBottom: 50 }}>
            <Map details={details}/>
          </View>
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        </ScrollView>

        <JobFooter url={"https://careers.google.com/jobs/results/"} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
