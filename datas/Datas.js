import logoMaskapai from "./logos"
export const bandara = [
    {
        bandara_id: 'CGK',
        bandara_nama: 'Soekarno Hatta'
    },
    {
        bandara_id: 'TKG',
        bandara_nama: 'Raden Inten II'
    },
    {
        bandara_id: 'SRG',
        bandara_nama: 'Jenderal Ahmad Yani'
    },
    {
        bandara_id: 'SUB',
        bandara_nama: 'Juanda'
    },
    {
        bandara_id: 'YOG',
        bandara_nama: 'Adi Sucipto'
    }
]

export const maskapai = [
    {
        maskapai_id: 'QG/CTV',
        maskapai_nama: 'Citilink',
        maskapai_logo: logoMaskapai.citilink
    },
    {
        maskapai_id: 'JT/LNI',
        maskapai_nama: 'Lion Air',
        maskapai_logo: logoMaskapai.lion,
    },
    {
        maskapai_id: 'SJ/SJY',
        maskapai_nama: 'Sriwijaya Air',
        maskapai_logo: logoMaskapai.sriwijaya
    },
    {
        maskapai_id: 'ID/BTK',
        maskapai_nama: 'Batik Air',
        maskapai_logo: logoMaskapai.batik
    },
    {
        maskapai_id: 'QZ/AWQ',
        maskapai_nama: 'Air Asia',
        maskapai_logo: logoMaskapai.airasia
    }
]

export const jadwal = [
    {
        jadwal_id: 11,
        bandara_id_keberangkatan: 'CGK',
        bandara_id_tujuan: 'TKG',
        maskapai_id: 'ID/BTK'
    },
    {
        jadwal_id: 12,
        bandara_id_keberangkatan: 'TKG',
        bandara_id_tujuan: 'CGK',
        maskapai_id: 'JT/LNI'
    },
    {
        jadwal_id: 13,
        bandara_id_keberangkatan: 'SUB',
        bandara_id_tujuan: 'YOG',
        maskapai_id: 'QG/CTV'
    },
    {
        jadwal_id: 14,
        bandara_id_keberangkatan: 'SRG',
        bandara_id_tujuan: 'CGK',
        maskapai_id: 'QZ/AWQ'
    },
    {
        jadwal_id: 15,
        bandara_id_keberangkatan: 'YOG',
        bandara_id_tujuan: 'SUB',
        maskapai_id: 'SJ/SJY'
    }
]
