import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Colors } from './src/constants/Styles';
import AddFavoriteScreen from './src/screens/AddFavoriteScreen';
import FavoriteDetailScreen from './src/screens/FavoriteDetailScreen';
import MapScreen from './src/screens/MapScreen';
import { FavoritesContextProvider } from './src/store/favoritesContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesContextProvider>
      <Navigation />
    </FavoritesContextProvider>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary100 },
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            headerTitle: 'Your Favorite locations',
          }}
        />
        <Stack.Screen
          name="AddFavoriteScreen"
          component={AddFavoriteScreen}
          options={{
            headerTitle: 'Add a new place',
          }}
        />
        <Stack.Screen name="FavoriteDetailScreen" component={FavoriteDetailScreen} />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTitle: 'Map',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
