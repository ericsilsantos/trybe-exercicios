import React from "react";
import { connect } from 'react-redux';

class ClientesCadastrados extends React.Component {
  render() {
    const { store } = this.props
    console.log(store);
    return(
      <div>
        <p>sssss</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state
})

export default connect(mapStateToProps)(ClientesCadastrados);
