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
const promptsDiv = document.getElementById("prompts");
const output = document.getElementById("output");

let selected = new Set();

/* =============================
   RENDER PROMPT CARDS
============================= */
function renderPrompts() {
  selected.clear();
  promptsDiv.innerHTML = "";

  DATASETS[topicSelect.value].forEach(text => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.innerText = text;

    card.onclick = () => {
      card.classList.toggle("selected");
      selected.has(text) ? selected.delete(text) : selected.add(text);
    };

    promptsDiv.appendChild(card);
  });
}

topicSelect.addEventListener("change", renderPrompts);
renderPrompts();

/* =============================
   MARKOV CHAIN LOGIC (N-GRAM)
============================= */
function buildMarkovChain(sentences, order = 2) {
  const chain = {};

  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);

    for (let i = 0; i <= words.length - order; i++) {
      const key = words.slice(i, i + order).join(" ");
      const next = words[i + order];
      if (!next) continue;

      if (!chain[key]) chain[key] = [];
      chain[key].push(next);
    }
  });

  return chain;
}

function generateSentence(chain, order = 2, maxWords = 18) {
  const keys = Object.keys(chain);
  let current = keys[Math.floor(Math.random() * keys.length)];
  let result = current.split(" ");

  for (let i = 0; i < maxWords; i++) {
    const nextOptions = chain[current];
    if (!nextOptions) break;

    const next = nextOptions[Math.floor(Math.random() * nextOptions.length)];
    result.push(next);
    current = result.slice(-order).join(" ");
  }

  return result.join(" ") + ".";
}

/* =============================
   GENERATE BUTTON
============================= */
function generate() {
  output.innerText = "";

  const baseData =
    selected.size > 0
      ? Array.from(selected)
      : DATASETS[topicSelect.value];

  if (baseData.length < 5) {
    output.innerText = "Please select more prompts.";
    return;
  }

  const chain = buildMarkovChain(baseData, 2);
  let results = [];

  for (let i = 0; i < 10; i++) {
    results.push(`${i + 1}. ${generateSentence(chain)}`);
  }

  output.innerText = results.join("\n");
}
