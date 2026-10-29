export interface WebPage {
  id: string;
  titleFa: string;
  titleEn: string;
  contentFa: string;
  contentEn: string;
}

export interface Pathway {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  difficultyFa: "ساده" | "متوسط" | "سخت" | "ویژه";
  difficultyEn: "Easy" | "Medium" | "High" | "Elite";
  processingTimeFa: string;
  processingTimeEn: string;
  targetAudienceFa: string;
  targetAudienceEn: string;
  requirementsFa: string[];
  requirementsEn: string[];
}

export interface SuccessStory {
  id: string;
  nameFa: string;
  nameEn: string;
  fieldFa: string;
  fieldEn: string;
  destinationFa: string;
  destinationEn: string;
  resultFa: string;
  resultEn: string;
  beforeFa: string;
  beforeEn: string;
  afterFa: string;
  afterEn: string;
  timelineFa: string;
  timelineEn: string;
  metricFa?: string;
  metricEn?: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  questionFa: string;
  questionEn: string;
  answerFa: string;
  answerEn: string;
  categoryFa: string;
  categoryEn: string;
}

export interface BlogArticle {
  id: string;
  titleFa: string;
  titleEn: string;
  summaryFa: string;
  summaryEn: string;
  contentFa: string;
  contentEn: string;
  authorFa: string;
  authorEn: string;
  dateFa: string;
  dateEn: string;
  readTimeFa: string;
  readTimeEn: string;
  tagFa: string;
  tagEn: string;
}
