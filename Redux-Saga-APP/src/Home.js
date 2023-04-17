import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


const Home = ({ navigation, route }) => {

    const [daerahAsal, setDaerahAsal] = useState(null)
    const [daerahTujuan, setDaerahTujuan] = useState(null)
    const [tgl, setTgl] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuView}>
        <View style={styles.iconView}>
          <Icon name='menu' size={35} color='#f2f2f2'/>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile"); // Navigasi ke halaman UserPage
            }}
          >
            <Icon name='account' size={35} color='#f2f2f2'/>
          </TouchableOpacity>
        </View>
        <View style={styles.textLogoView}>
          <Text style={
            {
              fontSize: 35,
              color: '#f2f2f2',
              fontWeight: 'bold'
            }
          }>Hiling.Id</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={
            {
              paddingTop: 200,
              fontSize: 15,
              color: '#333333'
            }
          }>&copy;BAD - 120140141</Text>
      </View>
      <View style={styles.floatView}>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Lokasi Keberangkatan</Text>
            <View style={styles.input}>
                <View style={styles.icon}>
                    <Icon name='airplane-takeoff' size={35} color='#86b257'/>
                </View>
                <TextInput 
                placeholder='Kode Asal'
                value={daerahAsal}
                onChangeText={
                    (value) => {
                        setDaerahAsal(value)
                    }
                }
                />
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Lokasi Tujuan</Text>
            <View style={styles.input}>
                <View style={styles.icon}>
                    <Icon name='airplane-landing' size={35} color='#86b257'/>
                </View>
                <TextInput 
                placeholder='Kode Tujuan'
                value={daerahTujuan}
                onChangeText={
                    (value) => {
                        setDaerahTujuan(value)
                    }
                }
                />
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tanggal Keberangkatan</Text>
            <View style={styles.input}>
                <View style={styles.icon}>
                    <Icon name='calendar-range' size={35} color='#86b257'/>
                </View>
                <TextInput 
                placeholder='dd-mm-yyyy'
                value={tgl}
                onChangeText={
                    (value) => {
                        setTgl(value)
                    }
                }
                />
            </View>
        </View>
          <TouchableOpacity style={styles.btn} onPress={
            () => {
                navigation.navigate("Detail", {
                    daerahAsal,
                    daerahTujuan,
                    tgl
                })

                setDaerahAsal("")
                setDaerahTujuan("")
                setTgl("")
            }
          }>
            <Text style={{fontWeight: 'bold'}}>SEARCH</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style='dark'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center'
    },
    menuView: {
      backgroundColor: '#86b257',
      width: '100%',
      height: '65%',
      marginTop: '5%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    },
    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingTop: 15
    },
    textLogoView: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2%'
    },
    footer: {
      flex: 1,
      width: '100%',
      height: '30%',
      margin: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2'
    },  
    floatView: {
      flex: 1,
      width: '90%',
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
      position: 'absolute',
      padding: '10%' 
    },
    inputContainer: {
      width: '100%'
    },
    inputLabel: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 5
    },
    input: {
      width: '100%',
      flexDirection: 'row',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 40,
      padding: 8
    },
    icon : {
        marginRight: 10
    },
    btn: {
      backgroundColor: '#ed7d31',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 5
    }
  });

export default Home;