import React, { createContext, useState } from "react";

// create ContactContext
const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    // initialize with dummy data for contacts
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Humphrey Bogart', email: "bogey@gmail.com", phone: "714-392-6669"},
        { id: 2, name: 'Ingrid Bergman', email: "ingrid@yahoo.com", phone: "213-245-6645"},
        { id: 3, name: 'Paul Henreid', email: "paul@aol.com", phone: "323-909-0044"}
    ]);

    // stae for selected contact
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactContext.Provider value ={{ contacts, setContacts, selectedContact, setSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContext;