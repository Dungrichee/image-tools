import nodemailer from 'nodemailer';

export default async function sendMail(req: any, res: any) {
    try {
        const { subject, message, name, email } = req.body;

        const element = `
        <H3>Name: ${name}</H3> 
        <H3>Email: ${email}</H3>
        <p>Time: ${new Date()}</p>
        <p>${message}</p>
    `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || '',
                pass: process.env.EMAIL_PASSWORD || '',
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || '',
            to: process.env.EMAIL_USER || '',
            subject,
            html: element,
        };

        await transporter.sendMail(mailOptions);
        res.json({ data: 'success' });
    } catch (error: any) {
        console.log('error', error);
        res.status(error.requestResult.statusCode).send(error.message);
    }
}
