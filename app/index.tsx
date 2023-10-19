import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension="60%" iconUrl={icons.menu} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn dimension="100%" iconUrl={images.profile} />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <NearbyJobCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
