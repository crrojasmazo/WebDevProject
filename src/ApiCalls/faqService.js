import api from "./api";

const prefix = "faqs";

const createFaq = async (faq) => await api.post(`${prefix}/create`, faq);

const getAllFaqs = async () => await api.get(`${prefix}/getfaqs`);

const getFaqsById = async (faq) => await api.post(`${prefix}/getfaqs`, faq);

const answerFaq = async (faq) => await api.post(`${prefix}/answer`, faq);

const faqService = {
  createFaq,
  getAllFaqs,
  getFaqsById,
  answerFaq,
};

export default faqService;
