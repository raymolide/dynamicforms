
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { FormService } from '../services/formService';
import { formsMock } from './mock';
import { Button } from '../components/button';

export default function App() {
    const [forms, setForms] = useState<Form[]>(formsMock)
    const formService = new FormService('url')

    useEffect(() => {
        (async () => {
            var data = await formService.getById('')
            if (data) {
                setForms(forms)
            }
        })()
    }, []);


    const renderFormFields = () => {
        return forms.map((field) => {
            switch (field.type) {
                case 'text':
                    return (
                        <View className='w-full '>
                            <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</Text>
                            <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </View>
                    );

                case 'longText':
                    return (
                        <View className='w-full '>
                            <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</Text>
                            <TextInput multiline numberOfLines={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </View>
                    );

                case 'radio':
                    return (
                        <View className='w-full ' >
                            <Text>{field.label}</Text>
                            <RadioButton.Group onValueChange={() => { }} value={field.name}>
                                <View>
                                    <RadioButton.Item label={field.label} value="masculino" />
                                </View>
                            </RadioButton.Group>
                        </View>
                    );

                    case 'submit':
                        return (
                            <View className='w-full ' >
                                 <Button text="Submit" className='bg-blue-300' onPress={()=>{}} />
                            </View>
                        );
                default:
                    return null;
            }
        });
    };
    return (
        <ImageBackground style={style.container} source={require('../assets/bg.png')}   >
            <View className='flex w-full h-full items-center justify-start'>
                <StatusBar />
                <Text className='text-xl font-bold shadow' >Inquérito de saúde</Text>
                <View className='flex p-5 w-full h-full items-center justify-center'>
                    {renderFormFields()}
                </View>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    container: {
        height: null,
        width: null,
        flex: 1,


    }
})