import { ContactForm } from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Section title="Phone book">
				<ToastContainer />
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};