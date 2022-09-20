import { BASE_URL } from './_api_base_url';
import axios from 'axios';

export async function apiSendContactEmail(email: string, name: string, message: String): Promise<boolean> {
  try {
    const query = await axios.post(`${BASE_URL}/contact-us`, { name, email, message });
    return true;
  } catch (error: any) {
    console.log(error?.response?.data?.message);
    throw error;
  }
}
