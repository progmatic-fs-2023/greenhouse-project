import contactService from '../services/contact.services';

const contactMailSend = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const emailSent = await contactService(name, email, subject, message);
  if (emailSent) {
    res.status(200).send('Email sent successfully');
  } else {
    res.status(500).send('Error sending email');
  }
};

export default {
  contactMailSend,
};
