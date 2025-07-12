import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {Fragment} from "react";
import cn from 'clsx';

import CartButton from "@/components/CartButton";
import {images, offers} from "@/constants";
import useAuthStore from "@/store/auth.store";
import * as Sentry from '@sentry/react-native';



export default function Index() {
  const { user } = useAuthStore();

  return (
      <SafeAreaView className="flex-1 bg-white">
          {/* <FlatList
              data={offers}
              renderItem={({ item, index }) => {
                  const isEven = index % 2 === 0;

                  return (
                      <View>
                          <Pressable
                              className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                              style={{ backgroundColor: item.color }}
                              android_ripple={{ color: "#fffff22"}}
                          >
                              {({ pressed }) => (
                                  <Fragment>
                                      <View className={"h-full w-1/2"}>
                                        <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                                      </View>

                                      <View className={cn("offer-card__info", isEven ? 'pl-10': 'pr-10')}>
                                          <Text className="h1-bold text-white leading-tight">
                                              {item.title}
                                          </Text>
                                          <Image
                                            source={images.arrowRight}
                                            className="size-10"
                                            resizeMode="contain"
                                            tintColor="#ffffff"
                                          />
                                      </View>
                                  </Fragment>
                              )}
                          </Pressable>
                      </View>
                  )
              }}
              contentContainerClassName="pb-28 px-5"
              ListHeaderComponent={() => (
                  <View className="flex-between flex-row w-full my-5">
                      <View className="flex-start">
                          <Text className="small-bold text-primary">DELIVER TO</Text>
                          <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                              <Text className="paragraph-bold text-dark-100">Croatia</Text>
                              <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
                          </TouchableOpacity>
                      </View>

                      <CartButton />
                  </View>
              )}
          /> */}
          <FlatList
  data={offers}
  renderItem={({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
      <View>
        <TouchableOpacity
  onPress={() => {
    Sentry.captureException(new Error("🚨 This is a test error from Rehad"));
    alert("Test error sent to Sentry!");
  }}
  className="bg-red-500 p-3 rounded-xl mx-5 my-3"
>
  <Text className="text-white text-center font-bold">Send Test Error to Sentry</Text>
</TouchableOpacity>

        <Pressable
          className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
          style={{ backgroundColor: item.color }}
          android_ripple={{ color: "#fffff22"}}
        >
          {({ pressed }) => (
            <Fragment>
              <View className={"h-full w-1/2"}>
                <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
              </View>
              <View className={cn("offer-card__info", isEven ? 'pl-10': 'pr-10')}>
                <Text className="h1-bold text-white leading-tight">
                  {item.title}
                </Text>
                <Image
                  source={images.arrowRight}
                  className="size-10"
                  resizeMode="contain"
                  tintColor="#ffffff"
                />
              </View>
            </Fragment>
          )}
        </Pressable>
      </View>
    );
  }}
  contentContainerClassName="pb-28 px-5"
  ListHeaderComponent={() => (
    <View className="flex-between flex-row w-full my-5">
      <View className="flex-start">
        <Text className="small-bold text-primary">DELIVER TO</Text>
        <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
          <Text className="paragraph-bold text-dark-100">Croatia</Text>
          <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <CartButton />
    </View>
  )}
  ListFooterComponent={() => (
    <TouchableOpacity
      onPress={() => {
        Sentry.captureException(new Error('Test error from Rehad Mart Index page'));
        alert('Test error sent to Sentry!');
      }}
      className="bg-red-500 px-5 py-3 rounded-lg mt-5"
    >
      <Text className="text-white text-center font-bold">Send Test Error to Sentry</Text>
    </TouchableOpacity>
  )}
/>

      </SafeAreaView>
  );
}
