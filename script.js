/* =============================
   DATASETS
============================= */
const DATASETS = {
  "Machine Learning": [
    "machine learning is a subset of artificial intelligence",
    "supervised learning uses labeled training data",
    "unsupervised learning discovers hidden patterns",
    "reinforcement learning uses rewards and penalties",
    "classification predicts discrete class labels",
    "regression predicts continuous values",
    "training data is used to fit the model",
    "overfitting occurs when a model memorizes data",
    "gradient descent minimizes loss functions",
    "backpropagation updates weights using gradients",
    "activation functions introduce nonlinearity",
    "neural networks consist of layers",
    "transformers use attention mechanisms",
    "model evaluation measures performance"
  ],

  "Operating Systems": [
    "operating systems manage hardware resources",
    "process scheduling allocates cpu time",
    "deadlock occurs when processes wait indefinitely",
    "paging manages virtual memory",
    "context switching saves process state",
    "file systems organize persistent storage",
    "interrupts signal hardware events",
    "system calls access kernel services",
    "threads share address space",
    "synchronization avoids race conditions"
  ],

  "Databases": [
    "databases store structured information",
    "tables contain rows and columns",
    "primary keys uniquely identify records",
    "foreign keys enforce relationships",
    "sql queries manipulate data",
    "indexes improve query performance",
    "normalization reduces redundancy",
    "transactions ensure consistency",
    "acid properties guarantee reliability",
    "replication improves availability"
  ],

  "Computer Networks": [
    "computer networks connect devices",
    "tcp provides reliable transmission",
    "udp supports fast delivery",
    "routing determines packet paths",
    "dns resolves domain names",
    "firewalls enhance security",
    "encryption protects data",
    "ip addressing identifies hosts",
    "latency affects performance",
    "bandwidth determines capacity"
  ]
};

/* =============================
   DOM ELEMENTS
============================= */
const topicSelect = document.getElementById("topic");
const promptContainer = document.getElementById("promptContainer");
const output = document.getElementById("output");

/* ===============================
   STATE
================================ */
let selectedPrompt = null;

/* ===============================
   RENDER PROMPTS (SINGLE SELECT)
================================ */
function renderPrompts() {
  promptContainer.innerHTML = "";
  selectedPrompt = null;
  output.innerText = "";

  DATASETS[topicSelect.value].forEach(text => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.innerText = text;

    card.onclick = () => {
      // Remove selection from all cards
      document.querySelectorAll(".prompt-card").forEach(c =>
        c.classList.remove("selected")
      );

      // Select only THIS card
      card.classList.add("selected");
      selectedPrompt = text;
    };

    promptContainer.appendChild(card);
  });
}

topicSelect.addEventListener("change", renderPrompts);
renderPrompts();

/* ===============================
   MARKOV CHAIN (PROPER LOGIC)
================================ */
function buildMarkovChain(sentences, order = 2) {
  const chain = {};

  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);

    for (let i = 0; i < words.length - order; i++) {
      const key = words.slice(i, i + order).join(" ");
      const next = words[i + order];

      if (!chain[key]) chain[key] = [];
      chain[key].push(next);
    }
  });

  return chain;
}

function generateSentence(chain, seed, order = 2, maxWords = 25) {
  let words = seed
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ");

  // Start with last `order` words of selected prompt
  let result = [...words];
  let key = result.slice(-order).join(" ");

  for (let i = 0; i < maxWords; i++) {
    // 🔑 If chain breaks, jump to a random valid state
    if (!chain[key]) {
      key = Object.keys(chain)[
        Math.floor(Math.random() * Object.keys(chain).length)
      ];
      result.push(...key.split(" "));
      continue;
    }

    const next =
      chain[key][Math.floor(Math.random() * chain[key].length)];

    result.push(next);
    key = result.slice(-order).join(" ");
  }

  // ✂️ Trim overly repetitive endings
  return [...new Set(result)].join(" ") + ".";
}


/* ===============================
   GENERATE BUTTON
================================ */
function generate() {
  if (!selectedPrompt) {
    output.innerText = "Please select ONE prompt to generate text.";
    return;
  }

  const sentences = DATASETS[topicSelect.value];
  const chain = buildMarkovChain(sentences, 2);

  let result = [];

  for (let i = 0; i < 10; i++) {
    result.push(
      `${i + 1}. ${generateSentence(chain, selectedPrompt, 2)}`
    );
  }

  output.innerText = result.join("\n");
}
