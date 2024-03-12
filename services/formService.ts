import axios from "axios"; 

export class FormService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

 
  async create(form: Form): Promise<Form> {
    try {
      const response = await axios.post(`${this.baseUrl}/forms`, form);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create form: ${error}`);
    }
  }

  
  async getById(id: string): Promise<Form> {
    try {
      const response = await axios.get(`${this.baseUrl}/forms/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get form with ID ${id}: ${error}`);
    }
  }

 
  async update(form: Form): Promise<Form> {
    try {
      const response = await axios.put(`${this.baseUrl}/forms/${form.id}`, form);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update form: ${error}`);
    }
  }


  async delete(id: number): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/forms/${id}`);
    } catch (error) {
      throw new Error(`Failed to delete form with ID ${id}: ${error}`);
    }
  }
}
