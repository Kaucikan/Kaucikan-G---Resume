
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, EXPERIENCES } from "../constants";

const getResumeContext = () => {
  return `
    You are an AI career assistant for ${PERSONAL_INFO.name}. 
    Kaucikan is a ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}.
    
    Education:
    - ${EDUCATION.degree} from ${EDUCATION.institution}. 
    - Graduating in ${EDUCATION.graduation} with a CGPA of ${EDUCATION.cgpa}.

    Skills:
    ${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

    Projects:
    ${PROJECTS.map(p => `- ${p.title}: ${p.description.join(' ')} (Tech: ${p.tech.join(', ')})`).join('\n')}

    Experience:
    ${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.details.join(' ')}`).join('\n')}

    Summary: ${PERSONAL_INFO.summary}

    Contact: Email: ${PERSONAL_INFO.email}, LinkedIn: ${PERSONAL_INFO.linkedin}, GitHub: ${PERSONAL_INFO.github}.

    Instructions:
    - Answer concisely and professionally as if you are representing Kaucikan.
    - If asked about hiring him, mention his strong backend skills in Django and Node.js.
    - Be helpful to recruiters.
  `;
};

export const chatWithResume = async (userMessage: string): Promise<string> => {
  try {
    // Fix: Use process.env.API_KEY directly for initialization as per @google/genai guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: getResumeContext(),
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently sleeping. Please try reaching out via email!";
  }
};