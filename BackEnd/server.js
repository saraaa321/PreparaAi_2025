const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Inicializando o Firebase Admin SDK
const serviceAccount = require("./firebase-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Rota para obter perguntas
app.get("/api/perguntas", async (req, res) => {
  try {
    const snapshot = await db.collection("perguntas").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

// Rota para obter respostas de uma pergunta específica
app.get("/api/respostas/:perguntaId", async (req, res) => {
  const { perguntaId } = req.params;
  try {
    const snapshot = await db
      .collection("respostas")
      .where("perguntaId", "==", perguntaId)
      .get();

    const respostas = snapshot.docs.map((doc) => doc.data());
    res.json(respostas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar respostas" });
  }
});


// Rota para adicionar uma nova resposta
app.post("/api/respostas", async (req, res) => {
  const { perguntaId, resposta, autor } = req.body;

  if (!perguntaId || !resposta) {
    return res.status(400).json({ error: "PerguntaId e resposta são obrigatórios" });
  }

  try {
    const respostaRef = await db.collection("respostas").add({
      perguntaId,
      resposta,
      autor: autor || "Anônimo", // caso não tenha autor
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ message: "Resposta adicionada com sucesso", id: respostaRef.id });
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar resposta" });
  }
});


app.put("/api/respostas/:id", async (req, res) => {
  const { id } = req.params;
  const { resposta, autor } = req.body;

  if (!resposta) {
    return res.status(400).json({ error: "Resposta é obrigatória para atualização" });
  }

  try {
    const respostaRef = db.collection("respostas").doc(id);
    await respostaRef.update({
      resposta,
      autor: autor || "Anônimo",
      atualizadoEm: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.json({ message: "Resposta atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar resposta" });
  }
});


// Rota para excluir uma resposta existente
app.delete("/api/respostas/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.collection("respostas").doc(id).delete();
    res.json({ message: "Resposta excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir resposta" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));