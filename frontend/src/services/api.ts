// API service for NetFood backend
const API_BASE_URL = 'http://127.0.0.1:8000/api';

export interface HeroSlider {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string | null;
  webp_url: string | null;
  image_alt: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  results: T[];
  timestamp: string;
}

export const apiService = {
  // Get all hero sliders
  getHeroSliders: async (): Promise<ApiResponse<HeroSlider>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/sliders/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching hero sliders:', error);
      throw error;
    }
  },

  // Get single hero slider by ID
  getHeroSlider: async (id: number): Promise<{ success: boolean; data: HeroSlider; timestamp: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/sliders/${id}/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching hero slider:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async (): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/health/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error checking API health:', error);
      throw error;
    }
  }
};

export default apiService;