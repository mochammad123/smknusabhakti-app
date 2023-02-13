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

const useGaleryApi = create((set) => ({
  galeries: [],
  isLoading: false,
  error: null,

  getGaleries: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`galeries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ galeries: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },

  getAllGaleries: async (page, keyword) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.get(`galeryallnews`, {
        params: {
          page: page,
          search: keyword,
        },
      });
      set({ galeries: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  createGalery: async (galeryData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post("galery", galeryData, {
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
  updateGalery: async (galeryId, galeryData) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.post(
        `galery/${galeryId}`,
        galeryData,
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
  deleteGalery: async (galeryId) => {
    set({ isLoading: true });
    try {
      const response = await highSchoolApi.delete(`galery/${galeryId}`, {
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

export default useGaleryApi;
