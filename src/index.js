import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'
import { isPad, statusBarHeight } from 'react-native-layout-constants'

export default class SplitView extends React.Component {
  render() {
    const { borderColor, backgroundColor } = this.props
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <View style={[styles.leftContainer, { borderColor }]}>
          {this.props.children}
        </View>
        {
          isPad &&
          this.props.SplitComponent &&
          <View style={styles.rightContainer}>
            <this.props.SplitComponent />
          </View>
        }
      </View>
    )
  }
}

SplitView.propTypes = {
  SplitComponent: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

SplitView.defaultProps = {
  borderColor: '#d3d3d3',
  backgroundColor: '#fff',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: isPad ? '45%' : '100%',
    maxWidth: isPad ? 400 : 'auto',
    borderRightWidth: isPad ? StyleSheet.hairlineWidth : 0,

  },
  rightContainer: {
    flex: 1,
    paddingTop: isPad ? statusBarHeight : 0,
  },
})
