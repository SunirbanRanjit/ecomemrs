import React from 'react';
import { Text, View, StyleSheet,Page, Document,Image } from '@react-pdf/renderer';
import { useState } from 'react';
import { useEffect } from 'react';
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
        
    },
    image: {
        width: 500,
        height: 500,
      }
});

const Pdf = (props) => {
     const [menu,setMenu] = useState();
    useEffect(()=> {
        switch (props.plan) {
            case "Student Morning":
              setMenu(require('../assets/sm.jpg'));
              break;
            case "Student Full Day":
              setMenu(require('../assets/sf.jpg'));
              break;
              case "Student Night":
              setMenu(require('../assets/sn.jpg'));
              break;
            case "Classic Morning":
              setMenu(require('../assets/cm.jpg'));
              break;
            case "Classic Full Day":
              setMenu(require('../assets/cf.jpg'));
              break;
            case "Classic Night":
              setMenu(require('../assets/cn.jpg'));
              break;
            case "Premium Morning":
              setMenu(require('../assets/pm.jpg'));
              break;
            case "Premium Full Day":
              setMenu(require('../assets/pf.jpg'));
              break;
            case "Premium Night":
              setMenu(require('../assets/pn.jpg'));
              break;
            default:
              break;
          }
    },[]);
    
  
   
    return (
        <Document>
            
            <Page size="A4" style={styles.page} >
                <View style={styles.headerContainer}>
                    <Text style={styles.billTo}>Invoice</Text>
                    <Text>Name: {props.name}</Text>
                    <Text>Address: {props.address}</Text>
                    <Text>Phone No.: {props.phone}</Text>
                    <Text>Chosen Plan: {props.plan} </Text>
                    <Text>Price: {props.price}</Text>
                    <Text>Plan Expiry Date: {props.expiry===""?"Plan is not active! Contact Anno.":props.expiry}</Text>
                    <Image src={menu} style={styles.image}/> 
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.reportTitle}>Our Executive will reach soon to your location to collect the money. Your delivery will be started from next day.</Text>
                    
                </View>
            </Page>
        </Document>
)};
export default Pdf;