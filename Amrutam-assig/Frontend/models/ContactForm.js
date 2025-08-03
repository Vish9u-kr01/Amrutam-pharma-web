// models/ContactForm.js
import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
  name:{ type:String,required: true },
  contact: { type:String,required: true },
  email: { type: String,required:true, unique: true },
  message: String,
}, { timestamps: true });

export default mongoose.models.ContactForm || mongoose.model('ContactForm', ContactFormSchema);
