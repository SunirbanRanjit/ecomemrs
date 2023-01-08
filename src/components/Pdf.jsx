import React from 'react';
import { Text, View, StyleSheet,Page, Document } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    headerContainer: {
        marginTop: 36,
        textalign: 'center',
        width: '100%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    titleContainer: {
        marginTop: 12
    },
    reportTitle: {
        fontSize: 12,
        textAlign: 'center',
        
    }
});

const Pdf = () => {
    const PlanName = ['Student', 'standard', 'classic'];
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <View style={styles.headerContainer}>
                    <Text style={styles.billTo}>Invoice</Text>
                    <Text>Name: {window.name}</Text>
                    <Text>Address: {window.address}</Text>
                    <Text>Phone No.: {window.phone}</Text>
                    <Text>Chosen Plan: {PlanName[window.plan]} </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.reportTitle}>Our Executive will reach soon to your location to collect the money. Your delivery will be started from next day.</Text>
                    
                </View>
            </Page>
        </Document>
)};
export default Pdf;