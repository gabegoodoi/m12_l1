import { useContext } from 'react';
import ContactContext from './context/ContactContext';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';
import './AppStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container } from 'react-bootstrap';


function App() {
  const { contacts, selectedContact, setSelectedContact } = useContext(ContactContext);

  return (
    <Container>
      
      <h1>Selected Contact</h1>
      {selectedContact ? (
        <ListGroup>
          <ListGroup.Item>{selectedContact.name} - {selectedContact.email} - {selectedContact.phone}</ListGroup.Item>
        </ListGroup>
      ) : (
        <ListGroup>
          <ListGroup.Item>No contact selected</ListGroup.Item>
        </ListGroup>
      )}

      <h1>Contact List</h1>
      <ListGroup>
        {contacts.map(contact=> ( 
          <ListGroup.Item key={contact.id}  onClick={() => setSelectedContact(contact)} className="list-group-item-action">
            {contact.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ProductList/>

      <NewProductForm/>


    </Container>
  );
}

export default App;