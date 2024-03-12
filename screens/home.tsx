import { StatusBar } from 'expo-status-bar' 
import { View, Text} from 'react-native'

function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Home