import { Request, Response } from 'express';
import EmailService from '../Services/EmailService';

const users = [
   { name: 'Mauricio', email: 'mauriciopachecoc@gmail.com' },
   { name: 'Diego', email: '' },
];

export default {
   
   async index(req: Request, res: Response) {
      return res.json(users);
   },

   async create(req: Request, res: Response) {
      const emailService = new EmailService();

      emailService.sendMail({
         to:  { 
            name: 'Mauricio Pacheco', 
            email: 'mauriciopachecoc@gmail.com' 
         }, 
         message: { 
            subject: 'Welcome to the App', 
            body: 'Thanks for registering to the App.' 
         }
      });

      return res.send();
   }

};