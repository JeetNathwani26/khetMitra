from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load(r"C:\khetmitra\model\file\crop_model.pkl")

@app.route("/")
def home():
    return "🌱 Crop Recommendation API is running!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = [[data["N"], data["P"], data["K"], data["ph"]]]
    prediction = model.predict(features)
    return jsonify({"Recommended Crop": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True, port=5001)  # ✅ Match with React
