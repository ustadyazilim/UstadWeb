from flask import Flask, jsonify, render_template, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)

# Allow all origins for debugging purposes
CORS(app)

# JSON dosyasını okuma
current_dir = os.path.dirname(os.path.abspath(__file__))
json_file_path = os.path.join(current_dir, "summarized_education.json")
print(f"Looking for JSON file at: {json_file_path}")

if os.path.exists(json_file_path):
    with open(json_file_path, "r", encoding="utf-8") as file:
        menu_data = json.load(file)
        print(f"Loaded menu data: {menu_data}")
else:
    print(f"File not found at: {json_file_path}")
    menu_data = []

@app.route("/")
def index():
    """
    Ana sayfa: index.html şablonunu döndürür.
    """
    return render_template("index.html")

@app.route("/menu", methods=["GET"])
def get_main_menu():
    """
    Menü verisini JSON formatında döndürür.
    """
    return jsonify(menu_data)

@app.route("/static/videos/<path:filename>")
def serve_video(filename):
    """
    Statik dosyalardan video dosyasını döndürür.
    Örneğin: /static/videos/video.mp4
    """
    video_path = os.path.join("static", "videos")
    return send_from_directory(video_path, filename)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
