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
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #2d7ff9;">Welcome to GainsHub!</h2>
                <p>Thanks for signing up. Please verify your email address to activate your account:</p>
                <p>
                <a href="${link}" style="
                    display: inline-block;
                    background-color: #2d7ff9;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: bold;
                ">
                    Verify Email
                </a>
                </p>
                <p>If the button doesn't work, copy and paste this link into your browser:</p>
                <p style="word-break: break-all;">
                <a href="${link}" style="color: #2d7ff9;">${link}</a>
                </p>
                <p>Thanks,<br/>The GainsHub Team</p>
            </div>
            `,
        });
        console.log("Email Sent");
    
    } catch (error) {
        console.log("Error while sending the email", error);
        
    }
};

export const sendResetPasswordEmail = async(to, token) => {
    const link = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

    try {
        await transporter.sendMail({
        from: `"GainsHub" <${process.env.SMTP_SENDER}>`,
        to,
        subject: "Password Reset Request",
        html: `<a href="${link}">Click here to reset your password</a>`,
        });
        console.log("Email Sent");
    
    } catch (error) {
        console.log("Error while sending the email", error);
        
    }
}