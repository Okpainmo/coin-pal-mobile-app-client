// import {
//   SafeAreaView,
//   StatusBar,
//   View,
//   ScrollView,
//   Text,
//   StyleSheet,
//   Platform,
//   Image,
//   Pressable,
//   TextInput,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   Modal,
//   FlatList,
// } from 'react-native';
// import React, { useState } from 'react';
// import {
//   background_variant_1,
//   background_variant_2,
//   background_variant_1_light,
//   background_variant_3,
//   background_variant_4,
//   background_variant_6,
//   text_variant_1,
//   text_variant_2,
//   text_variant_3,
// } from '@/constants/colors';
// import { Link, router } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import { SvgUri } from 'react-native-svg';
// import { countriesData } from '@/constants/countries-data';
// import AuthSectionReturnButton from '@/components/auth/AuthSectionReturnButton';
// const mockAvatar1 = require('../../assets/images/img-8.jpg');
// const mockAvatar2 = require('../../assets/images/img-10.png');
// const mockAvatar3 = require('../../assets/images/img-11.png');
// const mockAvatar4 = require('../../assets/images/img-12.png');

// type countrySpecs = {
//   countryName: string;
//   code: string;
//   flagUrl: string;
// };

// interface CountriesDataModalProps {
//   showModal: boolean;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//   setSelectedCountry: React.Dispatch<React.SetStateAction<countrySpecs>>;
//   selectedCountry: countrySpecs;
// }
// function CountriesDataModal({
//   showModal,
//   setShowModal,
//   selectedCountry,
//   setSelectedCountry,
// }: CountriesDataModalProps) {
//   return (
//     <Modal
//       animationType='slide'
//       transparent={true}
//       visible={showModal}
//       style={{ height: 300 }}
//     >
//       <View
//         className='modal-content overflow-y-auto h-[80%] w-full absolute bottom-0 px-3 py-6 rounded-tl-[20px] rounded-tr-[20px]'
//         style={{ backgroundColor: background_variant_1_light }}
//       >
//         <View className='flex flex-row gap-x-8 items-center'>
//           <Pressable
//             className='w-[50px] h-[50px] rounded-full flex items-center justify-center mb-[25px]'
//             style={{ backgroundColor: background_variant_6 }}
//             onPress={() => setShowModal(false)}
//           >
//             <Ionicons name='close-outline' size={30} color={text_variant_3} />
//           </Pressable>
//           <Text
//             className='text-[18px] mb-[20px]'
//             style={{ color: text_variant_1, fontFamily: 'font_600' }}
//           >
//             Select country/country-code
//           </Text>
//         </View>
//         <View className='selections-wrapper px-2 mt-[10px] flex'>
//           <FlatList
//             data={countriesData}
//             renderItem={({ item }) => {
//               return (
//                 <Pressable
//                   onPress={() => {
//                     setSelectedCountry(item);
//                     setShowModal(false);
//                   }}
//                   className='selection-card flex flex-row items-center justify-between py-4 px-4 
//                   rounded-[7px]'
//                   style={{ backgroundColor: background_variant_1 }}
//                 >
//                   <View style={{ flex: 2 }}>
//                     <SvgUri width='50px' height='30px' uri={item.flagUrl} />
//                   </View>
//                   <Text
//                     style={{
//                       color: text_variant_1,
//                       flex: 3,
//                       fontSize: 15,
//                       fontFamily: 'font_500',
//                     }}
//                     className='country'
//                   >
//                     {item.countryName}
//                   </Text>
//                   <Text
//                     style={{
//                       color: text_variant_1,
//                       flex: 1,
//                       fontSize: 15,
//                       fontFamily: 'font_500',
//                     }}
//                     className='code'
//                   >
//                     {item.code}
//                   </Text>
//                 </Pressable>
//               );
//             }}
//             keyExtractor={(item) => item.countryName}
//             ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
//             ListEmptyComponent={() => {
//               return (
//                 <View className={`w-[80%] mx-auto mt-[50px] flex`}>
//                   <Text
//                     className='text-center w-full'
//                     style={{ color: text_variant_1 }}
//                   >
//                     Countries data is not available.
//                   </Text>
//                 </View>
//               );
//             }}
//             ListFooterComponent={() => {
//               return (
//                 <View className={`w-[80%] mx-auto mt-[50px] flex`}>
//                   <Text
//                     className='text-center w-full'
//                     style={{ color: text_variant_1 }}
//                   >
//                     End of countries data
//                   </Text>
//                 </View>
//               );
//             }}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const StartPhoneNumberVerification = () => {
//   const [isCountDownComplete, setIsCountDownComplete] = useState(false);
//   const [isVerificationSuccessfull, setIsVerificationSuccessfull] =
//     useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     countryName: 'Nigeria',
//     flagUrl: 'https://flagcdn.com/ng.svg',
//     code: '+234',
//   });

