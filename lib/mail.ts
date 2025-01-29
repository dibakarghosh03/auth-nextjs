import nodemailer from "nodemailer";

const mailSender = async (email: string, title: string, body: string) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        let info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: title,
            html: body,
        });

        return info;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    await mailSender(email, "Verify your email", `Click <a href="${confirmLink}">here</a> to verify your email`);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
    await mailSender(email, "Reset your password", `Click <a href="${resetLink}">here</a> to reset your password`);
}

export const sendTwoFactorEmail = async (email: string, token: string) => {
    await mailSender(email, "Two Factor Authentication", `<h2>Your two factor authentication code is: ${token}</h2>`);
};