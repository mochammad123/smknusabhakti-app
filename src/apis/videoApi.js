
import { create } from "zustand";
import highSchoolApi from "./highSchoolApi";

const token = localStorage.getItem("token");
const useVideoApi = create((set) => ({
  videos: [],
  isLoading: false,
  error: null,

  getVideos: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`videonew`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ videos: response.data, isLoading: false });
    } catch (error) {
      set({ error:error, isLoading: false });
    }
  },
  createVideo: async (videoData) => {
    set({isLoading: true})
    try {
      const response = await highSchoolApi.post('videonews', videoData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      set((state) => ({videos : [...state.videos, response.data], isLoading: false}))
    } catch (error) {
      set({error: error, isLoading: false})
    }
  },
  updateVideo: async (videoId, videoData) => {
    
  }
}));
