import newsletterServices from "../services/newsletter.services";

const newsletterMailSend = async (req, res) => {
    const userId = req.params.id;
    const { email, isSubscribed } = req.body;
    console.log(email)
    const emailSent = await newsletterServices(email, isSubscribed, userId);
    if (emailSent) {
      res.status(200).send('Email sent successfully');
    } else {
      res.status(500).send('Error sending email');
    }
  };
  
  export default {
    newsletterMailSend,
  };
  