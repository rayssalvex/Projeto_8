export async function improveText(text: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Revise e corrija o seguinte texto em tom profissional, com palavras-chave. Melhorando gramática e clareza. Retorne apenas o texto final corrigido, sem explicações, sem comentários, sem listas e sem formatação (sem negrito, sem asteriscos, apenas texto puro):"${text}"`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.error?.message || "Erro desconhecido da API.");
    }

    const data = await res.json();
    let resposta = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    resposta = resposta.replace(/\*/g, "").trim();

    return resposta;
  } catch (error) {
    console.error("Erro ao melhorar o texto:", error);
    return `⚠️ Não foi possível melhorar o texto automaticamente. Tente novamente mais tarde ou revise manualmente.`;
  }
}
