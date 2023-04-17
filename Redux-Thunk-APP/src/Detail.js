import { SafeAreaView ,View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import React from 'react'

import { bandara, maskapai, jadwal } from '../datas/Datas'; 

const Detail = ({ navigation, route }) => {
    const {daerahAsal, daerahTujuan, tgl} = route.params
    const filteredJadwal = jadwal.filter((item) => {
        return (
            item.bandara_id_keberangkatan === daerahAsal &&
            item.bandara_id_tujuan === daerahTujuan
        )
    })

    const getBandaraNama = (bandara_id) => {
        const bandaraFilter = bandara.filter((item) => {
            return (
                item.bandara_id === bandara_id
            )
        })
        return bandaraFilter[0].bandara_nama
    }

    const getMaskapaiNama = (maskapai_id) => {
        const maskapaiFilter = maskapai.filter((item) => {
            return (
                item.maskapai_id === maskapai_id
            )
        })

        return maskapaiFilter[0].maskapai_nama
    }

    const getMaskapaiLogo = (maskapai_id) => {
        const maskapaiFilter = maskapai.filter((item) => {
            return (
                item.maskapai_id === maskapai_id
            )
        })

        return maskapaiFilter[0].maskapai_logo
    }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.iconStyle}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Icon name='keyboard-backspace' size={35} color='#f2f2f2'/>
                </TouchableOpacity>
                <Text style={{
                  color: '#f2f2f2', 
                  fontSize: 35, 
                  fontWeight: 'bold'
                    }}>Hiling.Id</Text>  
                  <TouchableOpacity onPress={() => {
                      navigation.navigate("Profile");
                  }}>
                      <Icon name='account' size={35} color='#f2f2f2'/>
                  </TouchableOpacity>
                
            </View>
            <View style={styles.textLogoView}>
                <Text style={{color: '#f2f2f2', fontSize: 15}}>Hasil Pencarian Penerbangan</Text>
            </View>
        </View>
        <View style={{width: "100%", flex: 1, paddingHorizontal: 10}}>
            {filteredJadwal.length === 0 ? (
                <Text style={{fontSize: 20, fontWeight: 'bold',textAlign: "center", marginTop: '15%'}}>
                    Jadwal tidak ditemukan!
                </Text>) : (                
                <FlatList
                data={filteredJadwal}
                keyExtractor={item => item.jadwal_id}
                renderItem={({item}) => {
                    return (
                    <View style={styles.resultContainers} key={item.jadwal_id}>
                        <View style={styles.itemTitle}>
                            <Text style={[styles.itemTitleText, {flex:2 , textAlign: "left"}]}>{getBandaraNama(item.bandara_id_keberangkatan)}</Text>
                            <Icon name='arrow-right-bold' size={18} color='#000'/>
                            <Text style={[styles.itemTitleText, {flex:2 , textAlign: "right"}]}>{getBandaraNama(item.bandara_id_tujuan)}</Text>
                        </View>
                        <View style={styles.itemBody}>
                            <View style={styles.maskapaiDesc}>
                                <Image 
                                source={getMaskapaiLogo(item.maskapai_id)}
                                style={styles.img}
                                />
                                <Text style={styles.maskapaiText}>
                                    {getMaskapaiNama(item.maskapai_id)}
                                </Text>
                            </View>
                            <View style={styles.tglContainer}>
                                <Text style={styles.tgl}>
                                    {tgl === null ? "25-10-2022" : tgl}
                                </Text>
                            </View>
                        </View>
                    </View>
                    )
                }}
                />
            )}
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    header: {
        backgroundColor: '#86b257',
        height: '25%',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: '5%',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textLogoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    resultContainers: {
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        padding: 20
    }, 

    itemTitle : {
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemTitleText: {
        fontSize: 18,
        fontWeight: '900'
    },
    itemBody : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    maskapaiDesc: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    maskapaiText: {
        marginLeft: 10,
        fontSize: 18
    },
    tglContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    tgl: {
        fontSize: 20,
        fontWeight: '900',
        color: "blue"
    },
    img: {
        width: 50,
        height: 50,
        resizeMode: 'stretch'
    }
})

export default Detail;