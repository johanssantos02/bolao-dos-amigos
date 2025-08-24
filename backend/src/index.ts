import app from "./app";
import "dotenv/config";


const PORT = Number(process.env.PORT ?? 4000);
app.listen(PORT, () => {
  console.log(`✅ Backend ouvindo em http://localhost:${PORT}`);
});