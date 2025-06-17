// api/index.js
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors({origin: process.env.FRONTEND_URL_DEPLOYED || "*"}));
app.use(express.json());

// Inicializando o Firebase Admin SDK
const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

// Garante que o Firebase só seja inicializado uma vez
if (!admin.apps.length) {
  if (serviceAccountString) {
    try {
      const serviceAccount = JSON.parse(serviceAccountString);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (e) {
      console.error("Falha ao inicializar Firebase Admin SDK:", e);
      // Você pode querer um tratamento de erro mais robusto aqui
      // dependendo da sua necessidade (ex: a API não funcionar sem Firebase).
    }
  } else {
    console.warn("FIREBASE_SERVICE_ACCOUNT_JSON não está definida. Firebase Admin SDK não inicializado.");
  }
}

// Só defina 'db' se o Firebase foi inicializado com sucesso
// ou trate os casos onde 'db' pode não estar disponível.
// Uma forma simples é obter 'db' apenas quando necessário e após a inicialização.
// Para simplificar, vamos assumir que se admin.apps.length > 0, db está acessível.
const db = admin.apps.length ? admin.firestore() : null;

// Rota para obter perguntas
app.get("/api/perguntas", async (req, res) => {
  if (!db) return res.status(503).json({ error: "Serviço Firebase indisponível" });
  try {
    const snapshot = await db.collection("perguntas").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

// Rota para obter respostas de uma pergunta específica
app.get("/api/respostas/:perguntaId", async (req, res) => {
  if (!db) return res.status(503).json({ error: "Serviço Firebase indisponível" });
  const { perguntaId } = req.params;
  try {
    const snapshot = await db
      .collection("respostas")
      .where("perguntaId", "==", perguntaId)
      .get();

    const respostas = snapshot.docs.map((doc) => doc.data());
    res.json(respostas);
  } catch (error) {
    console.error("Erro ao buscar respostas:", error);
    res.status(500).json({ error: "Erro ao buscar respostas" });
  }
});


// Rota para adicionar uma nova resposta
app.post("/api/respostas", async (req, res) => {
  if (!db) return res.status(503).json({ error: "Serviço Firebase indisponível" });
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
    console.error("Erro ao adicionar resposta:", error);
    res.status(500).json({ error: "Erro ao adicionar resposta" });
  }
});


app.put("/api/respostas/:id", async (req, res) => {
  if (!db) return res.status(503).json({ error: "Serviço Firebase indisponível" });
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
    console.error("Erro ao atualizar resposta:", error);
    res.status(500).json({ error: "Erro ao atualizar resposta" });
  }
});


// Rota para excluir uma resposta existente
app.delete("/api/respostas/:id", async (req, res) => {
  if (!db) return res.status(503).json({ error: "Serviço Firebase indisponível" });
  const { id } = req.params;

  try {
    await db.collection("respostas").doc(id).delete();
    res.json({ message: "Resposta excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir resposta:", error);
    res.status(500).json({ error: "Erro ao excluir resposta" });
  }
});

app.get("/", (req,res) => {
    res.status(200).send("API do quiz GabaritaMente funcionando com sucesso!")
});

module.exports = app;