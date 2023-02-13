import Swal from "sweetalert2";
import { create } from "zustand";
import highSchoolApi from "./highSchoolApi";

const token = localStorage.getItem("token");

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

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
      set({ error: error, isLoading: false });
    }
  },

  getAllVideos: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`videoallnews`, {
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ videos: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  createVideo: async (videoData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post("videonews", videoData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // set((state) => ({
      //   videos: [...state.videos, response.data],
      //   isLoading: false,
      // }));
      set({ isLoading: false });
      Toast.fire({
        icon: "success",
        title: `${response.data.data.title} added successfully`,
      });
    } catch (error) {
      set({ error: error, isLoading: false });
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: error.response.data.message,
      });
    }
  },
  updateVideo: async (videoId, videoData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post(
        `videonews/${videoId}`,
        videoData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // set((state) => ({
      //   videos: state.videos.map((video) =>
      //     video.id === videoId ? { ...video, ...response.data } : video
      //   ),
      //   isLoading: false,
      // }));
      set({ isLoading: false });
      Toast.fire({
        icon: "success",
        title: `${response.data.data.title} added successfully`,
      });
    } catch (error) {
      set({ error: error, isLoading: false });
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: error.response.data.message,
      });
    }
  },
  deleteVideo: async (videoId) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.delete(`videonews/${videoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // set((state) => ({
      //   videos: state.videos.filter((video) => video.id !== videoId),
      //   isLoading: false,
      // }));
      set({ isLoading: false });
      Toast.fire({
        icon: "success",
        title: `${response.data.data.title} success deleted!`,
      });
    } catch (error) {
      set({ error: error, isLoading: false });
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: error.response.data.message,
      });
    }
  },
}));

export default useVideoApi;
