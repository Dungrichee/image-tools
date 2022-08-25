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
                user: 'dungsky482@gmail.com',
                pass: 'Dungnt1004@',
            },
        });

        const mailOptions = {
            from: 'dungsky482@gmail.com',
            to: 'dungsky482@gmail.com',
            subject,
            html: element,
        };

        await transporter.sendMail(mailOptions);
        res.json({ data: 'success' });
    } catch (error) {
        console.log('error', error);
        res.json({ error });
    }
}
