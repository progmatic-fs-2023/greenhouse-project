import newsletterServices from "../services/newsletter.services";

const newsletterMailSend = async (req, res) => {
    const { email, text } = req.body;
  
    const emailSent = await newsletterServices(email, text);
    if (emailSent) {
      res.status(200).send('Email sent successfully');
    } else {
      res.status(500).send('Error sending email');
    }
  };
  
  export default {
    newsletterMailSend,
  };
  