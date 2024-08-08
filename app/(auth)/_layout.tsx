import React from 'react';
import { Stack } from 'expo-router';

function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='log-in'
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='start-sign-up'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='complete-sign-up'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='confirm-email_log-in'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='confirm-email_sign-up'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='verify-email_log-in'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='verify-email_sign-up'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='start-phone-number-verification'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='confirm-phone-number'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='verify-phone-number'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='start-password-reset'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='verify-password-reset'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='create-password'
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='reset-password'
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}

export default AuthLayout;
