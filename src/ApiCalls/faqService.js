import api from "./api";

const prefix = "faqs";

const createFaq = async (faq) => await api.post(`${prefix}/create`, faq);

const faqService = {
  createFaq,
};

export default faqService;
