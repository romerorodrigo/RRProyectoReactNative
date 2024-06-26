#Proyecto final del curso de ReactNative
## Consideraciones Generales

###### Este proyecto se trata de la App de tienda de virtual de artículos musicales para Android & IOs, donde el usuario puede visualizar los artículos distribuídos en sus correspondientes categorías. 
###### Puede además ver un detalle del artículo, navegar entre las distintas fotos del artículo, visualizar una descripción, su precio y puede agregarlo a un carrito de compras para posteriormente realizar la compra de esos artículos. Además permite crearse usuarios para poder tener un detalle histórico de compras así como también una foto de perfil.

## Funcionalidades
###### - La App incluye 4 secciones que nos permiten, visualizar la tienda, donde se presentan los artículos en sus correspondientes categorías, una sección de Carro de compras para la cual se exige estar autenticado y donde se podrán visualizar todos los productos que se fueron agregando para la compra. Una sección de Ordenes de compra para la cual también se exige estar autenticado y donde podrán verse todas las compras realizadas en la tienda por ese usuario. Por último un área de perfil de usuario, donde también es necesario estar autenticado y donde se podrá cargar una foto de perfil o cerrar la sesión actual.

##### - **Detalle de secciones**

###### - **Catálogo de productos**: Explora una amplia gama de instrumentos musicales, equipos de sonido y accesorios distribuídos por categorías de productos (Guitarras, Amplificadores, Pedales, Bajos, Baterías y Otros accesorios).Cada una de estas categorías nos permiten visualizar una lista de productos con un breve detalle del mismo.
###### - **Detalles del producto**: Al seleccionar un producto en particular se ofrece información detallada del mismo, como ser: Fotos del artículo, descripción, especificaciones técnicas y precio. Dentro del detalle del arículo tenemos la opción de volver hacia atras o de agregarlo al carrito de compras. Tanto para ver las categorías como par explorar los detalles de los productos no es necesario estar registrado.
###### - **Autenticación**: Las secciones de **Carrito**, **Ordenes de compra** y **Perfil de usuario** requieren acceso autenticado, para lo cual la App nos va a solicitar que iniciemos sesión o creemos un nuevo usuario. Para crear un usuario o para logearse se solicita correo electrónico y contraseña.
###### - **Carrito de compras**: Una vez autenticado el usuario se podrá tener acceso al carro de compras el cual nos presenta una lista de todos los artículos que se fueron agregando con un total por artículo y un total general. Cada artículo contiene la cantidad de productos agregados pudiendo eliminar de a 1 producto en caso de haber cometido un error. Una vez validada la información se puede proceder a la compra, la cual genera una orden de compra que puede ser visualizada en la siguiente sección.
###### - **Ordenes de compra**: Una vez autenticado el usuario se podrá tener acceso al listado histórico de de compras realizadas por el usuario, están ordenados cronológicamente y para cada una puede visualizarse un detalle que indica: La fecha de compra, el total de la factura y la lista de productos que fueron comprados con su correspondiente descripción y precio.
###### - **Perfil de usuario**: Una vez autenticado el usuario se podrá tener acceso a la sección de perfil de usuario la cual nos permite cargar una imagen de perfil así como también cerrar la sesión en curso.

## Dependencias y versiones involucradas

    "@expo/metro-runtime": "~3.1.3",
    "@react-navigation/bottom-tabs": "^6.5.20",
    "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.9.26",
    "@reduxjs/toolkit": "^2.2.4",
    "deprecated-react-native-prop-types": "^5.0.0",
    "expo": "~50.0.19",
    "expo-file-system": "~16.0.9",
    "expo-font": "~11.10.3",
    "expo-image-picker": "~14.7.1",
    "expo-media-library": "~15.9.2",
    "expo-sqlite": "~13.4.0",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.73.6",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0",
    "react-native-swiper": "^1.6.0",
    "react-native-web": "~0.19.6",
    "react-redux": "^9.1.2",
    "yup": "^1.4.0"

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto en tu terminal.
3. Ejecuta npm install para instalar las dependencias necesarias.
4. Ejecuta npx expo start para iniciar la aplicación.
5. Abre tu emulador y conecta con Expo Go.

## Autores
**Rodrigo Romero**
rodrigo.romero.uy@gmail.com
https://uy.linkedin.com/in/rodrigo-romero-73856b28