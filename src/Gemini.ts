async function callGeminiAPI(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.error?.message || "Erro desconhecido da API.");
    }

    const data = await res.json();
    let resposta = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return resposta.replace(/\*/g, "").trim();
  } catch (error) {
    console.error("Erro na chamada da API:", error);
    return "⚠️ Não foi possível processar a solicitação. Tente novamente mais tarde.";
  }
}

export async function improveText(text: string): Promise<string> {
  const prompt = `Revise e corrija o seguinte texto em tom profissional, com palavras-chave. 
  Melhore a gramática e a clareza. Retorne apenas o texto final corrigido, sem explicações, sem comentários, sem listas e sem formatação (apenas texto puro): "${text}"`;

  return await callGeminiAPI(prompt);
}

export async function generateProfessionalSummary(currentText: string): Promise<string> {
  const prompt = `Com base nas seguintes ideias, gere um resumo profissional conciso e impactante para um currículo. Se as ideias estiverem vazias, crie um exemplo de resumo para um desenvolvedor de software. 
  Retorne apenas o texto final, sem explicações ou formatação especial (como negrito ou asteriscos): "${currentText}"`;

  return await callGeminiAPI(prompt);
}
