import React from 'react';
import { View,Linking,ImageBackground } from 'react-native';
import Header from '../components/Header';
import List from '../components/List';
import { CHANNELS, APP_INFO } from '../api';
import {
    AdMobInterstitial,
  } from 'react-native-admob';
  
class Home extends React.Component {
    state = {
        data: null,
        error: null,
        appInfo: {
            appId: "MISInfo",
            appName: "MIS Info",
            version: "1.0.0"
        },
        appLoaded: false,
        adsLoaded:false
    }
    loadAppinfo = () => {
        fetch(APP_INFO)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    appInfo: response.data.find((rec) => rec.appId == "MISInfo"),
                    appLoaded: true
                });
            })
            .catch((error) => {
                this.setState({
                    error: error,
                    appLoaded: true
                });
            });
    }
    loadData = () => {
        fetch(CHANNELS)
            .then((response) => response.json())
            .then((response) => {
                //alert(JSON.stringify(response));
                this.setState({
                    data: response.data
                });
            })
            .catch((error) => {
                //alert("Server Down!! Please contact admin.");
                this.setState({
                    error: error
                });
            });
    }

    componentDidMount() {
        this.loadAppinfo();
        this.loadData();
        AdMobInterstitial.setAdUnitID('ca-app-pub-6002078647584025/7840626145');
        //AdMobInterstitial.setTestDevices([AdMobInterstitial.testDevices]);
        AdMobInterstitial.requestAd().then(() => {
            this.setState({
            adsLoaded:true
          });
          setTimeout(this.displayAd,15000);
        }).catch((error)=>{
            console.log("error:"+JSON.stringify(error));
        });
    }

    displayAd = ()=>{
        if(this.state.adsLoaded){
            AdMobInterstitial.showAd();
        }
    }

    listItemClickHandler = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Please install browser on this mobile to open URL: " + this.props.url);
            }
        });
    };
    render() {
        return (
            this.state.appLoaded ?
                    <View style={
                        {
                            height:"90%",
                            top:"8%"
                        }
                    }>

                        <Header title={this.state.appInfo.appName} />
                        {
                            this.state.data ? <List data={this.state.data} onListItemClick={this.listItemClickHandler} /> : null
                        }
                        {
                            /*                
                        <List data={data.data} onListItemClick={this.listItemClickHandler}/>
                        */
                        }

                    </View> : null
        );
    }
}

export default Home;