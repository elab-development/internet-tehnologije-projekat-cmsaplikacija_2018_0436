import Website from "../models/website";

const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);
export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Prepare email data
    const emailData = {
      Messages: [
        {
          From: {
            Email: process.env.EMAIL_FROM,
            Name: "Your Website Name", // Adjust as needed
          },
          To: [
            {
              Email: process.env.EMAIL_FROM, // Receiver email
              Name: "Your Name", // Adjust as needed
            },
          ],
          Subject: "Email received from contact form",
          HTMLPart: `
            <h3>Contact form message</h3>
            <p><u>Name</u></p>
            <p>${name}</p>
            <p><u>Email</u></p>
            <p>${email}</p>
            <p><u>Message</u></p>
            <p>${message}</p>
          `,
        },
      ],
    };

    // Send email using Mailjet
    try {
      const result = await mailjet
        .post("send", { version: "v3.1" })
        .request(emailData);

      // Log the result to see the full response from Mailjet
      console.log("Mailjet response: ", result);

      if (
        result &&
        result.body &&
        result.body.Messages &&
        result.body.Messages[0].Status === "success"
      ) {
        res.json({ ok: true });
      } else {
        res.json({ ok: false, error: "Failed to send email" });
      }
    } catch (error) {
      console.log(
        "Mailjet error: ",
        error.response ? error.response.body : error
      );
      res.json({ ok: false, error: "Mailjet API error" });
    }
  } catch (err) {
    console.log("Error: ", err);
    res.json({ ok: false, error: "Server error" });
  }
};

// homepage, getHomepage
export const createPage = async (req, res) => {
  try {
    const { page } = req.body;
    const found = await Website.findOne({ page });

    if (found) {
      // update
      const updated = await Website.findOneAndUpdate({ page }, req.body, {
        new: true,
      });
      return res.json(updated);
    } else {
      // create
      const created = await new Website(req.body).save();
      return res.json(created);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPage = async (req, res) => {
  try {
    const { page } = req.params;
    const found = await Website.findOne({ page }).populate("fullWidthImage");
    return res.json(found);
  } catch (err) {
    console.log(err);
  }
};
