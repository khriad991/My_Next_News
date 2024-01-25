
import nodemailer from "nodemailer";
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