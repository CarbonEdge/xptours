import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Script from 'react-load-script';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { incrementCounter, decrementCounter } from './testActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  state = {
    address: "",
    scriptsLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptsLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const { incrementCounter, decrementCounter, data } = this.props;

    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyApysbQUImYQoqe7Q9fQuZMLlpo3eHYAjY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>test area</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
        <div>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptsLoaded && <PlacesAutocomplete inputProps={inputProps} /> }
          <button type="submit">Submit</button>
        </form>
        </div>

      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
