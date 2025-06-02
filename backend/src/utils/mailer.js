import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:587,
    secure:false,
    auth:{
        user: process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD
    }
})

export const sendVerificationEmail = async(to, token) => {
    const link = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

    try {
        await transporter.sendMail({
        from: `"GainsHub" <${process.env.SMTP_SENDER}>`,
        to,
        subject: "Verify your GainsHub account",
        html: `<p>Click the link to verify your email: <a href="${link}">${link}</a></p>`,
        });
        console.log("Email Sent");
    
    } catch (error) {
        console.log("Error while sending the email", error);
        
    }
};