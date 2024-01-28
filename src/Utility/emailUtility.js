
import nodemailer from "nodemailer";

/*

export const SendEmail =async (to ,text,subject) => {
    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true,// change for ChatGPT
        auth: {
            user: "khriadcox99@gmail.com",
            pass: "h@s@n313393",
        },
        // tls:{rejectUnauthorized:false} // ChatGPT say not Recommender
    })
    let mailOption ={
        from :" myNextNews.com <khriadcox99@gmail.com>",
        to:to,
        subject:subject,
        text:text
    }
    return await transport.sendMail(mailOption)
}
*/

export async function SendEmail(emailTo, emailText, emailSubject) {
    let transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false, // secure :false
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOption = {
        from: "Next js News portal <info@teamrabbil.com>",
        to: emailTo,
        subject: emailSubject,
        text: emailText,
    };
    return await transporter.sendMail(mailOption);
}

