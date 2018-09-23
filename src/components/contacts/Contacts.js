import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getContacts} from '../../actions/contact-actions'

class Contacts extends Component {
  componentDidMount(){   //getContacts getting called here
    this.props.getContacts
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  //contact here is defined in our root reducer
  //contacts ater is the array
  contacts: state.contact.contacts
})
//call getContacts in the Contacts component

export default connect(mapStateToProps, {getContacts})(Contacts);
