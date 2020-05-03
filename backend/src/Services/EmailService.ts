interface IMailTo {
   name: string;
   email: string;
}

interface IMailMessage {
   subject: string;
   body: string;
   attachment?: string[];
}

interface IMessageDTO {
   to: IMailTo;
   message: IMailMessage;
}

interface IEmailService {
   sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
   
   // Not sending mails, just recreating
   sendMail({to, message}: IMessageDTO) {
      console.log(`Email Sent to ${to.name}: ${message.subject}!`);
   }
}

export default EmailService;