//   return (
//     <KeyboardAvoidingView
//       behavior='padding'
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
//       style={{
//         flex: 1,
//         backgroundColor: background_variant_1,
//       }}
//     >
//       <CountriesDataModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         selectedCountry={selectedCountry}
//         setSelectedCountry={setSelectedCountry}
//       />
//       <ScrollView
//         className='px-3 mt-[30px]'
//         style={{
//           backgroundColor: background_variant_1,
//           paddingTop: Platform.OS === 'android' ? 65 : 0,
//         }}
//       >
//         <AuthSectionReturnButton />
//         <Text
//           className='bold-page-text text-[30px]'
//           style={{ color: text_variant_1, fontFamily: 'font_800' }}
//         >
//           What's your phone number
//         </Text>
//         <View className='mt-[40px]'>
//           <View className='input-wrapper flex flex-1 flex-row gap-x-4 mb-[40px]'>
//             <Pressable
//               onPress={() => setShowModal(true)}
//               className='flex flex-row gap-x-2 items-center'
//               style={{
//                 paddingRight: 12,
//                 paddingHorizontal: 5,
//                 // paddingVertical: 15,
//                 backgroundColor: `${background_variant_3}`,
//                 borderRadius: 10,
//                 // textAlign: 'center',
//               }}
//             >
//               <SvgUri
//                 width='30px'
//                 height='20px'
//                 uri={selectedCountry.flagUrl}
//               />
//               <Text
//                 className='mt-[3px]'
//                 style={{
//                   color: text_variant_1,
//                   fontFamily: 'font_500',
//                   fontSize: 12,
//                 }}
//               >
//                 {selectedCountry.code}
//               </Text>
//               <Ionicons
//                 name='chevron-down-outline'
//                 size={15}
//                 color={text_variant_3}
//               />
//             </Pressable>
//             <View className='flex flex-1'>
//               <TextInput
//                 className='flex'
//                 placeholder='Enter your phone number'
//                 style={{
//                   width: '100%',
//                   paddingHorizontal: 15,
//                   paddingVertical: 15,
//                   backgroundColor: `${background_variant_3}`,
//                   borderRadius: 10,
//                   color: `${text_variant_1}`,
//                   fontSize: 14,
//                   fontFamily: 'font_400',
//                   // textAlign: 'center',
//                 }}
//                 placeholderTextColor={text_variant_1} // Set the placeholder color here
//                 // value={loginForm.email}
//                 onChangeText={(text) => {
//                   // console.log('email input in progress...');
//                   // setLoginForm({
//                   //   ...loginForm,
//                   //   email: text,
//                   // });
//                 }}
//               />
//             </View>
//           </View>
//           <View className='resend-count-down flex items-center'>
//             <Text
//               className={`${isCountDownComplete ? 'flex' : 'hidden'}`}
//               style={{ color: text_variant_3, fontFamily: 'font_500' }}
//             >
//               Resend code
//             </Text>
//             <View
//               className={`${
//                 isCountDownComplete
//                   ? 'hidden'
//                   : 'flex flex-row justify-center items-center gap-x-2'
//               }`}
//             >
//               <Text style={{ color: text_variant_3, fontFamily: 'font_500' }}>
//                 Resend code in:
//               </Text>
//               <Text style={{ color: text_variant_3, fontFamily: 'font_500' }}>
//                 00 : 60
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View className='button-wrapper mt-[30px]'>
//           <TouchableOpacity
//             style={{
//               backgroundColor: background_variant_2,
//               paddingVertical: 15,
//               display: 'flex',
//               alignItems: 'center',
//               borderRadius: 10,
//               width: '100%',
//               cursor: 'pointer',
//             }}
//             onPress={() => router.push('/confirm-phone-number')}
//           >
//             <Text
//               style={{
//                 fontFamily: 'font_700',
//                 textAlign: 'center',
//                 fontSize: 14,
//               }}
//             >
//               Verify and continue
//             </Text>
//           </TouchableOpacity>
//         </View>
//         {/* <View
//           className='sign-up-instead-wrapper flex flex-wrap gap-x-2 flex-row 
//         items-center justify-center mt-[20px]'
//         >
//           <Text
//             style={{
//               color: `${text_variant_1}`,
//               textAlign: 'center',
//               fontFamily: 'font_500',
//             }}
//           >
//             Don't have an account yet?
//           </Text>
//           <Link
//             href='/start-sign-up'
//             style={{
//               color: `${text_variant_3}`,
//               fontFamily: 'font_500',
//             }}
//           >
//             Sign-Up
//           </Link>
//         </View> */}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default StartPhoneNumberVerification;

// const styles = StyleSheet.create({});
