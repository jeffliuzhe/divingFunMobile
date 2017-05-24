/**
 * Created by zheliu on 5/23/17.
 */
import React from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, TextInput, Dimensions, Image, ListView, Modal, TouchableWithoutFeedback, Keyboard, NativeModules, AlertIOS, Clipboard, ToastAndroid, Platform, CameraRoll} from 'react-native';
import SortableListView from 'react-native-sortable-listview';

let data = {
  hello: {text: 'world'},
  how: {text: 'are you'},
  test: {text: 123},
  this: {text: 'is'},
  a: {text: 'a'},
  real: {text: 'real'},
  drag: {text: 'drag and drop'},
  bb: {text: 'bb'},
  cc: {text: 'cc'},
  dd: {text: 'dd'},
  ee: {text: 'ee'},
  ff: {text: 'ff'},
  gg: {text: 'gg'},
  hh: {text: 'hh'},
  ii: {text: 'ii'},
  jj: {text: 'jj'},
  kk: {text: 'kk'}
}

let order = Object.keys(data); //Array of keys

let RowComponent = React.createClass({
  render: function() {
    return <TouchableHighlight underlayColor={'#eee'} style={{padding: 25, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
      <Text style={{ height: 20}}>{this.props.data.text}</Text>
    </TouchableHighlight>
  }
})

let SortingView = React.createClass({
  render: function() {
    return <SortableListView
      style={{flex: 1}}
      data={data}
      order={order}
      onRowMoved={e => {
        order.splice(e.to, 0, order.splice(e.from, 1)[0]);
        this.forceUpdate();
      }}
      renderRow={row => <RowComponent data={row} />}
    />
  }
});

module.exports = SortingView;