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

const useBlogApi = create((set) => ({
  blogs: [],
  isLoading: false,
  error: null,

  getBlogs: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`blognew`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ blogs: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },

  getAllBlogs: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`blogallnews`, {
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ blogs: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  createBlog: async (blogData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post("blognews", blogData, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
  updateBlog: async (blogId, blogData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post(
        `blognews/${blogId}`,
        blogData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
  deleteBlog: async (blogId) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.delete(`blognews/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

export default useBlogApi;
