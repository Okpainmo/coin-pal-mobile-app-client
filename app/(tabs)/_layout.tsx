import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { default_light_backgrounds } from '@/constants/colors';
import { default_light_texts } from '@/constants/colors';
import { TabBarIcons } from '@/constants/icons';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const [backgrounds, setBackgrounds] = useState(default_light_backgrounds);
  const [texts, setTexts] = useState(default_light_texts);
  const {
    background_variant_1,
    background_variant_2,
    background_variant_3,
    background_variant_4,
  } = backgrounds;
  const { text_variant_1, text_variant_2, text_variant_3, text_variant_4 } =
    texts;
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: `${background_variant_2}`,
        tabBarInactiveTintColor: `${text_variant_3}`,
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          paddingTop: 5,
          paddingBottom: 3,
          fontFamily: 'font_500',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: `${background_variant_1}`,
          // borderTopWidth: 1,
          // borderTopColor: '#232533',
          minHeight: 60,
          // paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Market',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'podium' : 'podium-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'search-outline' : 'search-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'You',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon
          //     name={focused ? 'code-slash' : 'code-slash-outline'}
          //     color={color}
          //   />
          // ),
        }}
      />
    </Tabs>
  );
}
