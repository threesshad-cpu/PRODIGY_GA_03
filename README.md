# 🏙️ AI Facade Architect Pro  
### Neural Architectural Synthesis using Pix2Pix CGAN  
**Prodigy InfoTech Internship – Generative AI Task 04**

[![Python](https://img.shields.io/badge/Language-Python-blue.svg)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/Model-Pix2Pix%20CGAN-orange.svg)](https://www.tensorflow.org/)
[![Streamlit](https://img.shields.io/badge/UI-Streamlit%20%7C%20CSS-red.svg)](https://streamlit.io/)
[![Deployment](https://img.shields.io/badge/Deploy-Streamlit%20Cloud-black.svg)](https://streamlit.io/cloud)
[![Prodigy Internship](https://img.shields.io/badge/Prodigy-Internship-orange.svg)](https://prodigyinfotech.dev/)

---

## 🌐 Project Overview

**AI Facade Architect Pro** is a high-end image-to-image translation system built using a **Conditional Generative Adversarial Network (CGAN)** called **Pix2Pix**. 

The application specializes in architectural synthesis, taking **semantic label maps** (color-coded sketches) from the **CMP Facades dataset** and translating them into **photo-realistic building facades** in real-time. It demonstrates the power of adversarial training where a Generator and Discriminator compete to create authentic textures.

---

## 🚀 The Core Idea

Traditional architectural rendering requires massive manual effort to apply textures like stone, glass, or brick to a conceptual design. This project leverages **Generative AI** to automate the rendering process by learning the underlying relationship between architectural labels and pixel-level details.

**AI Facade Architect Pro** showcases:
- **Image-to-Image Mapping** using paired datasets.
- **U-Net Architecture** for preserving high-frequency spatial details.
- **Adversarial Learning** to generate sharp, non-blurry building outputs.

---

## 🛠️ Technical Stack

### Core Logic
- **Pix2Pix (CGAN)** – Paired Image-to-Image translation architecture.
- **TensorFlow / Keras** – Model inference and weight management in a 2026 environment.
- **OpenCV & PIL** – Advanced image preprocessing and production-grade clarity enhancement.

### Frontend & UI
- **Streamlit** – Python-based framework for high-performance ML web apps.
- **CSS3 Animation** – Custom **Aurora Flow** background for a lively, professional feel.
- **Glassmorphism UI** – Frosted-glass containers for a modern dashboard aesthetic.

### Deployment
- **Streamlit Cloud** – Fully managed cloud hosting.
- **Git LFS** – Management of large 200MB+ model files.

---

## 📂 Project Structure

- PRODIGY_GA_04/
- │
- ├── app.py                   # Main application with Aurora UI logic
- ├── facades_cgan_model.h5    # Pre-trained Pix2Pix weights (LFS Tracked)
- ├── requirements.txt         # Python library dependencies
- ├── packages.txt             # System-level dependencies (libgl1)
- ├── README.md                # Project documentation
- └── samples/                 # Curated label maps for instant demo testing
  
---

## ⚙️ How the System Works

### 1️⃣ Model Architecture
The system uses a **U-Net Generator** with skip connections that pass low-level information (like window edges) directly to the output layers to ensure structural accuracy.



---

### 2️⃣ Preprocessing
- Input images are resized to **256x256** pixels.
- Pixels are normalized to the range **[-1, 1]** to align with the Generator's **Tanh** activation layer.

---

### 3️⃣ Neural Synthesis
- The Generator receives the color-coded label map as a "condition".
- It synthesizes textures based on learned patterns from the CMP dataset (e.g., blue areas → glass windows).

---

### 4️⃣ Output Post-Processing
- The output is denormalized back to **[0, 255]**.
- **Image Enhancement** filters for Sharpness and Contrast are applied to ensure a crisp, photo-realistic final render.

---

## ✨ Key Features

### 🧠 Advanced CGAN Integration
- Custom loading logic to resolve **Keras 3.0 legacy metadata** issues (`quantization_mode` fix).
- Optimized for high-fidelity architectural translation.

---

### 🎨 Professional UI/UX
- **Animated Aurora Background**: A moving midnight-gradient that shifts diagonally for a "breathing" effect.
- **Compact Layout**: Uses centered glass containers and constrained image sizes for a sleek software look.

---

### 🎯 Interactive Demo
- **Sample Selection Sidebar**: Allows evaluators to test the model instantly with pre-loaded label maps.
- **Export Utility**: One-click download for high-definition renders.

---
## 📦 Installation & Local Deployment

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/threesshad-cpu/PRODIGY_GA_04.git
cd PRODIGY_GA_04
```
### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
### 3️⃣ Setup Git LFS Dependencies
```bash
git lfs install
git lfs pull
```
### 3️⃣ Run the Application
```bash
streamlit run app.py
```
## 🚀 Live Deployment - 🔗 **Live Web App:** [https://pix2pix-aigen.streamlit.app](https://pix2pix-aigen.streamlit.app)

---

## 📚 Learning Outcomes

- Practical implementation of **Conditional Generative Adversarial Networks (CGANs)**.
- Solving **Version Compatibility** challenges between legacy weights and modern frameworks.
- Managing **Large File Storage (Git LFS)** for production-level AI models.
- Advanced **CSS-in-Streamlit** techniques for professional software delivery.

---

## 🏁 Conclusion

**AI Facade Architect Pro** demonstrates that Generative AI can bridge the gap between abstract design and realistic visualization. This project serves as a foundation for advanced architectures like **CycleGAN** and **Stable Diffusion**.

---

## 🤝 Credits

- **Developer:** Threesssha D  
- **Role:** Generative AI Intern  
- **Organization:** Prodigy InfoTech  
- **Task ID:** PRODIGY_GA_04
