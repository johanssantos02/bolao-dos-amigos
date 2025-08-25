import app from "./app";
import "dotenv/config";


const PORT = Number(process.env.PORT ?? 4000);
app.listen(PORT, "0.0.0.0",() => {
  console.log(`✅ Backend ouvindo em http://0.0.0.0:${PORT}`);
});