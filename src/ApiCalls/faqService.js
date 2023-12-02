import api from "./api";

const prefix = "faqs";

const createFaq = async (faq) => await api.post(`${prefix}/create`, faq);

const getAllFaqs = async () => await api.get(`${prefix}/getfaqs`);

const getFaqsById = async (user) => await api.post(`${prefix}/getfaqs`, user);

const faqService = {
  createFaq,
  getAllFaqs,
  getFaqsById,
};

export default faqService;
