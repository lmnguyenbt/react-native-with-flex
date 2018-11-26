/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Hello Work!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>*/

		/*<View style={styles_key.container}>
		  <View style={styles_key.row}>
		  	<View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>1</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>2</Text>
		  	<Text>ABC</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>3</Text>
		  	<Text>DEF</Text>
		  </View>
	  	</View>

	  	<View style={styles_key.row}>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>4</Text>
		  	<Text>GHI</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>5</Text>
		  	<Text>JKL</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>6</Text>
		  	<Text>MNO</Text>
		  </View>
	  	</View>

	  	<View style={styles_key.row}>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>7</Text>
		  	<Text>PQRS</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>8</Text>
		  	<Text>TUV</Text>
		  </View>
		  <View style={styles_key.column}>
		  	<Text style={styles_key.text_number}>9</Text>
		  	<Text>WXYZ</Text>
		  </View>
	  	</View>

	  	<View style={styles_key.row}>
		<View style={styles_key.column_blank}></View>
		  <View style={styles_key.column}>
			<Text style={styles_key.text_number}>0</Text>
		  </View>
		  <View style={styles_key.column_blank}></View>
	  	</View>
	  </View>*/

		<View style={styles_key2.container}>
			<View style={styles_key2.row}>
  				<View style={styles_key2.column}>
  					<View style={styles_key2.button}>
  						<Text style={styles_key2.number}>1</Text>
	  					<Text style={styles_key2.text}>q</Text>
  					</View>
  				</View>
	  			<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
					<Text style={styles_key2.number}>2</Text>
				  	<Text style={styles_key2.text}>w</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>3</Text>
				  	<Text style={styles_key2.text}>e</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>4</Text>
				  	<Text style={styles_key2.text}>r</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>5</Text>
				  	<Text style={styles_key2.text}>t</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>6</Text>
				  	<Text style={styles_key2.text}>y</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>7</Text>
				  	<Text style={styles_key2.text}>u</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>8</Text>
				  	<Text style={styles_key2.text}>i</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>9</Text>
				  	<Text style={styles_key2.text}>o</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.number}>0</Text>
				  	<Text style={styles_key2.text}>p</Text>
				  </View>
  				</View>
  			</View>
	  		<View style={styles_key2.row}>
		  		<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>a</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>s</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>d</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>f</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>g</Text>
	  			  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>h</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>j</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>k</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>l</Text>
				  </View>
  				</View>
  			</View>
	  		<View style={styles_key2.row}>
		  		<View style={styles_key2.column}></View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>z</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>x</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>c</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>v</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>b</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>n</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>m</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}></View>
  			</View>
	  		<View style={styles_key2.row}>
		  		<View style={styles_key2.column_lrGo}>
				  <View style={styles_key2.button}>
				  	<Text style={[styles_key2.text, styles_key2.text_size]}>?123</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column_adat}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>@</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column}>
				  <View style={styles_key2.button}>

				  </View>
  				</View>
			  	<View style={styles_key2.column_adat}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>.</Text>
				  </View>
  				</View>
			  	<View style={styles_key2.column_lrGo}>
				  <View style={styles_key2.button}>
				  	<Text style={styles_key2.text}>Go</Text>
				  </View>
  				</View>
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

const styles_key = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		borderColor: '#c1c1c1',
		borderBottomWidth: 1
	},
	column: {
		flex: 1,
		borderColor: '#c1c1c1',
		borderRightWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text_number: {
		fontSize: 40
	},
	column_blank: {
		flex: 1,
		borderColor: '#c1c1c1',
		borderRightWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#c1c1c1',
	}
});

const styles_key2 = StyleSheet.create({
	container: {
		flex: 1/3,
		backgroundColor: '#222222',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		/*borderBottomWidth: 1,
		borderBottomColor: '#C1C1C1'*/
	},
	column: {
		flex: 1,
		/*borderRightWidth: 1,
		borderRightColor: '#C1C1C1',
		justifyContent: 'center'*/
	},
	column_adat: {
		flex: 1/6,
		/*borderRightWidth: 1,
		borderRightColor: '#C1C1C1',
		justifyContent: 'center'*/
	},
	column_lrGo: {
		flex: 1/3,
		/*borderRightWidth: 1,
		borderRightColor: '#C1C1C1',
		justifyContent: 'center'*/
	},
	button: {
		flex: 1,
		margin: 3,
		borderRadius: 4,
		backgroundColor: '#595B59',
		justifyContent: 'center'
	},
	number: {
		fontSize: 10,
		textAlign: 'right',
		paddingRight: 3
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text_size: {
		fontSize: 17,
	}
});
